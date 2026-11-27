-- Rostera demo collaboration schema. Run once in Supabase SQL Editor.
-- It uses synthetic Demo Plant data and Supabase Auth. Never put service_role keys in the browser.
create extension if not exists pgcrypto;

create table if not exists public.companies (
  id uuid primary key,
  name text not null,
  created_at timestamptz not null default now()
);
insert into public.companies (id, name)
values ('00000000-0000-4000-8000-000000000001', 'Demo Plant')
on conflict (id) do nothing;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  company_id uuid not null references public.companies(id),
  full_name text not null check (char_length(full_name) between 2 and 80),
  role text not null default 'employee' check (role in ('employee','mentor','manager','hr_admin')),
  department text not null default '' check (char_length(department) <= 80),
  avatar_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Private profile fields are readable only by their owner.
create table if not exists public.profile_details (
  user_id uuid primary key references auth.users(id) on delete cascade,
  about text not null default '' check (char_length(about) <= 500),
  age smallint check (age is null or age between 14 and 100),
  development_goal text not null default '' check (char_length(development_goal) <= 500),
  skills text not null default '' check (char_length(skills) <= 500),
  updated_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  type text not null check (type in ('group','direct')),
  slug text,
  title text not null check (char_length(title) between 1 and 100),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique(company_id, slug)
);

create table if not exists public.conversation_members (
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key(conversation_id, user_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);
create index if not exists messages_conversation_created_idx on public.messages(conversation_id, created_at);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  department text not null default 'All departments' check (char_length(department) <= 80),
  category text not null default 'Company' check (char_length(category) <= 40),
  title text not null check (char_length(title) between 1 and 140),
  body text not null check (char_length(body) between 1 and 3000),
  created_at timestamptz not null default now()
);
create index if not exists news_posts_company_created_idx on public.news_posts(company_id, created_at desc);

create table if not exists public.news_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.news_posts(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 500),
  created_at timestamptz not null default now()
);

create table if not exists public.news_likes (
  post_id uuid not null references public.news_posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key(post_id, user_id)
);

insert into public.conversations(id, company_id, type, slug, title)
values
 ('00000000-0000-4000-8000-000000000010','00000000-0000-4000-8000-000000000001','group','all','All company'),
 ('00000000-0000-4000-8000-000000000011','00000000-0000-4000-8000-000000000001','group','workshop','Production floor'),
 ('00000000-0000-4000-8000-000000000012','00000000-0000-4000-8000-000000000001','group','maintenance','Technical service')
on conflict (id) do nothing;

create or replace function public.roster_same_company(target_company uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.profiles p where p.id = (select auth.uid()) and p.company_id = target_company) $$;

create or replace function public.roster_is_conversation_member(target_conversation uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.conversation_members cm where cm.conversation_id = target_conversation and cm.user_id = (select auth.uid())) $$;

revoke all on function public.roster_same_company(uuid) from public, anon;
revoke all on function public.roster_is_conversation_member(uuid) from public, anon;
grant execute on function public.roster_same_company(uuid) to authenticated;
grant execute on function public.roster_is_conversation_member(uuid) to authenticated;

create or replace function public.roster_create_profile()
returns trigger language plpgsql security definer set search_path = public
as $$
declare demo_company uuid := '00000000-0000-4000-8000-000000000001';
begin
  if new.raw_user_meta_data->>'company_id' is distinct from demo_company::text then
    raise exception 'A valid Rostera company invitation is required';
  end if;
  insert into public.profiles(id, company_id, full_name, role)
  values(new.id, demo_company, left(coalesce(new.raw_user_meta_data->>'full_name','New employee'),80), 'employee');
  insert into public.profile_details(user_id) values(new.id);
  insert into public.conversation_members(conversation_id,user_id)
  select id,new.id from public.conversations where company_id=demo_company and type='group'
  on conflict do nothing;
  return new;
end;
$$;
revoke all on function public.roster_create_profile() from public, anon, authenticated;
drop trigger if exists roster_auth_user_created on auth.users;
create trigger roster_auth_user_created after insert on auth.users
for each row execute procedure public.roster_create_profile();

create or replace function public.roster_start_direct(target_user uuid)
returns uuid language plpgsql security definer set search_path = public
as $$
declare current_user_id uuid := (select auth.uid()); current_company uuid; target_company uuid; conversation_id uuid;
begin
  if current_user_id is null or target_user = current_user_id then raise exception 'Invalid conversation participant'; end if;
  select company_id into current_company from public.profiles where id=current_user_id;
  select company_id into target_company from public.profiles where id=target_user;
  if current_company is null or current_company is distinct from target_company then raise exception 'User is outside your organization'; end if;
  select c.id into conversation_id from public.conversations c
  join public.conversation_members a on a.conversation_id=c.id and a.user_id=current_user_id
  join public.conversation_members b on b.conversation_id=c.id and b.user_id=target_user
  where c.type='direct' and c.company_id=current_company limit 1;
  if conversation_id is null then
    insert into public.conversations(company_id,type,title,created_by) values(current_company,'direct','Direct conversation',current_user_id) returning id into conversation_id;
    insert into public.conversation_members(conversation_id,user_id) values(conversation_id,current_user_id),(conversation_id,target_user);
  end if;
  return conversation_id;
end;
$$;
revoke all on function public.roster_start_direct(uuid) from public, anon;
grant execute on function public.roster_start_direct(uuid) to authenticated;

create or replace function public.roster_touch_updated_at()
returns trigger language plpgsql set search_path = public
as $$ begin new.updated_at=now(); return new; end $$;
drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at before update on public.profiles for each row execute procedure public.roster_touch_updated_at();
drop trigger if exists profile_details_touch_updated_at on public.profile_details;
create trigger profile_details_touch_updated_at before update on public.profile_details for each row execute procedure public.roster_touch_updated_at();

alter table public.companies enable row level security;
alter table public.profiles enable row level security;
alter table public.profile_details enable row level security;
alter table public.conversations enable row level security;
alter table public.conversation_members enable row level security;
alter table public.messages enable row level security;
alter table public.news_posts enable row level security;
alter table public.news_comments enable row level security;
alter table public.news_likes enable row level security;

revoke all on public.companies, public.profiles, public.profile_details, public.conversations, public.conversation_members, public.messages, public.news_posts, public.news_comments, public.news_likes from anon, authenticated;
grant select on public.companies, public.profiles, public.conversations, public.conversation_members, public.messages, public.news_posts, public.news_comments, public.news_likes to authenticated;
grant update(full_name,department,avatar_path) on public.profiles to authenticated;
grant update(about,age,development_goal,skills) on public.profile_details to authenticated;
grant select, insert on public.profile_details to authenticated;
grant insert on public.messages, public.news_comments, public.news_likes to authenticated;
grant delete on public.news_comments, public.news_likes to authenticated;

create policy companies_same_org_read on public.companies for select to authenticated using (public.roster_same_company(id));
create policy profiles_same_org_read on public.profiles for select to authenticated using (public.roster_same_company(company_id));
create policy profiles_self_update on public.profiles for update to authenticated using (id=(select auth.uid())) with check (id=(select auth.uid()) and public.roster_same_company(company_id));
create policy profile_details_self_read on public.profile_details for select to authenticated using (user_id=(select auth.uid()));
create policy profile_details_self_insert on public.profile_details for insert to authenticated with check (user_id=(select auth.uid()));
create policy profile_details_self_update on public.profile_details for update to authenticated using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));

create policy conversations_member_read on public.conversations for select to authenticated using (public.roster_same_company(company_id) and public.roster_is_conversation_member(id));
create policy conversation_members_member_read on public.conversation_members for select to authenticated using (public.roster_is_conversation_member(conversation_id));
create policy messages_member_read on public.messages for select to authenticated using (public.roster_is_conversation_member(conversation_id));
create policy messages_member_insert on public.messages for insert to authenticated with check (sender_id=(select auth.uid()) and public.roster_is_conversation_member(conversation_id));

create policy news_same_org_read on public.news_posts for select to authenticated using (public.roster_same_company(company_id));
create policy news_manager_insert on public.news_posts for insert to authenticated with check (
  author_id=(select auth.uid()) and public.roster_same_company(company_id)
  and exists(select 1 from public.profiles p where p.id=(select auth.uid()) and p.role in ('manager','hr_admin'))
);
create policy news_author_update on public.news_posts for update to authenticated using (author_id=(select auth.uid())) with check (author_id=(select auth.uid()) and public.roster_same_company(company_id));
create policy news_author_delete on public.news_posts for delete to authenticated using (author_id=(select auth.uid()));
grant update, delete on public.news_posts to authenticated;

create policy news_comments_same_org_read on public.news_comments for select to authenticated using (
  exists(select 1 from public.news_posts p where p.id=post_id and public.roster_same_company(p.company_id))
);
create policy news_comments_member_insert on public.news_comments for insert to authenticated with check (
  author_id=(select auth.uid()) and exists(select 1 from public.news_posts p where p.id=post_id and public.roster_same_company(p.company_id))
);
create policy news_comments_author_delete on public.news_comments for delete to authenticated using (author_id=(select auth.uid()));
create policy news_likes_same_org_read on public.news_likes for select to authenticated using (
  exists(select 1 from public.news_posts p where p.id=post_id and public.roster_same_company(p.company_id))
);
create policy news_likes_self_insert on public.news_likes for insert to authenticated with check (
  user_id=(select auth.uid()) and exists(select 1 from public.news_posts p where p.id=post_id and public.roster_same_company(p.company_id))
);
create policy news_likes_self_delete on public.news_likes for delete to authenticated using (user_id=(select auth.uid()));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('rostera-avatars','rostera-avatars',false,8388608,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=false,file_size_limit=8388608,allowed_mime_types=array['image/jpeg','image/png','image/webp'];
create policy avatar_same_org_read on storage.objects for select to authenticated using (
  bucket_id='rostera-avatars' and exists(
    select 1 from public.profiles p where p.id::text=(storage.foldername(name))[1] and public.roster_same_company(p.company_id)
  )
);
create policy avatar_self_upload on storage.objects for insert to authenticated with check (bucket_id='rostera-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy avatar_self_update on storage.objects for update to authenticated using (bucket_id='rostera-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text) with check (bucket_id='rostera-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy avatar_self_delete on storage.objects for delete to authenticated using (bucket_id='rostera-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

-- Supabase Realtime: allow members to receive updates only through the RLS policies above.
do $$ begin
  alter publication supabase_realtime add table public.messages;
exception when duplicate_object then null;
end $$;
do $$ begin
  alter publication supabase_realtime add table public.news_posts;
exception when duplicate_object then null;
end $$;
do $$ begin
  alter publication supabase_realtime add table public.news_comments;
exception when duplicate_object then null;
end $$;
do $$ begin
  alter publication supabase_realtime add table public.news_likes;
exception when duplicate_object then null;
end $$;

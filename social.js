/* Local interaction layer for profiles, team messages, and company news.
   Replace the local storage adapter with Supabase after project credentials exist. */
(() => {
  const copy = {
    ru: {
      messages: 'Сообщения', news: 'Новости', localSync: 'Демо-режим: чаты и реакции пока сохраняются в этом браузере. Для общения между устройствами подключите Supabase.',
      profile: 'Мой профиль', switchAccount: 'Сменить аккаунт', logout: 'Выйти из аккаунта', about: 'О себе', age: 'Возраст', photo: 'Фотография', department: 'Подразделение', goals: 'Цели развития', skills: 'Навыки и опыт', save: 'Сохранить изменения', choosePhoto: 'Выбрать фото', photoNote: 'Фото сжимается и остаётся в этом браузере.', profileSaved: 'Профиль сохранён в этом браузере.', photoLarge: 'Выберите изображение до 8 МБ.',
      groups: 'Общие чаты', people: 'Сотрудники', allTeam: 'Вся организация', workshop: 'Производственный участок', maintenance: 'Техническая служба', writeMessage: 'Напишите сообщение…', send: 'Отправить', noMessages: 'Пока нет сообщений. Начните разговор.', direct: 'Личный чат', group: 'Общий чат', localOnly: 'Локальный демо-чат',
      companyNews: 'Что происходит в организации', newsSubtitle: 'Новости и события всех подразделений', allDepartments: 'Все подразделения', safety: 'Безопасность', operations: 'Производство', learning: 'Обучение', like: 'Нравится', liked: 'Нравится вам', comment: 'Комментарий', writeComment: 'Напишите комментарий…', postComment: 'Ответить', comments: 'Комментарии', noComments: 'Пока нет комментариев.',
      news1Title: 'Неделя безопасного производства', news1Body: 'В цехах пройдут короткие встречи по безопасной работе с оборудованием. Руководители смен поделятся расписанием на досках объявлений.',
      news2Title: 'Новая программа наставничества', news2Body: 'Сотрудники могут выбрать наставника и согласовать цели на ближайший месяц. Записаться можно в разделе «Наставничество».',
      news3Title: 'Идеи по улучшению процессов', news3Body: 'Команда технической службы собрала предложения по сокращению времени переналадки. В конце недели поделимся первыми результатами.',
      message1: 'Добро пожаловать в общий чат команды! Здесь публикуются новости и вопросы для всех подразделений.', message2: 'На этой неделе проводим короткие встречи по безопасности. Время уточняйте у руководителя смены.', message3: 'Кто проходил новый материал по обслуживанию оборудования? Буду рад обменяться заметками.',
      privateNote: 'Личные чаты доступны участникам выбранного диалога.', profilePrivacy: 'Возраст и цели хранятся в вашем профиле. В демо они не передаются другим участникам.'
    },
    hy: {
      messages: 'Հաղորդագրություններ', news: 'Նորություններ', localSync: 'Դեմո ռեժիմ․ զրույցներն ու արձագանքները պահվում են միայն այս դիտարկչում։ Սարքերի միջև համաժամացման համար միացրեք Supabase-ը։',
      profile: 'Իմ պրոֆիլը', switchAccount: 'Փոխել հաշիվը', logout: 'Դուրս գալ հաշվից', about: 'Իմ մասին', age: 'Տարիք', photo: 'Լուսանկար', department: 'Բաժին', goals: 'Զարգացման նպատակներ', skills: 'Հմտություններ և փորձ', save: 'Պահպանել փոփոխությունները', choosePhoto: 'Ընտրել լուսանկար', photoNote: 'Լուսանկարը սեղմվում և մնում է այս դիտարկչում։', profileSaved: 'Պրոֆիլը պահպանվել է այս դիտարկչում։', photoLarge: 'Ընտրեք մինչև 8 ՄԲ պատկեր։',
      groups: 'Ընդհանուր զրույցներ', people: 'Աշխատակիցներ', allTeam: 'Ամբողջ կազմակերպությունը', workshop: 'Արտադրամաս', maintenance: 'Տեխնիկական ծառայություն', writeMessage: 'Գրեք հաղորդագրություն…', send: 'Ուղարկել', noMessages: 'Հաղորդագրություններ դեռ չկան։ Սկսեք զրույցը։', direct: 'Անձնական զրույց', group: 'Ընդհանուր զրույց', localOnly: 'Տեղային դեմո զրույց',
      companyNews: 'Ինչ է կատարվում կազմակերպությունում', newsSubtitle: 'Բոլոր ստորաբաժանումների նորություններն ու իրադարձությունները', allDepartments: 'Բոլոր բաժինները', safety: 'Անվտանգություն', operations: 'Արտադրություն', learning: 'Ուսուցում', like: 'Հավանել', liked: 'Ձեզ դուր է գալիս', comment: 'Մեկնաբանություն', writeComment: 'Գրեք մեկնաբանություն…', postComment: 'Պատասխանել', comments: 'Մեկնաբանություններ', noComments: 'Մեկնաբանություններ դեռ չկան։',
      news1Title: 'Անվտանգ արտադրության շաբաթ', news1Body: 'Արտադրամասերում կանցկացվեն կարճ հանդիպումներ սարքավորումների անվտանգ աշխատանքի մասին։ Հերթափոխերի ղեկավարները կհրապարակեն ժամանակացույցը։',
      news2Title: 'Մենթորության նոր ծրագիր', news2Body: 'Աշխատակիցները կարող են ընտրել մենթոր և սահմանել մոտակա ամսվա նպատակները։ Գրանցումը հասանելի է «Մենթորություն» բաժնում։',
      news3Title: 'Գաղափարներ գործընթացների բարելավման համար', news3Body: 'Տեխնիկական ծառայության թիմը հավաքել է վերակարգավորման ժամանակը կրճատելու առաջարկներ։ Շաբաթվա վերջում կներկայացնենք առաջին արդյունքները։',
      message1: 'Բարի գալուստ թիմի ընդհանուր զրույց։ Այստեղ կարող եք կիսվել նորություններով և հարցերով։', message2: 'Այս շաբաթ անցկացվում են անվտանգության կարճ հանդիպումներ։ Ժամը ճշտեք հերթափոխի ղեկավարից։', message3: 'Ո՞վ է անցել սարքավորումների սպասարկման նոր նյութը։ Կուզեմ նշումներ փոխանակել։',
      privateNote: 'Անձնական զրույցները հասանելի են միայն ընտրված զրույցի մասնակիցներին։', profilePrivacy: 'Տարիքն ու նպատակները պահվում են ձեր պրոֆիլում և դեմոյում չեն փոխանցվում այլ մասնակիցներին։'
    },
    en: {
      messages: 'Messages', news: 'News', localSync: 'Demo mode: chats and reactions are stored in this browser only. Connect Supabase to share across devices.',
      profile: 'My profile', switchAccount: 'Switch account', logout: 'Sign out', about: 'About me', age: 'Age', photo: 'Photo', department: 'Department', goals: 'Development goals', skills: 'Skills and experience', save: 'Save changes', choosePhoto: 'Choose photo', photoNote: 'The photo is resized and stays in this browser.', profileSaved: 'Profile saved in this browser.', photoLarge: 'Choose an image under 8 MB.',
      groups: 'Group chats', people: 'People', allTeam: 'Everyone', workshop: 'Production floor', maintenance: 'Technical team', writeMessage: 'Write a message…', send: 'Send', noMessages: 'No messages yet. Start the conversation.', direct: 'Direct message', group: 'Group chat', localOnly: 'Local demo chat',
      companyNews: 'What is happening across the company', newsSubtitle: 'Updates and events from every department', allDepartments: 'All departments', safety: 'Safety', operations: 'Operations', learning: 'Learning', like: 'Like', liked: 'Liked', comment: 'Comment', writeComment: 'Write a comment…', postComment: 'Reply', comments: 'Comments', noComments: 'No comments yet.',
      news1Title: 'Safe production week', news1Body: 'Short equipment safety sessions will take place across the workshops. Shift leads will share schedules on notice boards.',
      news2Title: 'New mentoring program', news2Body: 'Employees can choose a mentor and agree on goals for the coming month in the Mentorship section.',
      news3Title: 'Ideas to improve operations', news3Body: 'The technical team gathered ideas to reduce setup time. We will share the first results at the end of the week.',
      message1: 'Welcome to the team group chat! Share updates and questions for everyone here.', message2: 'Short safety meetings are running this week. Ask your shift lead for the time.', message3: 'Has anyone completed the new equipment maintenance material? I would be glad to compare notes.',
      privateNote: 'Direct chats are visible to the people in the conversation.', profilePrivacy: 'Your age and goals are stored in your profile and are not shared with other people in the demo.'
    }
  };
  Object.keys(copy).forEach(language => Object.assign(I18N[language], copy[language]));
  ['ru','hy','en'].forEach(language => {
    I18N[language].nav.pop();
    I18N[language].nav.push(copy[language].messages, copy[language].news, I18N[language].assistant);
  });
  navKeys.pop(); navIcons.pop();
  navKeys.push('messages','news','assistant'); navIcons.push('✉','◉','✳');

  const word = key => I18N[lang]?.[key] || I18N.ru[key] || key;
  const communityKey = 'rostera-community-v1';
  const readCommunity = () => {
    const seeded = {
      messages: {
        all: [
          { id: 'm1', from: 'anna', text: word('message1'), at: '2026-11-26T08:30:00.000Z' },
          { id: 'm2', from: 'liza', text: word('message2'), at: '2026-11-26T10:10:00.000Z' },
          { id: 'm3', from: 'alex', text: word('message3'), at: '2026-11-26T12:40:00.000Z' }
        ], workshop: [], maintenance: []
      },
      news: [
        { id: 'safety-week', title: word('news1Title'), body: word('news1Body'), department: 'allDepartments', category: 'safety', author: 'anna', at: '2026-11-26T08:00:00.000Z', likes: [], comments: [] },
        { id: 'mentor-program', title: word('news2Title'), body: word('news2Body'), department: 'allDepartments', category: 'learning', author: 'liza', at: '2026-11-25T11:30:00.000Z', likes: [], comments: [] },
        { id: 'setup-ideas', title: word('news3Title'), body: word('news3Body'), department: 'maintenance', category: 'operations', author: 'anna', at: '2026-11-24T09:15:00.000Z', likes: [], comments: [] }
      ]
    };
    try {
      const saved = JSON.parse(localStorage.getItem(communityKey) || 'null');
      if (saved && Array.isArray(saved.news) && saved.messages) return saved;
    } catch {}
    return seeded;
  };
  let community = readCommunity();
  let activeConversation = 'all';
  let newsFilter = 'all';

  function saveCommunity() { localStorage.setItem(communityKey, JSON.stringify(community)); }
  function localBanner() { return `<div class="notice community-notice"><span>◉</span>${word('localSync')}</div>`; }
  function initials(account) { return (account?.initials || account?.name?.split(' ').map(part=>part[0]).slice(0,2).join('') || 'R').toUpperCase(); }
  function avatarMarkup(account, size='') {
    let image = '';
    try { image = loadStore(account.id).profile?.avatarDataUrl || ''; } catch {}
    if (!/^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(image)) image = '';
    return image ? `<span class="person-avatar ${size}"><img src="${image}" alt=""></span>` : `<span class="person-avatar ${size}">${safe(initials(account))}</span>`;
  }
  function updateAvatar() {
    const holder = document.querySelector('#profile-avatar');
    if (!holder || !activeAccountId) return;
    let picture = '';
    try { picture = loadStore(activeAccountId).profile?.avatarDataUrl || ''; } catch {}
    if (/^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(picture)) holder.innerHTML = `<img src="${picture}" alt="">`;
    else holder.textContent = initials(accounts[activeAccountId]);
  }

  function showAccountMenu() {
    const account = accounts[activeAccountId] || accounts.anna;
    const dialog = document.querySelector('#account-dialog'), body = document.querySelector('#account-dialog-body');
    body.innerHTML = `<div class="row"><h2>${word('profile')}</h2><button type="button" class="btn outline small" id="close-account">×</button></div><div class="account-summary">${avatarMarkup(account,'large')}<div><strong>${safe(account.name)}</strong><div class="metric-label">${safe(roleText(account))}</div></div></div><div class="form account-actions"><button type="button" class="btn" id="open-profile">${word('profile')}</button><button type="button" class="btn outline" id="switch-account">${word('switchAccount')}</button><button type="button" class="btn outline" id="logout-account">${word('logout')}</button></div>`;
    dialog.showModal();
    document.querySelector('#close-account').onclick = () => dialog.close();
    document.querySelector('#open-profile').onclick = () => { dialog.close(); openProfileEditor(); };
    document.querySelector('#switch-account').onclick = () => { event('account_switch'); dialog.close(); showLogin(activeAccountId); };
    document.querySelector('#logout-account').onclick = () => { event('logout'); dialog.close(); showLogin(); };
  }
  const accountMenu = document.querySelector('#account-menu');
  accountMenu?.addEventListener('click', e => { e.preventDefault(); e.stopImmediatePropagation(); showAccountMenu(); }, true);

  function openProfileEditor() {
    const profile = store.profile || {};
    const modal = document.querySelector('#modal'), body = document.querySelector('#modal-body');
    body.innerHTML = `<form id="personal-profile-form" class="form"><div class="row"><h2>${word('profile')}</h2><button type="button" class="btn outline small" id="close-profile">×</button></div><div class="profile-photo-row">${avatarMarkup(me(),'large')}<div class="field"><label for="profile-photo">${word('photo')}</label><input id="profile-photo" type="file" accept="image/*"><small>${word('photoNote')}</small></div></div><div class="field"><label for="personal-about">${word('about')}</label><textarea id="personal-about" name="about" maxlength="500">${safe(profile.about||'')}</textarea></div><div class="field"><label for="personal-age">${word('age')}</label><input id="personal-age" name="age" type="number" min="14" max="100" inputmode="numeric" value="${safe(profile.age||'')}"></div><div class="field"><label for="personal-area">${word('department')}</label><input id="personal-area" name="area" maxlength="80" value="${safe(profile.area||'')}" placeholder="${word('department')}"></div><div class="field"><label for="personal-goal">${word('goals')}</label><textarea id="personal-goal" name="goal" maxlength="500">${safe(profile.goal||'')}</textarea></div><div class="field"><label for="personal-skills">${word('skills')}</label><textarea id="personal-skills" name="skills" maxlength="500">${safe(profile.skills||'')}</textarea></div><p class="metric-label">${word('profilePrivacy')}</p><div class="row"><button type="button" class="btn outline" id="cancel-profile">${t('cancel')}</button><button class="btn">${word('save')}</button></div></form>`;
    modal.showModal();
    document.querySelectorAll('#close-profile,#cancel-profile').forEach(button=>button.onclick=()=>modal.close());
    let avatarDataUrl = profile.avatarDataUrl || '';
    document.querySelector('#profile-photo').onchange = e => {
      const file = e.target.files?.[0]; if (!file) return;
      if (!file.type.startsWith('image/') || file.size > 8 * 1024 * 1024) { toast(word('photoLarge')); e.target.value=''; return; }
      const reader = new FileReader();
      reader.onload = () => { const image = new Image(); image.onload = () => { const canvas = document.createElement('canvas'); canvas.width=240; canvas.height=240; const ctx=canvas.getContext('2d'); const side=Math.min(image.width,image.height),x=(image.width-side)/2,y=(image.height-side)/2; ctx.drawImage(image,x,y,side,side,0,0,240,240); avatarDataUrl=canvas.toDataURL('image/jpeg',.76); body.querySelector('.profile-photo-row .person-avatar').innerHTML=`<img src="${avatarDataUrl}" alt="">`; }; image.src=String(reader.result); };
      reader.readAsDataURL(file);
    };
    document.querySelector('#personal-profile-form').onsubmit=e=>{
      e.preventDefault(); const data=Object.fromEntries(new FormData(e.currentTarget)); const age=data.age===''?'':Number(data.age);
      if(age!==''&&(!Number.isInteger(age)||age<14||age>100)){document.querySelector('#personal-age').reportValidity();return;}
      store.profile={...store.profile,about:String(data.about||'').trim().slice(0,500),age,area:String(data.area||'').trim().slice(0,80),goal:String(data.goal||'').trim().slice(0,500),skills:String(data.skills||'').trim().slice(0,500),avatarDataUrl};
      persist(); event('profile_updated'); updateAvatar(); modal.close(); toast(word('profileSaved'));
    };
  }

  function conversationId(otherId) { return `dm:${[activeAccountId,otherId].sort().join(':')}`; }
  function messagesFor(id) { return community.messages[id] || []; }
  function renderMessages() {
    community = readCommunity();
    const contacts = Object.values(accounts).filter(account=>account.id!==activeAccountId);
    const groups = [['all','allTeam'],['workshop','workshop'],['maintenance','maintenance']];
    const active = groups.find(([id])=>id===activeConversation);
    const currentContact = contacts.find(account=>conversationId(account.id)===activeConversation);
    const title = active ? word(active[1]) : currentContact?.name || word('direct');
    const list = messagesFor(activeConversation);
    const navButton = (id,label,icon='◉') => `<button type="button" class="conversation-link ${activeConversation===id?'active':''}" data-chat="${safe(id)}"><span class="conversation-icon">${icon}</span><span>${safe(label)}</span></button>`;
    const contactsHtml = contacts.map(contact=>navButton(conversationId(contact.id),contact.name,'↗')).join('');
    const bubbles = list.map(message=>{const sender=accounts[message.from]||{id:message.from,name:'Сотрудник',initials:'С'};return `<article class="message-bubble ${message.from===activeAccountId?'mine':''}">${message.from===activeAccountId?'':`<strong>${safe(sender.name)}</strong>`}<div>${safe(message.text)}</div><time>${new Intl.DateTimeFormat(lang==='hy'?'hy-AM':lang==='en'?'en-US':'ru-RU',{hour:'2-digit',minute:'2-digit'}).format(new Date(message.at))}</time></article>`;}).join('');
    return `${header('messages',word('privateNote'))}${localBanner()}<div class="messenger-layout section"><aside class="card conversation-panel"><h2>${word('groups')}</h2>${groups.map(([id,key])=>navButton(id,word(key))).join('')}<h2 class="conversation-subhead">${word('people')}</h2>${contactsHtml||`<div class="metric-label">${word('noMessages')}</div>`}</aside><section class="card conversation-window"><div class="conversation-heading"><span><strong>${safe(title)}</strong><small>${active?word('group'):word('direct')}</small></span><span class="tag">${word('localOnly')}</span></div><div class="message-list" id="message-list" aria-live="polite">${bubbles||`<div class="empty">${word('noMessages')}</div>`}</div><form id="team-message-form" class="team-message-form"><textarea name="body" maxlength="2000" placeholder="${word('writeMessage')}" required></textarea><button class="btn" type="submit">${word('send')}</button></form></section></div>`;
  }
  function renderNews() {
    community=readCommunity();
    const filters=[['all','allDepartments'],['safety','safety'],['operations','operations'],['learning','learning']];
    const visible=community.news.filter(item=>newsFilter==='all'||item.category===newsFilter);
    const filterHtml=filters.map(([id,key])=>`<button type="button" class="${newsFilter===id?'active':''}" data-news-filter="${id}">${word(key)}</button>`).join('');
    const cards=visible.map(item=>{
      const author=accounts[item.author]||{name:'Команда Rostera',initials:'R'};
      const liked=item.likes.includes(activeAccountId);
      const comments=item.comments.map(comment=>`<div class="news-comment"><strong>${safe((accounts[comment.author]||{name:'Сотрудник'}).name)}</strong><p>${safe(comment.body)}</p></div>`).join('');
      const date=new Intl.DateTimeFormat(lang==='hy'?'hy-AM':lang==='en'?'en-US':'ru-RU',{day:'numeric',month:'short'}).format(new Date(item.at));
      const department=item.department==='allDepartments'?word('allDepartments'):item.department;
      const category=I18N[lang]?.[item.category]||item.category;
      return card(`<div class="news-meta"><span class="news-author">${avatarMarkup(author)}<span><strong>${safe(author.name)}</strong><small>${safe(department)} · ${date}</small></span></span><span class="tag">${safe(category)}</span></div><h2>${safe(item.title)}</h2><p class="news-body">${safe(item.body)}</p><div class="news-actions"><button type="button" class="btn outline small ${liked?'is-liked':''}" data-like="${safe(item.id)}">${liked?'♥':'♡'} ${word(liked?'liked':'like')} · ${item.likes.length}</button><span class="metric-label">${item.comments.length} ${word('comments').toLocaleLowerCase()}</span></div><div class="news-comments">${comments||`<p class="metric-label">${word('noComments')}</p>`}</div><form class="news-comment-form" data-comment-form="${safe(item.id)}"><input name="body" maxlength="500" placeholder="${word('writeComment')}" required><button class="btn small" type="submit">${word('postComment')}</button></form>`,'news-card');
    }).join('');
    return `${header('news',word('newsSubtitle'))}${localBanner()}<div class="tabs news-filters section">${filterHtml}</div><div class="news-feed">${cards||`<div class="empty">${word('noComments')}</div>`}</div>`;
  }

  const originalEnter = enterApp;
  enterApp = function(...args) { originalEnter(...args); updateAvatar(); };
  const originalRenderNav = renderNav;
  renderNav = function() { originalRenderNav(); };
  renderers.messages = renderMessages;
  renderers.news = renderNews;
  const oldBind = bind;
  bind = function() {
    oldBind();
    document.querySelectorAll('[data-chat]').forEach(button=>button.onclick=()=>{activeConversation=button.dataset.chat;render();});
    document.querySelectorAll('[data-news-filter]').forEach(button=>button.onclick=()=>{newsFilter=button.dataset.newsFilter;render();});
    document.querySelectorAll('[data-like]').forEach(button=>button.onclick=()=>{
      community=readCommunity(); const item=community.news.find(news=>news.id===button.dataset.like); if(!item)return;
      item.likes=item.likes.filter(id=>id!==activeAccountId); if(!button.classList.contains('is-liked'))item.likes.push(activeAccountId);
      saveCommunity(); event('news_liked',{news_id:item.id}); render();
    });
    document.querySelectorAll('[data-comment-form]').forEach(form=>form.onsubmit=e=>{
      e.preventDefault(); const text=String(new FormData(form).get('body')||'').trim().slice(0,500); if(!text)return;
      community=readCommunity(); const item=community.news.find(news=>news.id===form.dataset.commentForm); if(!item)return;
      item.comments.push({author:activeAccountId,body:text,at:new Date().toISOString()}); saveCommunity(); event('news_commented',{news_id:item.id}); render();
    });
    const messageForm=document.querySelector('#team-message-form'); if(messageForm)messageForm.onsubmit=e=>{
      e.preventDefault(); const text=String(new FormData(messageForm).get('body')||'').trim().slice(0,2000); if(!text)return;
      community=readCommunity(); (community.messages[activeConversation]||=([])).push({id:crypto.randomUUID?.()||String(Date.now()),from:activeAccountId,text,at:new Date().toISOString()});
      saveCommunity(); event('message_sent',{conversation_id:activeConversation}); render();
    };
  };
  document.addEventListener('submit',e=>{
    if(e.target?.id!=='profile-form')return;
    e.preventDefault(); e.stopImmediatePropagation();
    const data=Object.fromEntries(new FormData(e.target));
    store.profile={...store.profile,area:String(data.area||'').slice(0,80),skills:String(data.skills||'').slice(0,500),goal:String(data.goal||'').slice(0,500),shareMentor:data.shareMentor==='on',shareManager:data.shareManager==='on',allowEdit:data.allowEdit==='on'};
    persist(); event('profile_updated'); updateAvatar(); toast(word('saved')); render();
  },true);
  window.addEventListener('storage',e=>{if(e.key===communityKey&&['messages','news'].includes(page))render();});
  updateAvatar();
  render();
})();

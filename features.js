/* Rostera demo additions. All records remain in the current browser. */
(() => {
  const extra = {
    ru: {
      assistant: 'AI помощник', profile: 'Мои данные', profileIntro: 'Заполните данные, чтобы подготовить личные материалы.',
      area: 'Цех или направление', skills: 'Навыки и опыт', goal: 'Цель развития', saveProfile: 'Сохранить данные',
      consentMentor: 'Разрешаю наставнику видеть мои данные', consentManager: 'Разрешаю руководителю видеть мои данные',
      consentEdit: 'Разрешаю наставнику или руководителю обновлять эти данные', sharedProfiles: 'Профили с разрешением',
      noProfiles: 'Пока никто не разрешил просмотр данных в этом браузере.', localNote: 'Ответы основаны на встроенных материалах Rostera. Внешний ИИ не подключён; вопросы не отправляются.',
      ask: 'Напишите вопрос…', send: 'Отправить', docs: 'Полезные документы', download: 'Скачать',
      planDoc: 'Шаблон плана развития', meetingDoc: 'Шаблон встречи с наставником', skillsDoc: 'Карточка навыков',
      rewards: 'Призы за баллы', rewardNote: 'Это демо: баллы списываются только в этом браузере, реальные призы не выдаются.',
      redeem: 'Обменять', insufficient: 'Не хватает баллов', saved: 'Данные сохранены в этом браузере.',
      redeemed: 'Обмен записан в демо.', edit: 'Обновить данные', roleEmployee: 'Сотрудник', roleMentor: 'Наставник', roleManager: 'Руководитель',
      rewardNotebook: 'Блокнот Rostera', rewardLunch: 'Командный обед (демо)', rewardBottle: 'Термокружка (демо)',
      promptCareer: 'Как повысить готовность к следующей должности?', promptDocs: 'Какие документы доступны?', promptPoints: 'Как потратить мои баллы?',
      welcomeAssistant: 'Здравствуйте! Я помощник Rostera. Могу подсказать следующий шаг, обучение, баллы и документы.',
      registration: 'Регистрация', loginTab: 'Вход', registerName: 'Имя и фамилия', registerLogin: 'Логин', registerPassword: 'Пароль',
      createAccount: 'Создать аккаунт', registrationNote: 'Новым аккаунтам назначается должность сотрудника. Демо-профили доступны только в этом браузере.',
      nameError: 'Введите имя и фамилию.', loginError: 'Логин: от 3 до 32 латинских букв, цифр, точек, дефисов или подчёркиваний.',
      duplicateError: 'Такой логин уже занят.', passwordError: 'Пароль должен содержать не менее 6 символов.',
      responseCareer: (a, r) => `Готовность к следующей роли «${a.nextRole}» — ${r}%. Откройте карьерный навигатор, чтобы увидеть шаги и навыки.`,
      responseLearning: 'В каталоге есть материалы по бережливому производству, безопасности и качеству. За завершение курса в демо начисляется 20 баллов.',
      responseMentor: 'В разделе «Наставничество» можно записать цель и итоги встречи. В демо за запись встречи начисляется 15 баллов.',
      responsePoints: (p) => `На вашем счету ${p} баллов. В разделе «Мой вклад» есть демо-призы; реальной выдачи сейчас нет.`,
      responseDocs: 'Справа доступны план развития, шаблон встречи и карточка навыков. Выберите «Скачать».',
      responsePrivacy: 'В карточке «Мои данные» можно обновить навыки и цель. Просмотр и редактирование включаются только выбранными вами разрешениями.',
      responseDefault: 'Я могу подсказать по карьерному маршруту, обучению, наставничеству, баллам и документам. Сообщение не отправляется во внешний сервис.'
    },
    hy: {
      assistant: 'AI օգնական', profile: 'Իմ տվյալները', profileIntro: 'Լրացրեք տվյալները՝ անհատական նյութեր պատրաստելու համար։', area: 'Արտադրամաս կամ ուղղություն', skills: 'Հմտություններ և փորձ', goal: 'Զարգացման նպատակ', saveProfile: 'Պահպանել տվյալները',
      consentMentor: 'Թույլատրում եմ մենթորին տեսնել տվյալները', consentManager: 'Թույլատրում եմ ղեկավարին տեսնել տվյալները', consentEdit: 'Թույլատրում եմ մենթորին կամ ղեկավարին թարմացնել տվյալները',
      sharedProfiles: 'Համաձայնությամբ հասանելի պրոֆիլներ', noProfiles: 'Այս բրաուզերում դեռ հասանելի պրոֆիլներ չկան։', localNote: 'Պատասխանները հիմնված են Rostera-ի նյութերի վրա։ Արտաքին AI միացված չէ, հարցերը չեն ուղարկվում։',
      ask: 'Գրեք հարցը…', send: 'Ուղարկել', docs: 'Օգտակար փաստաթղթեր', download: 'Ներբեռնել', planDoc: 'Զարգացման ծրագրի ձևանմուշ', meetingDoc: 'Մենթորի հանդիպման ձևանմուշ', skillsDoc: 'Հմտությունների քարտ',
      rewards: 'Մրցանակներ միավորների դիմաց', rewardNote: 'Դեմո է․ միավորները հանվում են միայն այս բրաուզերում, իրական մրցանակներ չեն տրվում։', redeem: 'Փոխանակել', insufficient: 'Միավորները բավարար չեն', saved: 'Տվյալները պահպանվել են այս բրաուզերում։', redeemed: 'Դեմո փոխանակումը գրանցվել է։', edit: 'Թարմացնել տվյալները',
      roleEmployee: 'Աշխատակից', roleMentor: 'Մենթոր', roleManager: 'Ղեկավար', rewardNotebook: 'Rostera նոթատետր', rewardLunch: 'Թիմային ճաշ (դեմո)', rewardBottle: 'Թերմոս բաժակ (դեմո)',
      promptCareer: 'Ինչպե՞ս բարձրացնել պատրաստվածությունը հաջորդ պաշտոնի համար։', promptDocs: 'Ի՞նչ փաստաթղթեր կան։', promptPoints: 'Ինչպե՞ս օգտագործել իմ միավորները։', welcomeAssistant: 'Բարև։ Ես Rostera-ի օգնականն եմ և կարող եմ օգնել կարիերայի, ուսուցման ու փաստաթղթերի հարցում։',
      registration: 'Գրանցում', loginTab: 'Մուտք', registerName: 'Անուն և ազգանուն', registerLogin: 'Մուտքանուն', registerPassword: 'Գաղտնաբառ', createAccount: 'Ստեղծել հաշիվ', registrationNote: 'Նոր հաշիվները ստանում են աշխատակցի դեր։ Դեմո տվյալները պահվում են միայն այս բրաուզերում։',
      nameError: 'Մուտքագրեք անունն ու ազգանունը։', loginError: 'Մուտքանունը պետք է ունենա 3–32 լատինատառ նիշ։', duplicateError: 'Այս մուտքանունն արդեն օգտագործվում է։', passwordError: 'Գաղտնաբառը պետք է ունենա առնվազն 6 նիշ։',
      responseCareer: (a, r) => `«${a.nextRole}» դերի պատրաստվածությունը ${r}% է։ Քայլերն ու հմտությունները տեսնելու համար բացեք կարիերայի ուղեցույցը։`, responseLearning: 'Ուսուցման ցանկում կան նյութեր արտադրության արդյունավետության, անվտանգության և որակի մասին։', responseMentor: '«Մենթորություն» բաժնում կարող եք գրանցել նպատակը և հանդիպման արդյունքը։', responsePoints: p => `Ձեր հաշվին կա ${p} միավոր։ Դեմո մրցանակները կարող եք տեսնել «Իմ ներդրումը» բաժնում։`, responseDocs: 'Աջ կողմում հասանելի են զարգացման ծրագիրը, հանդիպման ձևանմուշը և հմտությունների քարտը։', responsePrivacy: '«Իմ տվյալները» բաժնում կարող եք փոխել տվյալները։ Դիտումը միանում է միայն ձեր թույլտվությամբ։', responseDefault: 'Կարող եմ օգնել կարիերայի, ուսուցման, մենթորության, միավորների և փաստաթղթերի հարցում։ Հարցը չի ուղարկվում արտաքին ծառայություն։'
    },
    en: {
      assistant: 'AI assistant', profile: 'My profile', profileIntro: 'Add details to prepare personal materials.', area: 'Workshop or team', skills: 'Skills and experience', goal: 'Development goal', saveProfile: 'Save profile',
      consentMentor: 'Allow my mentor to view my details', consentManager: 'Allow my manager to view my details', consentEdit: 'Allow my mentor or manager to update these details', sharedProfiles: 'Profiles shared with permission', noProfiles: 'No one has shared profile details in this browser yet.', localNote: 'Answers use Rostera’s built-in help. External AI is not connected; questions are not sent.',
      ask: 'Type your question…', send: 'Send', docs: 'Helpful documents', download: 'Download', planDoc: 'Development plan template', meetingDoc: 'Mentor meeting template', skillsDoc: 'Skills summary', rewards: 'Rewards for points', rewardNote: 'Demo only: points are deducted in this browser; no real rewards are issued.', redeem: 'Redeem', insufficient: 'Not enough points', saved: 'Details saved in this browser.', redeemed: 'Demo redemption recorded.', edit: 'Update details',
      roleEmployee: 'Employee', roleMentor: 'Mentor', roleManager: 'Manager', rewardNotebook: 'Rostera notebook', rewardLunch: 'Team lunch (demo)', rewardBottle: 'Thermal mug (demo)',
      promptCareer: 'How can I improve readiness for my next role?', promptDocs: 'Which documents are available?', promptPoints: 'How can I use my points?', welcomeAssistant: 'Hello! I’m Rostera’s assistant. I can help with career steps, learning, points, and documents.',
      registration: 'Register', loginTab: 'Sign in', registerName: 'First and last name', registerLogin: 'Username', registerPassword: 'Password', createAccount: 'Create account', registrationNote: 'New accounts are employees. Demo profiles stay in this browser only.',
      nameError: 'Enter your first and last name.', loginError: 'Use 3–32 Latin letters, numbers, dots, dashes, or underscores.', duplicateError: 'That username is already in use.', passwordError: 'Password must be at least 6 characters.',
      responseCareer: (a, r) => `Readiness for “${a.nextRole}” is ${r}%. Open Career Navigator for skills and next steps.`, responseLearning: 'The catalog has materials about lean operations, safety, and quality. Completing a course earns 20 demo points.', responseMentor: 'Use Mentorship to record a goal and meeting notes. A logged meeting earns 15 demo points.', responsePoints: p => `You have ${p} points. Demo rewards are listed under My contribution; nothing is issued in real life.`, responseDocs: 'Development plan, meeting template, and skills summary are available to download on this page.', responsePrivacy: 'Update your skills and goal under My profile. Viewing and editing are enabled only by the permissions you choose.', responseDefault: 'I can help with career steps, learning, mentoring, points, and documents. Your message is not sent to an external service.'
    }
  };
  const words = key => extra[lang]?.[key] ?? extra.ru[key] ?? key;
  const dictionaries = { ru: 'AI помощник', hy: 'AI օգնական', en: 'AI assistant' };
  Object.keys(extra).forEach(language => Object.assign(I18N[language], { assistant: dictionaries[language] }));
  I18N.ru.nav.push(wordsFor('ru')); I18N.hy.nav.push(wordsFor('hy')); I18N.en.nav.push(wordsFor('en'));
  function wordsFor(language) { return extra[language].assistant; }
  navKeys.push('assistant'); navIcons.push('✳');

  accounts.anna.role = 'manager'; accounts.anna.positionKey = 'roleManager'; accounts.anna.ready = 82; accounts.anna.points = 540; accounts.anna.nextRole = 'Руководитель производства';
  accounts.alex.role = 'employee'; accounts.alex.positionKey = 'roleEmployee'; accounts.alex.ready = 37; accounts.alex.points = 125; accounts.alex.nextRole = 'Старший оператор';
  accounts.liza.role = 'mentor'; accounts.liza.positionKey = 'roleMentor'; accounts.liza.ready = 71; accounts.liza.points = 390; accounts.liza.nextRole = 'Ведущий наставник';
  try { Object.assign(accounts, JSON.parse(localStorage.getItem('rostera-registered-accounts') || '{}')); } catch {}
  let assistantMessages = [];
  const safe = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
  const me = () => accounts[activeAccountId] || accounts.anna;
  const balance = () => Math.max(0, Number(me().points || 0) + Number(store.pointDelta || 0));
  const roleText = account => account.positionKey ? words(account.positionKey) : (account.position || words(account.role === 'manager' ? 'roleManager' : account.role === 'mentor' ? 'roleMentor' : 'roleEmployee'));
  const currentReady = () => Number(me().ready || 50);
  const profilesWithConsent = () => {
    const permission = me().role === 'manager' ? 'shareManager' : me().role === 'mentor' ? 'shareMentor' : null;
    if (!permission) return [];
    return Object.values(accounts).filter(account => account.id !== activeAccountId).map(account => {
      let saved = {}; try { saved = JSON.parse(localStorage.getItem('rostera-demo-' + account.id) || '{}'); } catch {}
      return { account, profile: saved.profile || {} };
    }).filter(record => record.profile[permission]);
  };
  function persist() { localStorage.setItem('rostera-demo-' + (activeAccountId || 'anna'), JSON.stringify(store)); }
  function addPoints(amount) { store.pointDelta = (Number(store.pointDelta) || 0) + amount; persist(); }

  // Hide the old selector while keeping its element for the original renderer.
  const style = document.createElement('style');
  style.textContent = `#role{display:none!important}.position-pill{padding:7px 10px;border:1px solid var(--line);border-radius:10px;color:var(--muted);font-size:12px;font-weight:700;white-space:nowrap}.auth-tabs{width:100%;margin:14px 0}.auth-tabs button{flex:1}.chat{min-height:220px;max-height:420px;overflow:auto;display:flex;flex-direction:column;gap:9px;padding:12px;background:#263743;border:1px solid var(--line);border-radius:14px}.bubble{max-width:88%;padding:10px 12px;border-radius:13px;white-space:pre-wrap;overflow-wrap:anywhere}.bubble.user{align-self:flex-end;background:#204362}.bubble.bot{align-self:flex-start;background:#3a5263}.assistant-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr);gap:16px}.assistant-grid>.grid{align-content:start}.chat-form{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:10px}.chat-form textarea{min-height:48px}.quick-prompts,.consents{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.doc-row,.reward-row,.shared-user{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-top:1px solid var(--line)}.doc-row:first-child,.reward-row:first-child{border-top:0}.shared-user{display:block;padding:12px;border:1px solid var(--line);border-radius:12px;margin-top:8px}.shared-user p{font-size:13px;overflow-wrap:anywhere}.consents label{display:flex;gap:8px;align-items:flex-start;font-size:13px;color:var(--muted)}.consents input{width:18px;height:18px;flex:none;accent-color:#2879b8}.reward-row button[disabled]{opacity:.48;cursor:not-allowed}.auth-footnote{line-height:1.55}@media(max-width:850px){.assistant-grid{grid-template-columns:1fr}}@media(max-width:600px){.chat-form{grid-template-columns:1fr}.chat-form button{width:100%}.position-pill{font-size:11px;padding:6px 8px}}`;
  document.head.append(style);

  const position = document.createElement('span');
  position.className = 'position-pill'; position.id = 'rostera-position';
  const langPicker = document.querySelector('#lang'); if (langPicker) langPicker.before(position);
  const updatePosition = () => { if (document.querySelector('#rostera-position')) position.textContent = roleText(me()); };

  // Registration remains a local demo feature; no role can be selected here.
  const authCard = document.querySelector('.auth-card');
  if (authCard && !document.querySelector('#register-form')) {
    const tabs = document.createElement('div'); tabs.className = 'tabs auth-tabs';
    tabs.innerHTML = `<button type="button" class="active" id="auth-login-tab">${words('loginTab')}</button><button type="button" id="auth-register-tab">${words('registration')}</button>`;
    const loginForm = document.querySelector('#login-form'); loginForm.before(tabs);
    const form = document.createElement('form'); form.className = 'form'; form.id = 'register-form'; form.hidden = true;
    form.innerHTML = `<div class="field"><label for="reg-name">${words('registerName')}</label><input id="reg-name" name="name" autocomplete="name" maxlength="80" required></div><div class="field"><label for="reg-user">${words('registerLogin')}</label><input id="reg-user" name="username" autocomplete="username" minlength="3" maxlength="32" required></div><div class="field"><label for="reg-password">${words('registerPassword')}</label><input id="reg-password" name="password" type="password" autocomplete="new-password" minlength="6" required></div><p class="login-error" id="register-error" hidden></p><button class="btn" type="submit">${words('createAccount')}</button>`;
    loginForm.after(form);
    const footnote = authCard.querySelector('.auth-footnote');
    if (footnote) footnote.textContent = words('registrationNote');
    const loginTab = document.querySelector('#auth-login-tab'), registerTab = document.querySelector('#auth-register-tab');
    loginTab.onclick = () => { loginForm.hidden = false; form.hidden = true; loginTab.classList.add('active'); registerTab.classList.remove('active'); };
    registerTab.onclick = () => { loginForm.hidden = true; form.hidden = false; registerTab.classList.add('active'); loginTab.classList.remove('active'); };
    form.onsubmit = async event => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form));
      const name = values.name.trim().replace(/\s+/g, ' '), login = values.username.trim(), password = values.password;
      const error = document.querySelector('#register-error');
      const fail = message => { error.textContent = message; error.hidden = false; };
      if (name.split(' ').length < 2) return fail(words('nameError'));
      if (!/^[a-zA-Z0-9._-]{3,32}$/.test(login)) return fail(words('loginError'));
      if (Object.values(accounts).some(account => account.login.toLowerCase() === login.toLowerCase())) return fail(words('duplicateError'));
      if (password.length < 6) return fail(words('passwordError'));
      const id = 'user_' + (crypto.randomUUID?.().replaceAll('-', '').slice(0, 12) || Date.now().toString(36));
      const sequence=Object.keys(accounts).length,usedReady=new Set(Object.values(accounts).map(item=>Number(item.ready))),usedPoints=new Set(Object.values(accounts).map(item=>Number(item.points)));
      let ready=25+((sequence*17)%66);while(usedReady.has(ready))ready=ready>=90?25:ready+1;
      let points=80+((sequence*137)%461);while(usedPoints.has(points))points=points>=540?80:points+1;
      const passwordHash=await hashPassword(password);
      const account = { id, name, initials: name.split(' ').slice(0,2).map(part => part[0]).join('').toUpperCase(), login, passwordHash, role: 'employee', positionKey: 'roleEmployee', ready, points, nextRole: 'Старший оператор', greeting: { ru: `Добро пожаловать, ${name.split(' ')[0]}`, hy: `Բարի գալուստ, ${name.split(' ')[0]}`, en: `Welcome, ${name.split(' ')[0]}` } };
      accounts[id] = account;
      const registered = Object.fromEntries(Object.entries(accounts).filter(([key]) => key.startsWith('user_')));
      localStorage.setItem('rostera-registered-accounts', JSON.stringify(registered));
      activeAccountId = id; role = account.role; store = loadStore(id); store.profile ||= {}; store.profile.name = name; persist();
      enterApp(id, true); updatePosition();
    };
  }

  async function hashPassword(value) {
    const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
    return Array.from(new Uint8Array(bytes),byte=>byte.toString(16).padStart(2,'0')).join('');
  }
  const loginForm=document.querySelector('#login-form');
  loginForm?.addEventListener('submit',async event=>{
    event.preventDefault();event.stopImmediatePropagation();
    const data=Object.fromEntries(new FormData(loginForm)),account=Object.values(accounts).find(item=>item.login.toLowerCase()===data.username.trim().toLowerCase());
    const accepted=account&&(account.passwordHash?account.passwordHash===await hashPassword(data.password):account.password===data.password);
    if(!accepted){document.querySelector('#login-error').hidden=false;return;}
    document.querySelector('#login-error').hidden=true;enterApp(account.id,true);
  },true);
  const originalEnter = enterApp;
  enterApp = function(id, ...rest) { role = accounts[id]?.role || 'employee'; assistantMessages = []; originalEnter(id, ...rest); store.pointDelta=Number(store.pointDelta)||0;store.profile ||= {}; updatePosition(); };
  const originalEvent = event;
  event = function(name, extra = {}) {
    const awards = { material_completed: 20, meeting_logged: 15, suggestion_submitted: 25 };
    if (awards[name]) addPoints(awards[name]);
    return originalEvent(name, extra);
  };

  // Role is tied to the authenticated demo profile; HR is only shown to a manager.
  renderNav = function() {
    const keys = navKeys.filter(key => key !== 'hr' || ['manager','hr_admin'].includes(me().role));
    document.querySelector('#sidenav').innerHTML = keys.map(key => { const i=navKeys.indexOf(key); return `<button class="${page===key?'active':''}" data-page="${key}"><i>${navIcons[i]}</i>${t('nav')[i]}</button>`; }).join('');
    const mobile = keys.slice(0,4).map(key => { const i=navKeys.indexOf(key); return `<button class="${page===key?'active':''}" data-page="${key}"><i>${navIcons[i]}</i>${mobileNavLabels[lang][i]}</button>`; }).join('');
    document.querySelector('#bottomnav').innerHTML = mobile + '<button type="button" class="mobile-more" id="mobile-more"><i>···</i>Ещё</button>';
    document.querySelector('#mobile-more').onclick = openMobileMenu;
    document.querySelectorAll('[data-page]').forEach(button => button.onclick = () => go(button.dataset.page));
  };
  openMobileMenu = function() {
    const keys = navKeys.filter(key => key !== 'hr' || ['manager','hr_admin'].includes(me().role)).slice(4);
    const body = document.querySelector('#mobile-nav-body');
    body.innerHTML = `<div class="row"><h2>Разделы</h2><button type="button" class="btn outline small" id="close-mobile-nav">×</button></div><div class="mobile-nav-list">${keys.map(key=>{const i=navKeys.indexOf(key);return `<button type="button" class="btn outline" data-mobile-page="${key}"><i>${navIcons[i]}</i>${t('nav')[i]}</button>`}).join('')}</div>`;
    const dialog=document.querySelector('#mobile-nav-dialog');dialog.showModal();document.querySelector('#close-mobile-nav').onclick=()=>dialog.close();body.querySelectorAll('[data-mobile-page]').forEach(button=>button.onclick=()=>{dialog.close();go(button.dataset.mobilePage);window.scrollTo({top:0,behavior:'smooth'});});
  };

  overview = function() {
    const account=me(),ready=currentReady(),points=balance();
    return `${header('welcome',t('welcomeSub'))}<section class="hero"><div><div class="eyebrow">${t('nextRole')} · ${safe(account.nextRole)}</div><h2>${t('progress')}: ${ready}%</h2><p>Ваш личный маршрут развития и следующий шаг.</p><button class="btn lime" data-page="career">${t('viewPath')} →</button></div><div class="progress-ring" data-progress="${ready}"><strong>${ready}%</strong></div></section><div class="grid two section"><section><div class="row"><h2>${t('yourJourney')}</h2><button class="btn outline small" data-page="career">${t('allPaths')}</button></div>${card(`<div class="route-card"><div class="icon">↗</div><div><strong>${safe(account.nextRole)}</strong><p>Следующий шаг · план развития</p><div class="bar"><span style="width:${ready}%"></span></div></div><span class="tag">${ready}%</span></div>`)}<div class="section">${card(`<div class="eyebrow">${t('focus')}</div><p>${t('focusText')}</p><div style="margin-top:14px">${courseCard(courses[0])}</div>`)}</div></section><section>${card(`<div class="row"><h2>${t('learning')}</h2><button class="btn outline small" data-page="learning">${t('viewAll')}</button></div><div class="list">${courses.slice(0,2).map(courseCard).join('')}</div>`)}<div class="section">${card(`<div class="row"><div><h2>${t('mentor')}</h2><p>Наставник: Давид Григорян</p></div><div class="avatar">ДГ</div></div><p>Следующая встреча · по договорённости</p><button class="btn outline small" data-action="meeting" style="margin-top:12px">${t('bookMeeting')}</button>`)}</div></section></div><div class="grid three section">${card(`<div class="eyebrow">${t('pointsTitle')}</div><div class="metric">${points}</div><div class="metric-label">${t('points')}</div>`)}${card(`<div class="eyebrow">${t('badges')}</div><div style="font-size:25px;margin-top:8px">${store.completed.length?'🏅 🌱':'🌱 ✨'}</div><div class="metric-label">${store.completed.length+1} достижений</div>`)}${card(`<div class="eyebrow">${t('activity')}</div><strong>${store.events.length?safe(store.events.at(-1).event):'Добро пожаловать в Rostera'}</strong><div class="metric-label">${store.events.length?'Только что':'Сегодня'}</div>`)}</div>`;
  };
  career = function() {
    const ready=currentReady(),account=me(),stops=[{name:'Текущая должность',ready:100},{name:account.nextRole,ready},{name:'Следующий уровень',ready:Math.max(10,ready-24)},{name:'Долгосрочная перспектива',ready:Math.max(5,ready-45)}];
    return `${header('career','Планируйте следующий шаг и развивайте навыки в своём темпе.')}<div class="grid two">${card(`<h2>Мой маршрут</h2><div class="list">${stops.map((j,i)=>`<div class="item"><div class="icon">${['✓','↗','◎','◇'][i]}</div><div class="item-main"><strong>${safe(j.name)}</strong><small>${i===0?'Текущая должность':i===1?'Следующий шаг':'Перспектива развития'}</small><div class="bar"><span style="width:${j.ready}%"></span></div></div><span class="tag ${j.ready<30?'gold':''}">${j.ready}%</span></div>`).join('')}</div>`)}${card(`<h2>${t('mySkills')}</h2><div class="list">${[['Охрана труда',true],['Работа с оборудованием',true],['Контроль качества',false],['Обучение коллег',false]].map(([label,ok])=>`<div class="item"><div class="icon">${ok?'✓':'○'}</div><div class="item-main"><strong>${label}</strong><small>${ok?'Подтверждён':'Нужно развить'}</small></div><span class="tag ${ok?'':'gold'}">${ok?'Готово':'В плане'}</span></div>`).join('')}</div>`)}</div><div class="section">${card(`<div class="row"><h2>${t('openRole')}</h2><span class="tag">2 вакансии</span></div><div class="list"><div class="item"><div class="icon">⚙</div><div class="item-main"><strong>Старший оператор — Плавильный цех</strong><small>Совпадение навыков ${Math.max(35,ready)}%</small></div><button class="btn outline small" data-action="interest">Подробнее</button></div><div class="item"><div class="icon">⌁</div><div class="item-main"><strong>Техник оборудования — Механический цех</strong><small>Совпадение навыков ${Math.max(20,100-ready)}%</small></div><button class="btn outline small" data-action="interest">Подробнее</button></div></div>`)}</div>`;
  };
  contribution = function() {
    const points=balance(),rewards=[['notebook',words('rewardNotebook'),100,'📓'],['lunch',words('rewardLunch'),250,'🍽️'],['bottle',words('rewardBottle'),400,'☕']];
    return `${header('contribution','Признание за обучение, помощь коллегам и полезные предложения.')}<section class="hero"><div><div class="eyebrow">${t('pointsTitle')}</div><h2>${points} ${t('points')}</h2><p>${safe(me().name)} · ${safe(roleText(me()))}</p></div><div style="font-size:54px;text-align:center">✦</div></section><div class="grid two section">${card(`<h2>${t('badges')}</h2><div class="grid three"><div class="notice">🏅<br>Первый шаг</div><div class="notice">${store.completed.length?'🌱':'✨'}<br>Учусь каждый день</div><div class="notice">${store.meetings.length?'🤝':'🛠️'}<br>Командный игрок</div></div>`)}${card(`<h2>За что начисляются баллы</h2><div class="list"><div class="item"><span>Завершение курса</span><span class="tag">+20</span></div><div class="item"><span>Встреча с наставником</span><span class="tag">+15</span></div><div class="item"><span>Предложение улучшения</span><span class="tag">+25</span></div></div>`)}</div><div class="section">${card(`<div class="row"><h2>${words('rewards')}</h2><span class="tag">${points} ${t('points')}</span></div><p>${words('rewardNote')}</p><div>${rewards.map(([id,name,cost,icon])=>`<div class="reward-row"><span>${icon} ${name}</span><strong>${cost}</strong><button class="btn small ${points<cost?'outline':''}" data-reward="${id}" ${points<cost?'disabled':''}>${points<cost?words('insufficient'):words('redeem')}</button></div>`).join('')}</div>`)}</div><div class="section">${card(`<h2>${t('recognition')}</h2><div class="list"><div class="item"><div class="avatar">МК</div><div class="item-main"><strong>Мариам помогла команде смены</strong><small>Плавильный цех · сегодня</small></div><span class="tag">🤝 Команда</span></div><div class="item"><div class="avatar">АГ</div><div class="item-main"><strong>Арман завершил курс по качеству</strong><small>Контроль качества · вчера</small></div><span class="tag">📚 Обучение</span></div></div>`)}</div>`;
  };

  function reply(question) {
    const q=question.toLowerCase(),a=me(),dict=extra[lang]||extra.ru;
    if(/ready|готов|career|карьер|должност|role|навык|развити|պատրաստ|կարիեր/.test(q))return dict.responseCareer(a,currentReady());
    if(/course|learn|обуч|курс|материал|ուսուց/.test(q))return dict.responseLearning;
    if(/mentor|настав|встреч|մենթոր/.test(q))return dict.responseMentor;
    if(/point|балл|приз|reward|обмен|միավոր/.test(q))return dict.responsePoints(balance());
    if(/document|документ|файл|шаблон|փաստաթուղթ/.test(q))return dict.responseDocs;
    if(/data|данн|profile|профил|разреш|соглас|տվյալ/.test(q))return dict.responsePrivacy;
    return dict.responseDefault;
  }
  function downloadDocument(type) {
    const account=me(),profile=store.profile||{};
    const documents={
      plan:`${words('planDoc')}\n${words('registerName')}: ${account.name}\n${words('roleEmployee')}: ${account.position}\nСледующая роль: ${account.nextRole}\nГотовность: ${currentReady()}%\n${words('goal')}: ${profile.goal||'__________________'}\n${words('skills')}: ${profile.skills||'__________________'}\n`,
      meeting:`${words('meetingDoc')}\n${words('registerName')}: ${account.name}\nДата: __________________\nЦель встречи: __________________\nЧто получилось: __________________\nСледующий шаг: __________________\nЗаметки: __________________\n`,
      skills:`${words('skillsDoc')}\n${words('registerName')}: ${account.name}\n${words('skills')}: ${profile.skills||'__________________'}\n${words('goal')}: ${profile.goal||'__________________'}\nГотовность: ${currentReady()}%\n`
    };
    const blob=new Blob(['\ufeff'+documents[type]],{type:'text/plain;charset=utf-8'}),link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=`rostera-${type}.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  }
  function renderAssistant() {
    const profile=store.profile||{},messages=assistantMessages.length?assistantMessages:[{from:'bot',text:words('welcomeAssistant')}],shared=profilesWithConsent(),supervisor=['manager','mentor'].includes(me().role);
    return `${header('assistant',words('assistant'))}<div class="assistant-grid"><div class="grid">${card(`<div class="row"><div><h2>${words('assistant')}</h2><p>${words('localNote')}</p></div><span class="tag">${safe(roleText(me()))}</span></div><div class="chat" id="assistant-chat" aria-live="polite">${messages.map(message=>`<div class="bubble ${message.from==='user'?'user':'bot'}">${safe(message.text)}</div>`).join('')}</div><form id="assistant-form" class="chat-form"><textarea name="question" maxlength="700" placeholder="${words('ask')}" aria-label="${words('ask')}" required></textarea><button class="btn" type="submit">${words('send')}</button></form><div class="quick-prompts"><button class="btn outline small" data-prompt="${words('promptCareer')}">${words('promptCareer')}</button><button class="btn outline small" data-prompt="${words('promptDocs')}">${words('promptDocs')}</button><button class="btn outline small" data-prompt="${words('promptPoints')}">${words('promptPoints')}</button></div>`)}${card(`<h2>${words('docs')}</h2><div class="doc-row"><span>📄 ${words('planDoc')}</span><button class="btn outline small" data-document="plan">${words('download')}</button></div><div class="doc-row"><span>🗒️ ${words('meetingDoc')}</span><button class="btn outline small" data-document="meeting">${words('download')}</button></div><div class="doc-row"><span>🧩 ${words('skillsDoc')}</span><button class="btn outline small" data-document="skills">${words('download')}</button></div>`)}</div><div class="grid">${card(`<div class="row"><h2>${words('profile')}</h2><span class="tag">${safe(roleText(me()))}</span></div><p>${words('profileIntro')}</p><form id="profile-form" class="form"><div class="field"><label for="profile-area">${words('area')}</label><input id="profile-area" name="area" maxlength="80" value="${safe(profile.area||'')}"></div><div class="field"><label for="profile-skills">${words('skills')}</label><textarea id="profile-skills" name="skills" maxlength="500">${safe(profile.skills||'')}</textarea></div><div class="field"><label for="profile-goal">${words('goal')}</label><textarea id="profile-goal" name="goal" maxlength="500">${safe(profile.goal||'')}</textarea></div><div class="consents"><label><input type="checkbox" name="shareMentor" ${profile.shareMentor?'checked':''}>${words('consentMentor')}</label><label><input type="checkbox" name="shareManager" ${profile.shareManager?'checked':''}>${words('consentManager')}</label><label><input type="checkbox" name="allowEdit" ${profile.allowEdit?'checked':''}>${words('consentEdit')}</label></div><button class="btn" type="submit">${words('saveProfile')}</button></form>`)}${supervisor?card(`<h2>${words('sharedProfiles')}</h2>${shared.length?shared.map(({account,profile:p})=>`<div class="shared-user"><strong>${safe(account.name)}</strong><div class="metric-label">${safe(roleText(account))} · ${safe(p.area||'')}</div><p>${safe(p.skills||'')}</p><p><strong>${words('goal')}:</strong> ${safe(p.goal||'—')}</p>${p.allowEdit?`<button class="btn outline small" data-edit-profile="${safe(account.id)}">${words('edit')}</button>`:''}</div>`).join(''):`<div class="empty">${words('noProfiles')}</div>`}`):''}</div></div>`;
  }

  function openSharedEditor(id) {
    const record=profilesWithConsent().find(item=>item.account.id===id);
    if(!record||!record.profile.allowEdit){toast(words('consentEdit'));return;}
    const dialog=document.querySelector('#modal'),body=document.querySelector('#modal-body'),p=record.profile;
    body.innerHTML=`<form id="shared-edit-form" class="form"><div class="row"><h2>${words('edit')}</h2><button type="button" class="btn outline small" id="close-modal">×</button></div><p>${safe(record.account.name)}</p><div class="field"><label>${words('area')}</label><input name="area" maxlength="80" value="${safe(p.area||'')}"></div><div class="field"><label>${words('skills')}</label><textarea name="skills" maxlength="500">${safe(p.skills||'')}</textarea></div><div class="field"><label>${words('goal')}</label><textarea name="goal" maxlength="500">${safe(p.goal||'')}</textarea></div><div class="row"><button type="button" class="btn outline" id="cancel-modal">${t('cancel')}</button><button class="btn">${words('saveProfile')}</button></div></form>`;
    dialog.showModal();document.querySelectorAll('#close-modal,#cancel-modal').forEach(button=>button.onclick=()=>dialog.close());
    document.querySelector('#shared-edit-form').onsubmit=e=>{e.preventDefault();const latest=profilesWithConsent().find(item=>item.account.id===id);if(!latest?.profile.allowEdit){dialog.close();return;}const target=loadStore(id);target.profile={...target.profile,...Object.fromEntries(new FormData(e.currentTarget))};localStorage.setItem('rostera-demo-'+id,JSON.stringify(target));event('profile_updated_for_colleague',{target_user_id:id});dialog.close();toast(words('saved'));render();};
  }
  function redeem(id) {
    const catalogue={notebook:[100,words('rewardNotebook')],lunch:[250,words('rewardLunch')],bottle:[400,words('rewardBottle')]},item=catalogue[id];
    if(!item||balance()<item[0]){toast(words('insufficient'));return;}
    if(!confirm(`${words('redeem')} «${item[1]}» · ${item[0]} ${t('points')}?`))return;
    store.pointDelta=(Number(store.pointDelta)||0)-item[0];(store.redemptions||=[]).unshift({id,name:item[1],points:item[0],at:new Date().toISOString()});event('reward_redeemed',{reward_id:id,points:item[0]});toast(words('redeemed'));render();
  }

  const oldBind=bind;
  bind=function() {
    oldBind();
    document.querySelectorAll('[data-course]').forEach(button=>button.onclick=()=>{const id=button.dataset.course;if(!store.completed.includes(id)){store.completed.push(id);event('material_completed',{material_id:id});toast(t('doneToast'));}render();});
    document.querySelectorAll('[data-reward]').forEach(button=>button.onclick=()=>redeem(button.dataset.reward));
    document.querySelectorAll('[data-document]').forEach(button=>button.onclick=()=>downloadDocument(button.dataset.document));
    document.querySelectorAll('[data-edit-profile]').forEach(button=>button.onclick=()=>openSharedEditor(button.dataset.editProfile));
    document.querySelectorAll('[data-prompt]').forEach(button=>button.onclick=()=>sendMessage(button.dataset.prompt));
    const chat=document.querySelector('#assistant-form');if(chat)chat.onsubmit=e=>{e.preventDefault();const input=chat.elements.question,question=input.value.trim();if(question)sendMessage(question);input.value='';};
    const profileForm=document.querySelector('#profile-form');if(profileForm)profileForm.onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(profileForm));store.profile={area:String(data.area||'').slice(0,80),skills:String(data.skills||'').slice(0,500),goal:String(data.goal||'').slice(0,500),shareMentor:data.shareMentor==='on',shareManager:data.shareManager==='on',allowEdit:data.allowEdit==='on'};persist();event('profile_updated');toast(words('saved'));render();};
  };
  function sendMessage(question) { const text=String(question).trim().slice(0,700);if(!text)return;assistantMessages.push({from:'user',text},{from:'bot',text:reply(text)});event('assistant_question');const chat=document.querySelector('#assistant-chat');if(chat){chat.innerHTML=assistantMessages.map(message=>`<div class="bubble ${message.from==='user'?'user':'bot'}">${safe(message.text)}</div>`).join('');chat.scrollTop=chat.scrollHeight;} }
  openMobileMenu = openMobileMenu;
  // Override the More menu so the new tab and role-appropriate items fit on mobile.
  openMobileMenu = function() {
    const keys=navKeys.filter(key=>key!=='hr'||['manager','hr_admin'].includes(me().role)).slice(4),body=document.querySelector('#mobile-nav-body');
    body.innerHTML=`<div class="row"><h2>Разделы</h2><button type="button" class="btn outline small" id="close-mobile-nav">×</button></div><div class="mobile-nav-list">${keys.map(key=>{const i=navKeys.indexOf(key);return `<button type="button" class="btn outline" data-mobile-page="${key}"><i>${navIcons[i]}</i>${t('nav')[i]}</button>`}).join('')}</div>`;
    const dialog=document.querySelector('#mobile-nav-dialog');dialog.showModal();document.querySelector('#close-mobile-nav').onclick=()=>dialog.close();body.querySelectorAll('[data-mobile-page]').forEach(button=>button.onclick=()=>{dialog.close();go(button.dataset.mobilePage);window.scrollTo({top:0,behavior:'smooth'});});
  };
  store.pointDelta = Number(store.pointDelta) || 0;
  renderers.assistant = renderAssistant;
  renderers.overview = overview;
  renderers.career = career;
  renderers.contribution = contribution;
  animatePage=function() {
    const root=document.querySelector('#content .page');if(!root)return;
    root.querySelectorAll('.card').forEach((item,index)=>item.style.setProperty('--card-delay',`${Math.min(index*65,520)}ms`));
    root.querySelectorAll('.bar span').forEach(item=>{const width=item.style.width||'100%';item.style.setProperty('width','0%','important');requestAnimationFrame(()=>item.style.setProperty('width',width,'important'));});
    const ring=document.querySelector('#content .progress-ring');if(!ring)return;
    const value=Number(ring.dataset.progress)||currentReady();ring.dataset.progress=String(value);
    const label=ring.querySelector('strong');if(!label)return;label.textContent='0%';ring.style.setProperty('--progress','0%');
    const heading=root.querySelector('.hero h2');let headingNumber=null;
    if(heading){const match=heading.textContent.match(/(\d+)%/);if(match){heading.innerHTML=heading.textContent.replace(/\d+%/,`<span>0%</span>`);headingNumber=heading.querySelector('span');}}
    requestAnimationFrame(()=>ring.style.setProperty('--progress',`${value}%`));
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced){label.textContent=`${value}%`;if(headingNumber)headingNumber.textContent=`${value}%`;return;}
    const start=performance.now(),duration=1300;function frame(now){const p=Math.min(1,(now-start)/duration),count=`${Math.round(value*(1-Math.pow(1-p,4)))}%`;label.textContent=count;if(headingNumber)headingNumber.textContent=count;if(p<1)requestAnimationFrame(frame);}requestAnimationFrame(frame);
  };
  document.querySelector('#lang')?.addEventListener('change',()=>{setTimeout(()=>{if(page==='assistant')render();updatePosition();},0);});
  const oldLogout=document.querySelector('#logout-account');
  const profileAvatar=document.querySelector('#account-menu');if(profileAvatar)profileAvatar.setAttribute('aria-label','Аккаунт');
  if(activeAccountId){role=me().role;updatePosition();}
  if(typeof render==='function')render();
})();

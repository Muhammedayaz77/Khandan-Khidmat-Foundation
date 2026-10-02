const THEME_KEY = 'kkf_theme';
const LANG_KEY = 'kkf_language';

/*
 * Khandan Khidmat Foundation
 * Client-side language support for the static GitHub Pages build.
 * The original English text is captured once, so switching Hindi -> Marathi -> Urdu
 * always translates from the original source instead of translating an old translation.
 */
const I18N = {
  hi: {
    'Home':'होम','About':'हमारे बारे में','Committee':'समिति','Activities':'गतिविधियाँ','Documents':'दस्तावेज़','Contact':'संपर्क','Member Login':'सदस्य लॉगिन','Menu':'मेन्यू','Close':'बंद करें','Settings':'सेटिंग्स','Language':'भाषा','English':'अंग्रेज़ी','Hindi':'हिंदी','Marathi':'मराठी','Urdu':'उर्दू','Dark':'डार्क','Light':'लाइट',
    'Community Welfare':'सामुदायिक कल्याण','Medical Support':'चिकित्सा सहायता','Service':'सेवा','Community Welfare · Medical Support · Service':'सामुदायिक कल्याण · चिकित्सा सहायता · सेवा','Organised Service':'संगठित सेवा','People first.':'लोग पहले।','Service always.':'सेवा हमेशा।','Our Activities':'हमारी गतिविधियाँ','Our activities':'हमारी गतिविधियाँ','Committee records':'समिति के रिकॉर्ड','Directors':'निदेशक','Members':'सदस्य','Foundation members':'फाउंडेशन के सदस्य','Committee directors':'समिति के निदेशक','President':'अध्यक्ष','Vice-President':'उपाध्यक्ष','Secretary':'सचिव','Joint Secretary':'संयुक्त सचिव','Cashier':'कोषाध्यक्ष','Joint Cashier':'संयुक्त कोषाध्यक्ष','Legal Advisor':'कानूनी सलाहकार',
    'Learn more':'और जानें','View records':'रिकॉर्ड देखें','View committee details':'समिति का विवरण देखें','Explore documents':'दस्तावेज़ देखें','Contact us':'संपर्क करें','Explore our work':'हमारे कार्य देखें','Discover the mission':'मिशन जानें','Sign in':'साइन इन','Login':'लॉगिन','Sign up':'साइन अप','New Member':'नया सदस्य','Create account':'खाता बनाएँ','Full name':'पूरा नाम','Password':'पासवर्ड','Confirm password':'पासवर्ड की पुष्टि करें','Create Member Account':'सदस्य खाता बनाएँ','Public Website':'सार्वजनिक वेबसाइट','Member Area':'सदस्य क्षेत्र',
    'Emergency Medical Help':'आपातकालीन चिकित्सा सहायता','Essential Assistance':'आवश्यक सहायता','Member Contributions':'सदस्य योगदान','Good service needs good records.':'अच्छी सेवा के लिए अच्छे रिकॉर्ड ज़रूरी हैं.',
    'Our focus':'हमारा फोकस','Our Focus':'हमारा फोकस','Purpose':'उद्देश्य','purpose.':'उद्देश्य।','Explore':'जानें','Support where it matters.':'जहाँ ज़रूरत हो वहाँ सहायता।','Serving people with compassion and responsibility.':'करुणा और जिम्मेदारी के साथ लोगों की सेवा।','Khandan Khidmat Foundation Mission brings members together to support poor, needy and medically distressed people through organised community welfare.':'खांदान खिदमत फाउंडेशन मिशन संगठित सामुदायिक कल्याण के माध्यम से गरीब, जरूरतमंद और चिकित्सकीय सहायता की आवश्यकता वाले लोगों की मदद के लिए सदस्यों को एक साथ लाता है।',
    'The meeting records describe a practical model for helping members and people in need when circumstances require assistance.':'बैठक के रिकॉर्ड जरूरत पड़ने पर सदस्यों और जरूरतमंद लोगों की सहायता के लिए एक व्यावहारिक व्यवस्था बताते हैं।','Emergency Medical Help':'आपातकालीन चिकित्सा सहायता','Support may be considered for urgent medical treatment, emergency illness or related care.':'तत्काल चिकित्सा उपचार, आपातकालीन बीमारी या संबंधित देखभाल के लिए सहायता पर विचार किया जा सकता है।','Essential Assistance':'आवश्यक सहायता','Organised help for genuine hardship and situations where a person or family needs support.':'वास्तविक कठिनाई और ऐसी परिस्थितियों में संगठित सहायता जहाँ किसी व्यक्ति या परिवार को मदद की आवश्यकता हो।','Member Contributions':'सदस्य योगदान','Members contribute according to the committee’s agreed purpose.':'सदस्य समिति द्वारा तय उद्देश्य के अनुसार योगदान करते हैं।','Members contribute according to the committee\'s agreed purpose.':'सदस्य समिति द्वारा तय उद्देश्य के अनुसार योगदान करते हैं।',
    'Leadership, approvals and overall committee responsibility.':'नेतृत्व, अनुमोदन और समिति की समग्र जिम्मेदारी।','Supports the President and committee operations.':'अध्यक्ष और समिति के कार्यों में सहयोग करता है।','Records, meetings, communication and administration.':'रिकॉर्ड, बैठकें, संचार और प्रशासन।','Financial records, collections and authorised payments.':'वित्तीय रिकॉर्ड, संग्रह और अधिकृत भुगतान।','Supports financial administration and records.':'वित्तीय प्रशासन और रिकॉर्ड में सहयोग करता है।','Legal guidance and committee matters.':'कानूनी मार्गदर्शन और समिति से जुड़े मामलों में सहायता।',
    'Community welfare':'सामुदायिक कल्याण','Medical support':'चिकित्सा सहायता','Organised service':'संगठित सेवा','Mission':'मिशन','Foundation Mission':'फाउंडेशन मिशन','About the foundation':'फाउंडेशन के बारे में','Our work':'हमारा कार्य','Our committee':'हमारी समिति','Our documents':'हमारे दस्तावेज़','Get in touch':'संपर्क करें','Contact information':'संपर्क जानकारी','Send us a message':'हमें संदेश भेजें','Name':'नाम','Email':'ईमेल','Message':'संदेश','Send message':'संदेश भेजें','Thank you':'धन्यवाद',
    'Open member login →':'सदस्य लॉगिन खोलें →','Member Login':'सदस्य लॉगिन','Private information, simple access.':'निजी जानकारी, आसान पहुँच।','Members can optionally sign in to view their financial summary. Managers have separate access for authorised updates.':'सदस्य अपनी वित्तीय जानकारी देखने के लिए वैकल्पिक रूप से साइन इन कर सकते हैं। प्रबंधकों के पास अधिकृत अपडेट के लिए अलग पहुँच है।'
  },
  mr: {
    'Home':'मुख्यपृष्ठ','About':'आमच्याबद्दल','Committee':'समिती','Activities':'उपक्रम','Documents':'कागदपत्रे','Contact':'संपर्क','Member Login':'सदस्य लॉगिन','Menu':'मेन्यू','Close':'बंद करा','Settings':'सेटिंग्ज','Language':'भाषा','English':'इंग्रजी','Hindi':'हिंदी','Marathi':'मराठी','Urdu':'उर्दू','Dark':'डार्क','Light':'लाइट',
    'Community Welfare':'सामुदायिक कल्याण','Medical Support':'वैद्यकीय मदत','Service':'सेवा','Community Welfare · Medical Support · Service':'सामुदायिक कल्याण · वैद्यकीय मदत · सेवा','Organised Service':'संघटित सेवा','People first.':'लोक प्रथम.','Service always.':'सेवा नेहमी.','Our Activities':'आमचे उपक्रम','Our activities':'आमचे उपक्रम','Committee records':'समितीच्या नोंदी','Directors':'संचालक','Members':'सदस्य','Foundation members':'संस्थेचे सदस्य','Committee directors':'समितीचे संचालक','President':'अध्यक्ष','Vice-President':'उपाध्यक्ष','Secretary':'सचिव','Joint Secretary':'सहसचिव','Cashier':'खजिनदार','Joint Cashier':'संयुक्त खजिनदार','Legal Advisor':'कायदेशीर सल्लागार',
    'Learn more':'अधिक जाणून घ्या','View records':'नोंदी पहा','View committee details':'समितीचा तपशील पहा','Explore documents':'कागदपत्रे पहा','Contact us':'संपर्क करा','Explore our work':'आमचे कार्य पहा','Discover the mission':'उद्दिष्ट जाणून घ्या','Sign in':'साइन इन','Login':'लॉगिन','Sign up':'साइन अप','New Member':'नवीन सदस्य','Create account':'खाते तयार करा','Full name':'पूर्ण नाव','Password':'पासवर्ड','Confirm password':'पासवर्डची पुष्टी करा','Create Member Account':'सदस्य खाते तयार करा','Public Website':'सार्वजनिक वेबसाइट','Member Area':'सदस्य क्षेत्र',
    'Emergency Medical Help':'आपत्कालीन वैद्यकीय मदत','Essential Assistance':'आवश्यक मदत','Member Contributions':'सदस्यांचे योगदान','Good service needs good records.':'चांगल्या सेवेसाठी चांगल्या नोंदी आवश्यक आहेत.',
    'Our focus':'आमचा केंद्रबिंदू','Our Focus':'आमचा केंद्रबिंदू','Purpose':'उद्देश','purpose.':'उद्देश.','Explore':'पहा','Support where it matters.':'जिथे गरज आहे तिथे मदत.','Serving people with compassion and responsibility.':'करुणा आणि जबाबदारीने लोकांची सेवा.','Khandan Khidmat Foundation Mission brings members together to support poor, needy and medically distressed people through organised community welfare.':'खांदान खिदमत फाउंडेशन मिशन संघटित सामुदायिक कल्याणाद्वारे गरीब, गरजू आणि वैद्यकीय मदतीची गरज असलेल्या लोकांना मदत करण्यासाठी सदस्यांना एकत्र आणते.',
    'The meeting records describe a practical model for helping members and people in need when circumstances require assistance.':'बैठकीच्या नोंदींमध्ये गरज भासल्यास सदस्य आणि गरजू लोकांना मदत करण्याची व्यावहारिक पद्धत सांगितली आहे.','Support may be considered for urgent medical treatment, emergency illness or related care.':'तातडीच्या वैद्यकीय उपचारांसाठी, आपत्कालीन आजारासाठी किंवा संबंधित उपचारांसाठी मदतीचा विचार केला जाऊ शकतो.','Organised help for genuine hardship and situations where a person or family needs support.':'खऱ्या अडचणीच्या आणि व्यक्ती किंवा कुटुंबाला मदतीची गरज असलेल्या परिस्थितीत संघटित मदत दिली जाते.','Members contribute according to the committee’s agreed purpose.':'सदस्य समितीने ठरवलेल्या उद्देशानुसार योगदान देतात.','Members contribute according to the committee\'s agreed purpose.':'सदस्य समितीने ठरवलेल्या उद्देशानुसार योगदान देतात.',
    'Leadership, approvals and overall committee responsibility.':'नेतृत्व, मंजुरी आणि समितीची एकूण जबाबदारी.','Supports the President and committee operations.':'अध्यक्ष आणि समितीच्या कामकाजाला सहकार्य करतो.','Records, meetings, communication and administration.':'नोंदी, बैठका, संवाद आणि प्रशासन.','Financial records, collections and authorised payments.':'आर्थिक नोंदी, जमा रक्कम आणि अधिकृत देयके.','Supports financial administration and records.':'आर्थिक प्रशासन आणि नोंदींमध्ये सहकार्य करतो.','Legal guidance and committee matters.':'कायदेशीर मार्गदर्शन आणि समितीशी संबंधित बाबी.',
    'Mission':'मिशन','Foundation Mission':'फाउंडेशन मिशन','About the foundation':'फाउंडेशनबद्दल','Our work':'आमचे कार्य','Our committee':'आमची समिती','Our documents':'आमची कागदपत्रे','Get in touch':'संपर्क करा','Contact information':'संपर्क माहिती','Send us a message':'आम्हाला संदेश पाठवा','Name':'नाव','Email':'ईमेल','Message':'संदेश','Send message':'संदेश पाठवा','Thank you':'धन्यवाद','Open member login →':'सदस्य लॉगिन उघडा →','Private information, simple access.':'खासगी माहिती, सोपी प्रवेश व्यवस्था.','Members can optionally sign in to view their financial summary. Managers have separate access for authorised updates.':'सदस्य आपला आर्थिक सारांश पाहण्यासाठी ऐच्छिकरित्या साइन इन करू शकतात. अधिकृत अपडेटसाठी व्यवस्थापकांना स्वतंत्र प्रवेश आहे.'
  },
  ur: {
    'Home':'ہوم','About':'ہمارے بارے میں','Committee':'کمیٹی','Activities':'سرگرمیاں','Documents':'دستاویزات','Contact':'رابطہ','Member Login':'ممبر لاگ اِن','Menu':'مینو','Close':'بند کریں','Settings':'ترتیبات','Language':'زبان','English':'انگریزی','Hindi':'ہندی','Marathi':'مراٹھی','Urdu':'اردو','Dark':'ڈارک','Light':'لائٹ',
    'Community Welfare':'برادری کی فلاح','Medical Support':'طبی مدد','Service':'خدمت','Community Welfare · Medical Support · Service':'برادری کی فلاح · طبی مدد · خدمت','Organised Service':'منظم خدمت','People first.':'لوگ سب سے پہلے۔','Service always.':'خدمت ہمیشہ۔','Our Activities':'ہماری سرگرمیاں','Our activities':'ہماری سرگرمیاں','Committee records':'کمیٹی ریکارڈ','Directors':'ڈائریکٹرز','Members':'ممبران','Foundation members':'فاؤنڈیشن کے ممبران','Committee directors':'کمیٹی کے ڈائریکٹرز','President':'صدر','Vice-President':'نائب صدر','Secretary':'سیکریٹری','Joint Secretary':'جوائنٹ سیکریٹری','Cashier':'خزانچی','Joint Cashier':'جوائنٹ خزانچی','Legal Advisor':'قانونی مشیر',
    'Learn more':'مزید جانیں','View records':'ریکارڈ دیکھیں','View committee details':'کمیٹی کی تفصیل دیکھیں','Explore documents':'دستاویزات دیکھیں','Contact us':'رابطہ کریں','Explore our work':'ہمارا کام دیکھیں','Discover the mission':'مشن جانیں','Sign in':'سائن اِن','Login':'لاگ اِن','Sign up':'سائن اَپ','New Member':'نیا ممبر','Create account':'اکاؤنٹ بنائیں','Full name':'پورا نام','Password':'پاس ورڈ','Confirm password':'پاس ورڈ کی تصدیق کریں','Create Member Account':'ممبر اکاؤنٹ بنائیں','Public Website':'عوامی ویب سائٹ','Member Area':'ممبر ایریا',
    'Emergency Medical Help':'ہنگامی طبی مدد','Essential Assistance':'ضروری مدد','Member Contributions':'ممبران کی شراکت','Good service needs good records.':'اچھی خدمت کے لیے اچھے ریکارڈ ضروری ہیں۔',
    'Our focus':'ہماری توجہ','Our Focus':'ہماری توجہ','Purpose':'مقصد','purpose.':'مقصد۔','Explore':'دیکھیں','Support where it matters.':'جہاں ضرورت ہو وہاں مدد۔','Serving people with compassion and responsibility.':'ہمدردی اور ذمہ داری کے ساتھ لوگوں کی خدمت۔','Khandan Khidmat Foundation Mission brings members together to support poor, needy and medically distressed people through organised community welfare.':'خاندان خدمت فاؤنڈیشن مشن منظم برادری کی فلاح کے ذریعے غریب، ضرورت مند اور طبی مدد کے محتاج لوگوں کی مدد کے لیے اراکین کو ایک ساتھ لاتا ہے۔',
    'The meeting records describe a practical model for helping members and people in need when circumstances require assistance.':'اجلاس کی ریکارڈنگز ضرورت کے وقت اراکین اور ضرورت مند لوگوں کی مدد کے لیے ایک عملی طریقہ بیان کرتی ہیں۔','Support may be considered for urgent medical treatment, emergency illness or related care.':'فوری طبی علاج، ہنگامی بیماری یا متعلقہ دیکھ بھال کے لیے مدد پر غور کیا جا سکتا ہے۔','Organised help for genuine hardship and situations where a person or family needs support.':'حقیقی مشکل اور ایسی صورتحال میں منظم مدد جہاں کسی شخص یا خاندان کو مدد کی ضرورت ہو۔','Members contribute according to the committee’s agreed purpose.':'اراکین کمیٹی کے طے شدہ مقصد کے مطابق تعاون کرتے ہیں۔','Members contribute according to the committee\'s agreed purpose.':'اراکین کمیٹی کے طے شدہ مقصد کے مطابق تعاون کرتے ہیں۔',
    'Leadership, approvals and overall committee responsibility.':'قیادت، منظوری اور کمیٹی کی مجموعی ذمہ داری۔','Supports the President and committee operations.':'صدر اور کمیٹی کے امور میں تعاون کرتا ہے۔','Records, meetings, communication and administration.':'ریکارڈ، اجلاس، رابطہ اور انتظامیہ۔','Financial records, collections and authorised payments.':'مالی ریکارڈ، وصولیاں اور مجاز ادائیگیاں۔','Supports financial administration and records.':'مالی انتظام اور ریکارڈ میں تعاون کرتا ہے۔','Legal guidance and committee matters.':'قانونی رہنمائی اور کمیٹی کے معاملات۔',
    'Mission':'مشن','Foundation Mission':'فاؤنڈیشن مشن','About the foundation':'فاؤنڈیشن کے بارے میں','Our work':'ہمارا کام','Our committee':'ہماری کمیٹی','Our documents':'ہماری دستاویزات','Get in touch':'رابطہ کریں','Contact information':'رابطے کی معلومات','Send us a message':'ہمیں پیغام بھیجیں','Name':'نام','Email':'ای میل','Message':'پیغام','Send message':'پیغام بھیجیں','Thank you':'شکریہ','Open member login →':'ممبر لاگ اِن کھولیں →','Private information, simple access.':'نجی معلومات، آسان رسائی۔','Members can optionally sign in to view their financial summary. Managers have separate access for authorised updates.':'اراکین اپنی مالی معلومات دیکھنے کے لیے اختیاری طور پر سائن اِن کر سکتے ہیں۔ مجاز اپڈیٹس کے لیے مینیجرز کو الگ رسائی حاصل ہے۔'
  }
};

const sourceText = new WeakMap();
const sourceAttributes = new WeakMap();
let sourceTitle = '';

function currentLanguage(){
  const saved = localStorage.getItem(LANG_KEY);
  return I18N[saved] ? saved : 'en';
}

function t(value){
  const lang = currentLanguage();
  return I18N[lang]?.[value] || value;
}

function translateValue(value, dict){
  if (!value || !dict) return value;
  const keys = Object.keys(dict).sort((a,b)=>b.length-a.length);
  let output = value;
  for (const key of keys) {
    if (output.includes(key)) output = output.split(key).join(dict[key]);
  }
  return output;
}

function collectTranslationSources(){
  if (!document.body) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
  }

  document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(el=>{
    if (!sourceAttributes.has(el)) {
      const attrs = {};
      ['placeholder','aria-label','title','alt'].forEach(name=>{
        if (el.hasAttribute(name)) attrs[name] = el.getAttribute(name);
      });
      sourceAttributes.set(el, attrs);
    }
  });

  if (!sourceTitle) sourceTitle = document.title;
}

function updateLanguageUI(lang){
  const select = document.getElementById('languageSelect');
  if (select) select.value = lang;
  const label = document.getElementById('languageLabel');
  if (label) label.textContent = t('Language');
  const settings = document.getElementById('settingsToggle');
  if (settings) settings.textContent = '⚙ ' + t('Settings');
  const menu = document.getElementById('menuToggle');
  if (menu && !document.getElementById('siteNav')?.classList.contains('open')) {
    menu.textContent = '☰ ' + t('Menu');
  }
  document.querySelectorAll('.theme-toggle').forEach(button=>{
    const dark = document.documentElement.classList.contains('dark');
    button.textContent = dark ? '☀ ' + t('Light') : '☾ ' + t('Dark');
  });
}

function translatePage(){
  collectTranslationSources();
  const lang = currentLanguage();
  const dict = I18N[lang];
  document.documentElement.lang = lang === 'ur' ? 'ur' : lang;
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

  sourceText.forEach?.(()=>{});
  // WeakMap cannot be iterated, so walk the DOM again and read each node's captured source.
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest('#languagePanel')) continue;
    const original = sourceText.get(node);
    if (original == null) continue;
    node.nodeValue = lang === 'en' ? original : translateValue(original, dict);
  }

  sourceAttributes.forEach?.(()=>{});
  document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(el=>{
    const originals = sourceAttributes.get(el);
    if (!originals) return;
    Object.entries(originals).forEach(([name, original])=>{
      el.setAttribute(name, lang === 'en' ? original : translateValue(original, dict));
    });
  });

  document.title = lang === 'en' ? sourceTitle : translateValue(sourceTitle, dict);
  updateLanguageUI(lang);
}

function applyTheme(theme){
  const safe = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', safe === 'dark');
  localStorage.setItem(THEME_KEY, safe);
  updateLanguageUI(currentLanguage());
}

function injectSettingsStyle(){
  if (document.getElementById('kkfLanguageStyle')) return;
  const style = document.createElement('style');
  style.id = 'kkfLanguageStyle';
  style.textContent = `
    .settings-toggle{border:1px solid var(--line);background:var(--surface);color:var(--text);padding:10px 11px;border-radius:11px;cursor:pointer;white-space:nowrap;margin-left:4px}
    .settings-toggle:hover{background:var(--surface2)}
    .language-panel{position:absolute;right:18px;top:calc(100% + 8px);z-index:200;min-width:210px;padding:14px;border:1px solid var(--line);border-radius:16px;background:var(--surface);box-shadow:var(--shadow)}
    .language-panel label{display:block;color:var(--muted);font-size:.75rem;font-weight:800;margin-bottom:7px}
    .language-panel select{width:100%;padding:10px 11px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--text);font:inherit}
    .nav{position:relative}
    @media(max-width:1020px){.settings-toggle{width:100%;text-align:left;margin-left:0;padding:13px 15px}.language-panel{position:static;margin:4px 0 6px;width:100%;box-shadow:none}.language-panel select{padding:12px}}
  `;
  document.head.appendChild(style);
}

function ensureSettings(){
  const nav = document.getElementById('siteNav');
  if (!nav || document.getElementById('settingsToggle')) return;
  injectSettingsStyle();

  const button = document.createElement('button');
  button.className = 'settings-toggle';
  button.id = 'settingsToggle';
  button.type = 'button';
  button.textContent = '⚙ ' + t('Settings');

  const panel = document.createElement('div');
  panel.className = 'language-panel';
  panel.id = 'languagePanel';
  panel.hidden = true;
  panel.innerHTML = `
    <label id="languageLabel" for="languageSelect">${t('Language')}</label>
    <select id="languageSelect" aria-label="${t('Language')}">
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="mr">मराठी</option>
      <option value="ur">اردو</option>
    </select>`;

  button.addEventListener('click', e=>{
    e.stopPropagation();
    panel.hidden = !panel.hidden;
  });

  panel.addEventListener('click', e=>e.stopPropagation());
  panel.querySelector('#languageSelect').addEventListener('change', e=>{
    localStorage.setItem(LANG_KEY, e.target.value);
    translatePage();
    panel.hidden = true;
  });

  nav.appendChild(button);
  nav.appendChild(panel);
  panel.querySelector('#languageSelect').value = currentLanguage();
}

function closeMenu(){
  const nav = document.getElementById('siteNav');
  const menu = document.getElementById('menuToggle');
  if (!nav) return;
  nav.classList.remove('open');
  if (menu) {
    menu.setAttribute('aria-expanded','false');
    menu.textContent = '☰ ' + t('Menu');
  }
}

function initMenu(){
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if (!menu || !nav || menu.dataset.kkfReady === '1') return;
  menu.dataset.kkfReady = '1';
  menu.addEventListener('click', e=>{
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '✕ ' + t('Close') : '☰ ' + t('Menu');
  });
  nav.addEventListener('click', e=>{
    if (e.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', e=>{
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', ()=>{ if(window.innerWidth > 1020) closeMenu(); });
}

function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'dark' ? 'dark' : 'light');
  document.querySelectorAll('.theme-toggle').forEach(button=>{
    if (button.dataset.kkfThemeReady === '1') return;
    button.dataset.kkfThemeReady = '1';
    button.addEventListener('click', ()=>applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark'));
  });
}

function initLanguage(){
  ensureSettings();
  collectTranslationSources();
  translatePage();
}

document.addEventListener('DOMContentLoaded', ()=>{
  initTheme();
  initMenu();
  initLanguage();
});

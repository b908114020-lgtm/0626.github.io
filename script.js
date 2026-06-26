const translations = {
  zh: {
    eyebrow: "熱帶雨林醫學營養創意",
    headline: "我是洪韻慈，雨林中的都市冒險家",
    heroText: "在台北都市與熱帶叢林之間，融合醫學營養、楓杏服務團精神與設計美學。",
    ctaPrimary: "探索慈慈故事",
    ctaSecondary: "聯絡我",
    statsTitle: "森林實驗數據",
    yearsExp: "年品牌策劃",
    campaigns: "次熱帶專案",
    awards: "創作獎項",
    aboutLabel: "關於我",
    aboutHeadline: "慈慈的叢林傳奇",
    aboutPara1: "我是洪韻慈，綽號慈慈。就讀台北醫學大學保健營養學系，同時身為楓杏醫學青年服務團成員，讓服務與設計在雨林裡交織。",
    aboutPara2: "我將營養科學與熱帶叢林視覺融合，讓每個專案散發楓性的溫暖與森林的野性，打造有深度的健康品牌故事。",
    heroCount1: "跨領域專案",
    heroCount2: "城市與森林場景",
    heroCount3: "客戶滿意度",
    highlightsLabel: "事蹟",
    highlightsHeadline: "雨林漫遊的創意印記",
    highlight1Title: "奇點展演企劃",
    highlight1Text: "策畫熱帶科技展，以猿猴探索精神為靈感，吸引 5 萬名參觀者。",
    highlight2Title: "品牌重塑設計",
    highlight2Text: "為城市戶外用品打造「叢林生活」品牌系統，完成視覺升級與包裝設計。",
    highlight3Title: "互動式網站",
    highlight3Text: "創造可視化森林地圖，用滑動動畫引導品牌故事，提升轉換率 42%。",
    contactLabel: "聯絡我",
    contactHeadline: "一起在叢林裡開啟新企劃",
    contactRole: "設計師 / 創意策展人",
    contactDesc: "我擅長將森林氛圍融入現代品牌語境，並用視覺敘事替客戶打造差異化體驗。",
    socialTitle: "社群連結",
    jungleNote: "想像你正在一座新型態創意雨林中散步，一切設計都從自然與科技的融合開始。",
    footerText: "© 2026 洪韻慈 • 慈慈 Rainforest Studio | 讓你的故事在熱帶叢林裡飛翔。"
  },
  en: {
    eyebrow: "Rainforest Nutrition & Creative Director",
    headline: "I am Ci-Ci Hung, a jungle adventurer in the city.",
    heroText: "I blend medical nutrition insight with Maple Youth Service spirit and jungle-inspired design energy.",
    ctaPrimary: "Discover My Story",
    ctaSecondary: "Contact Me",
    statsTitle: "Jungle Metrics",
    yearsExp: "Years of branding",
    campaigns: "Tropical campaigns",
    awards: "Creative awards",
    aboutLabel: "About Me",
    aboutHeadline: "Ci-Ci's Jungle Legend",
    aboutPara1: "I am Ci-Ci Hung, known as 慈慈. As a Nutrition and Dietetics student at Taipei Medical University and a member of the Maple Medical Youth Service Club, I combine service, science, and jungle creativity.",
    aboutPara2: "I blend nutritional science with tropical rainforest visuals so each project carries maple warmth and wild, memorable energy.",
    heroCount1: "Cross-discipline projects",
    heroCount2: "City & forest worlds",
    heroCount3: "Client satisfaction",
    highlightsLabel: "Highlights",
    highlightsHeadline: "Creative footprints in the canopy",
    highlight1Title: "Immersive Exhibition",
    highlight1Text: "Curated a tropical tech showcase driven by primate curiosity and drew 50k visitors.",
    highlight2Title: "Brand reinvention",
    highlight2Text: "Built a rainforest lifestyle identity for urban outdoor goods, from packaging to motion design.",
    highlight3Title: "Interactive website",
    highlight3Text: "Designed a visual forest map that guided visitors through brand storytelling, boosting conversions by 42%.",
    contactLabel: "Contact",
    contactHeadline: "Let’s start a new jungle project together",
    contactRole: "Designer / Creative curator",
    contactDesc: "I specialize in blending forest atmosphere with contemporary brand narratives and compelling visual storytelling.",
    socialTitle: "Social links",
    jungleNote: "Imagine walking through a new creative rainforest where every design is born from nature and tech in harmony.",
    footerText: "© 2026 Ci-Ci Hung • Rainforest Studio | Let your story soar through the tropical canopy."
  }
};

const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const translatedElements = document.querySelectorAll('[data-key]');

let currentLang = localStorage.getItem('profileLang') || 'zh';
let currentTheme = localStorage.getItem('profileTheme') || 'light';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('profileLang', lang);
  translatedElements.forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  langToggle.textContent = lang === 'zh' ? 'EN / 中文' : 'EN / 中文';
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('profileTheme', theme);
  body.classList.toggle('dark', theme === 'dark');
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
});

themeToggle.addEventListener('click', () => {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  applyTheme(currentTheme);
  initAnimations();
});

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-copy > *', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
    delay: 0.2,
  });

  gsap.from('.hero-card', {
    opacity: 0,
    y: 50,
    duration: 1.1,
    ease: 'power3.out',
    delay: 0.35,
  });

  document.querySelectorAll('.section').forEach(section => {
    gsap.from(section.querySelectorAll('h2, p, .info-card, .stat-card, .contact-card, .social-panel, .about-copy, .about-stats'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
    });
  });

  gsap.to('.hero-visual .rainforest-glow', {
    scale: 1.05,
    opacity: 0.75,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });
}

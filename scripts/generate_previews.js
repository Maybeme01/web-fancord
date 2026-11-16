const fs = require('fs');

// Generate Arabic Voice Room Recorder SVG (Pixel-perfect matching Discord UI)
function generateVoiceRecorderSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 740" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="vr-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
    <linearGradient id="vr-green" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2ecc71"/>
      <stop offset="100%" stop-color="#23a55a"/>
    </linearGradient>
    <linearGradient id="vr-switch" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5865f2"/>
      <stop offset="100%" stop-color="#4752c4"/>
    </linearGradient>
    <filter id="vr-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <style>
    .title { font-family: 'Cairo', system-ui, sans-serif; font-size: 17px; font-weight: 800; fill: #ffffff; }
    .sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 13px; font-weight: 500; fill: #949ba4; }
    .label { font-family: 'Cairo', system-ui, sans-serif; font-size: 14px; font-weight: 700; fill: #dbdee1; }
    .btn-text { font-family: 'Cairo', system-ui, sans-serif; font-size: 14px; font-weight: 800; fill: #ffffff; }
    .status-text { font-family: 'Cairo', system-ui, sans-serif; font-size: 14px; font-weight: 800; fill: #ffffff; }
    .status-sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #949ba4; }
    .section-title { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 800; fill: #949ba4; letter-spacing: 0.5px; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: #80848e; }
  </style>

  <!-- Modal Container -->
  <rect x="0" y="0" width="620" height="740" rx="12" fill="url(#vr-bg)" filter="url(#vr-glow)" stroke="#2b2d31" stroke-width="1"/>

  <!-- Header -->
  <g transform="translate(24, 28)">
    <text x="32" y="16" class="title">🎥 مسجل الرومات الصوتية (Voice Room Recorder)</text>
    <circle cx="560" cy="10" r="14" fill="#2b2d31"/>
    <text x="560" y="15" text-anchor="middle" fill="#dbdee1" font-size="14" font-family="sans-serif">✕</text>
  </g>

  <!-- Status Box -->
  <g transform="translate(24, 68)">
    <rect x="0" y="0" width="572" height="64" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <circle cx="28" cy="24" r="6" fill="#80848e"/>
    <text x="44" y="28" class="status-text">⚪ التسجيل متوقف (جاهز للعمل)</text>
    <text x="44" y="48" class="status-sub">متصل بالروم: 📢 | • عام 1 (Public Voice) • جودة الصوت: 320kbps</text>
  </g>

  <!-- Action Buttons -->
  <g transform="translate(24, 146)">
    <!-- Start Recording Button -->
    <rect x="0" y="0" width="276" height="42" rx="6" fill="url(#vr-green)"/>
    <text x="138" y="26" text-anchor="middle" class="btn-text">▶️ بدء التسجيل الآن</text>

    <!-- Open Folder Button -->
    <rect x="296" y="0" width="276" height="42" rx="6" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="434" y="26" text-anchor="middle" class="btn-text">📁 فتح مجلد الحفظ (Videos\\FanCord)</text>
  </g>

  <!-- Settings Section Header -->
  <g transform="translate(24, 216)">
    <text x="0" y="12" class="section-title">إعدادات التسجيل التلقائي والتحكم بالصوت</text>
  </g>

  <!-- Auto Sync Card -->
  <g transform="translate(24, 238)">
    <rect x="0" y="0" width="572" height="74" rx="8" fill="#1e1f22" stroke="rgba(88, 101, 242, 0.4)" stroke-width="1"/>
    <text x="20" y="26" class="label" fill="#5865f2">🎯 المزامنة الصوتية التلقائية (Discord Auto Sync)</text>
    <rect x="360" y="10" width="192" height="26" rx="4" fill="#2b2d31" stroke="#5865f2" stroke-width="0.8"/>
    <text x="456" y="27" text-anchor="middle" font-family="'Cairo', sans-serif" font-size="11px" font-weight="700" fill="#5865f2">🔄 ضبط تلقائي (موصى به)</text>
    <text x="20" y="48" class="sub" font-size="11.5px">🎤 مايك ديسكورد: جهاز الصوت الافتراضي (SteelSeries Sonar - Stream)</text>
    <text x="20" y="64" class="sub" font-size="11.5px">🔊 سماعة الروم: جهاز الصوت الافتراضي (SteelSeries Sonar - Chat)</text>
  </g>

  <!-- Settings Item 1: Auto Record -->
  <g transform="translate(24, 328)">
    <text x="0" y="20" class="label">بدء التسجيل تلقائياً عند دخول أي روم صوتي</text>
    <text x="0" y="38" class="sub">يبدأ التسجيل فمع دخولك للروم ويحفظ الملف الصوتي فور خروجك.</text>
    <!-- Switch OFF -->
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#35373c"/>
    <circle cx="535" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>

  <!-- Settings Item 2: Loopback Room Audio -->
  <g transform="translate(24, 396)">
    <text x="0" y="20" class="label">تسجيل صوت أعضاء الروم (System Loopback)</text>
    <text x="0" y="38" class="sub">التقاط نقي وفوري لأصوات جميع المتواجدين في الروم بدون صدى.</text>
    <!-- Switch ON -->
    <rect x="522" y="10" width="50" height="26" rx="13" fill="url(#vr-switch)"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>

  <!-- Dropdown 1: Audio Source -->
  <g transform="translate(24, 464)">
    <text x="0" y="16" class="sub" font-weight="700" fill="#dbdee1">🔊 مصدر التقاط صوت الروم الصوتي:</text>
    <rect x="0" y="26" width="572" height="38" rx="6" fill="#1e1f22" stroke="#35373c" stroke-width="1"/>
    <text x="20" y="50" class="label" font-size="13px">SteelSeries Sonar - Chat (Virtual Audio Device - الروم الصوتي)</text>
    <text x="548" y="50" fill="#949ba4" font-size="12px">▼</text>
  </g>

  <!-- Settings Item 3: Record Mic -->
  <g transform="translate(24, 542)">
    <text x="0" y="20" class="label">تسجيل صوت المايك الخاص بك مدمجاً مع صوت الروم</text>
    <text x="0" y="38" class="sub">دمج صوتك المباشر مع صوت الأعضاء في ملف صوتي موحد متزامن.</text>
    <!-- Switch ON -->
    <rect x="522" y="10" width="50" height="26" rx="13" fill="url(#vr-switch)"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>

  <!-- Settings Item 4: Notification -->
  <g transform="translate(24, 610)">
    <text x="0" y="20" class="label">إشعار فوري عند اكتمال وحفظ التسجيل</text>
    <text x="0" y="38" class="sub">إظهار إشعار في زاوية ديسكورد عند انتهاء التسجيل وحفظه في مجلد الفيديوهات.</text>
    <!-- Switch ON -->
    <rect x="522" y="10" width="50" height="26" rx="13" fill="url(#vr-switch)"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
  </g>

  <!-- Footer -->
  <g transform="translate(24, 688)">
    <line x1="0" y1="0" x2="572" y2="0" stroke="#232428" stroke-width="1"/>
    <text x="0" y="28" class="mono">FanCord Voice Recorder • Devs.FAN (v3.0 Arabic)</text>
    <rect x="480" y="10" width="92" height="34" rx="4" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="526" y="32" text-anchor="middle" class="btn-text" font-size="13px">إغلاق</text>
  </g>
</svg>`;
}

// Generate TikTok Viewer with FanCord clip SVG
function generateTikTokViewerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 720" width="100%" height="100%">
  <defs>
    <linearGradient id="tt-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0518"/>
      <stop offset="35%" stop-color="#160e33"/>
      <stop offset="70%" stop-color="#0f0924"/>
      <stop offset="100%" stop-color="#05030a"/>
    </linearGradient>
    <linearGradient id="tt-card-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="50%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="tt-btn-follow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fe2c55"/>
      <stop offset="100%" stop-color="#ff0050"/>
    </linearGradient>
    <filter id="tt-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="14" flood-color="#a855f7" flood-opacity="0.35"/>
    </filter>
  </defs>

  <style>
    .t-title { font-family: 'Cairo', system-ui, sans-serif; font-size: 13px; font-weight: 700; fill: #dbdee1; }
    .t-user { font-family: 'Cairo', system-ui, sans-serif; font-size: 15px; font-weight: 800; fill: #ffffff; }
    .t-handle { font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #d1d5db; }
    .t-caption { font-family: 'Cairo', system-ui, sans-serif; font-size: 12.5px; font-weight: 600; fill: #ffffff; line-height: 1.5; }
    .t-tag { font-family: system-ui, sans-serif; font-weight: 800; fill: #38bdf8; }
    .t-stat { font-family: system-ui, sans-serif; font-size: 11.5px; font-weight: 800; fill: #ffffff; }
    .t-sound { font-family: 'Cairo', system-ui, sans-serif; font-size: 11px; font-weight: 600; fill: #e5e7eb; }
    .t-feature-title { font-family: 'Cairo', system-ui, sans-serif; font-size: 18px; font-weight: 900; fill: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.8); }
    .t-feature-pill { font-family: 'Cairo', system-ui, sans-serif; font-size: 11.5px; font-weight: 700; fill: #ffffff; }
  </style>

  <!-- Window Frame -->
  <rect x="0" y="0" width="420" height="720" rx="14" fill="#0f1013" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Titlebar (Authentic TikTok | FanCord Sidebar Header) -->
  <rect x="0" y="0" width="420" height="42" rx="14" fill="#18191c"/>
  <rect x="0" y="30" width="420" height="12" fill="#18191c"/>
  <g transform="translate(16, 26)">
    <text x="0" y="0" class="t-title">🗔 | 🎵 TikTok | FanCord</text>
    <!-- Window controls -->
    <text x="350" y="0" fill="#949ba4" font-size="14px">↻</text>
    <text x="375" y="0" fill="#949ba4" font-size="14px">✕</text>
  </g>
  <line x1="0" y1="42" x2="420" y2="42" stroke="#2b2d31" stroke-width="1"/>

  <!-- TikTok Video Player Viewport -->
  <g transform="translate(0, 42)">
    <!-- Video Background Gradient & Ambient Aura -->
    <rect x="0" y="0" width="420" height="678" fill="url(#tt-bg)"/>

    <!-- Dynamic Video Backdrop Graphic: FanCord 2026 Showcase Scene -->
    <circle cx="210" cy="240" r="140" fill="#8b5cf6" opacity="0.18" filter="url(#tt-glow)"/>
    <circle cx="130" cy="320" r="100" fill="#ec4899" opacity="0.14" filter="url(#tt-glow)"/>

    <!-- Central FanCord Feature Banner in the Video -->
    <g transform="translate(30, 80)">
      <!-- Glass Feature Card inside Video -->
      <rect x="0" y="0" width="360" height="280" rx="16" fill="rgba(24, 18, 48, 0.85)" stroke="url(#tt-card-grad)" stroke-width="1.5" filter="url(#tt-glow)"/>

      <!-- FC Logo Badge -->
      <circle cx="180" cy="50" r="32" fill="url(#tt-card-grad)"/>
      <text x="180" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22px" fill="#ffffff">FC</text>

      <!-- Video Headings -->
      <text x="180" y="112" text-anchor="middle" class="t-feature-title">تعديل FanCord الأقوى لعام 2026 🔥</text>
      <text x="180" y="136" text-anchor="middle" font-family="'Cairo', sans-serif" font-size="13px" font-weight="700" fill="#c084fc">النسخة العربية الرسمية • إضافات حصرية كاملة</text>

      <!-- 3 Glowing Feature Badges in the Video -->
      <g transform="translate(20, 160)">
        <!-- Badge 1 -->
        <rect x="0" y="0" width="320" height="30" rx="6" fill="rgba(139, 92, 246, 0.25)" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1"/>
        <text x="160" y="20" text-anchor="middle" class="t-feature-pill">🇸🇦 تعريب كامل 100% (ArabicUI) من اليمين لليسار</text>

        <!-- Badge 2 -->
        <rect x="0" y="38" width="320" height="30" rx="6" fill="rgba(236, 72, 153, 0.22)" stroke="rgba(244, 114, 182, 0.4)" stroke-width="1"/>
        <text x="160" y="58" text-anchor="middle" class="t-feature-pill">🎙️ مسجل الرومات الصوتية بدون حد زمني وبجودة 320k</text>

        <!-- Badge 3 -->
        <rect x="0" y="76" width="320" height="30" rx="6" fill="rgba(16, 185, 129, 0.22)" stroke="rgba(52, 211, 153, 0.4)" stroke-width="1"/>
        <text x="160" y="96" text-anchor="middle" class="t-feature-pill">🛡️ كاشف الفيك ديفن وبصمات النسخ المعدلة</text>
      </g>
    </g>

    <!-- Side Interaction Bar (Right side, authentic TikTok) -->
    <g transform="translate(355, 300)">
      <!-- Avatar with plus badge -->
      <circle cx="24" cy="24" r="22" fill="#8b5cf6" stroke="#ffffff" stroke-width="1.5"/>
      <text x="24" y="30" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14px" font-weight="900" fill="#ffffff">FC</text>
      <circle cx="24" cy="46" r="8" fill="#fe2c55"/>
      <text x="24" y="50" text-anchor="middle" font-family="sans-serif" font-size="12px" font-weight="900" fill="#ffffff">+</text>

      <!-- Like Button & Count -->
      <g transform="translate(0, 75)">
        <circle cx="24" cy="18" r="20" fill="rgba(255, 255, 255, 0.12)"/>
        <path d="M24 25s-8-5-8-10a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 5-8 10-8 10z" fill="#fe2c55"/>
        <text x="24" y="52" text-anchor="middle" class="t-stat">342.8K</text>
      </g>

      <!-- Comment Button & Count -->
      <g transform="translate(0, 145)">
        <circle cx="24" cy="18" r="20" fill="rgba(255, 255, 255, 0.12)"/>
        <path d="M16 11h16a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-4 4v-4h-7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" fill="#ffffff"/>
        <text x="24" y="52" text-anchor="middle" class="t-stat">4,820</text>
      </g>

      <!-- Bookmark Button & Count -->
      <g transform="translate(0, 215)">
        <circle cx="24" cy="18" r="20" fill="rgba(255, 255, 255, 0.12)"/>
        <path d="M16 11h16v18l-8-5-8 5V11z" fill="#facc15"/>
        <text x="24" y="52" text-anchor="middle" class="t-stat">38.4K</text>
      </g>

      <!-- Share Button & Count -->
      <g transform="translate(0, 285)">
        <circle cx="24" cy="18" r="20" fill="rgba(255, 255, 255, 0.12)"/>
        <path d="M28 19l-8-7v5c-8 0-12 4-14 11 3-4 7-6 14-6v5l8-8z" fill="#ffffff"/>
        <text x="24" y="52" text-anchor="middle" class="t-stat">24.1K</text>
      </g>
    </g>

    <!-- Bottom Metadata & Description (RTL layout) -->
    <g transform="translate(20, 520)">
      <!-- User tag and Follow button -->
      <g>
        <text x="0" y="0" class="t-user">مجتمع FanCord الرسمي</text>
        <circle cx="152" cy="-5" r="7" fill="#38bdf8"/>
        <text x="152" y="-1" text-anchor="middle" font-size="9px" font-weight="900" fill="#ffffff">✓</text>
        <rect x="175" y="-16" width="68" height="24" rx="4" fill="url(#tt-btn-follow)"/>
        <text x="209" y="0" text-anchor="middle" font-family="'Cairo', sans-serif" font-size="12px" font-weight="800" fill="#ffffff">متابعة</text>
      </g>

      <!-- Handle -->
      <text x="0" y="22" class="t-handle">@fancord_official</text>

      <!-- Caption -->
      <text x="0" y="44" class="t-caption">تجربة تعديل FanCord الجديد لتطبيق ديسكورد 🔥</text>
      <text x="0" y="64" class="t-caption">تعريب أصيل كامل + 9 إضافات حصرية وبدون لاق!</text>
      <text x="0" y="84" class="t-caption"><tspan class="t-tag">#FanCord</tspan> <tspan class="t-tag">#ديسكورد_العربي</tspan> <tspan class="t-tag">#fyp</tspan> <tspan class="t-tag">#شروحات</tspan></text>

      <!-- Sound Tag -->
      <g transform="translate(0, 106)">
        <text x="0" y="0" fill="#ffffff" font-size="12px">🎵</text>
        <text x="18" y="0" class="t-sound">الصوت الأصلي - FanCord Community • تعديل ديسكورد 2026</text>
      </g>
    </g>

    <!-- Progress Scrubber Bar -->
    <g transform="translate(16, 666)">
      <line x1="0" y1="0" x2="388" y2="0" stroke="rgba(255, 255, 255, 0.25)" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="210" y2="0" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <circle cx="210" cy="0" r="5" fill="#ffffff"/>
    </g>
  </g>
</svg>`;
}

fs.writeFileSync('assets/preview_voice_recorder_ar.svg', generateVoiceRecorderSvg(), 'utf8');
fs.writeFileSync('assets/preview_tiktok_fancord.svg', generateTikTokViewerSvg(), 'utf8');
console.log('Generated preview_voice_recorder_ar.svg and preview_tiktok_fancord.svg successfully!');

// Generate ArabicUI Engine Preview SVG
function generateArabicUiSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="au-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
    <linearGradient id="au-btn" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="620" height="540" rx="12" fill="url(#au-bg)" stroke="#2b2d31" stroke-width="1"/>
  <!-- Header -->
  <g transform="translate(24, 28)">
    <text x="32" y="16" font-family="'Cairo', sans-serif" font-size="17px" font-weight="800" fill="#ffffff">🇸🇦 محرك التعريب الأصيل (ArabicUI Engine)</text>
    <circle cx="560" cy="10" r="14" fill="#2b2d31"/>
    <text x="560" y="15" text-anchor="middle" fill="#dbdee1" font-size="14" font-family="sans-serif">✕</text>
  </g>
  <!-- Card Status -->
  <g transform="translate(24, 68)">
    <rect x="0" y="0" width="572" height="64" rx="8" fill="#1e1f22" stroke="rgba(139, 92, 246, 0.4)" stroke-width="1"/>
    <circle cx="28" cy="24" r="6" fill="#10b981"/>
    <text x="44" y="28" font-family="'Cairo', sans-serif" font-size="14px" font-weight="800" fill="#ffffff">🟢 التعريب مفعّل بالكامل (RTL Layout Active)</text>
    <text x="44" y="48" font-family="'Cairo', sans-serif" font-size="12px" font-weight="600" fill="#949ba4">جميع القوائم، المحادثات، والإعدادات معرّبة بالكامل من اليمين لليسار.</text>
  </g>
  <!-- Settings 1: RTL Alignment -->
  <g transform="translate(24, 150)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">محاذاة الواجهة والقوائم من اليمين إلى اليسار (RTL Mode)</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">عكس هيكل ديسكورد كاملاً ليطابق لغتنا العربية مع الحفاظ على سرعة الأداء.</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Settings 2: Custom Font Selector -->
  <g transform="translate(24, 220)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">اختيار الخط العربي المفضل لواجهة ديسكورد</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">خطوط احترافية مدمجة تريح العين وتجعل قراءة الشات فخمة وواضحة.</text>
    <!-- Dropdown -->
    <rect x="0" y="50" width="572" height="40" rx="6" fill="#1e1f22" stroke="#35373c" stroke-width="1"/>
    <text x="20" y="75" font-family="'Cairo', sans-serif" font-size="13.5px" font-weight="800" fill="#c084fc">خط كايرو (Cairo Bold - الافتراضي الأجمل)</text>
    <text x="548" y="75" fill="#949ba4" font-size="12px">▼</text>
    <line x1="0" y1="104" x2="572" y2="104" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Settings 3: Plugins Localization -->
  <g transform="translate(24, 344)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">تعريب إعدادات البلوقينات التلقائي</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">ترجمة فورية لواجهات وأزرار أكثر من 490 إضافة متوافقة مع ديسكورد.</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Settings 4: Fix Numbers and Dates -->
  <g transform="translate(24, 416)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">تنسيق التواريخ والأوقات باللغة العربية</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">عرض رسائل ديسكورد بأوقات عربية دقيقة (الآن، منذ ٥ دقائق، اليوم في...).</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
  </g>
  <!-- Footer -->
  <g transform="translate(24, 488)">
    <line x1="0" y1="0" x2="572" y2="0" stroke="#232428" stroke-width="1"/>
    <text x="0" y="28" font-family="'Cairo', sans-serif" font-size="12px" fill="#80848e">FanCord ArabicUI Core Engine • v3.0</text>
    <rect x="470" y="8" width="102" height="34" rx="4" fill="url(#au-btn)"/>
    <text x="521" y="30" text-anchor="middle" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="800" fill="#ffffff">حفظ الإعدادات</text>
  </g>
</svg>`;
}

// Generate FanToolsAll Preview SVG
function generateFanToolsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="ft-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
    <linearGradient id="ft-shield" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="620" height="540" rx="12" fill="url(#ft-bg)" stroke="#2b2d31" stroke-width="1"/>
  <!-- Header -->
  <g transform="translate(24, 28)">
    <text x="32" y="16" font-family="'Cairo', sans-serif" font-size="17px" font-weight="800" fill="#ffffff">🛡️ جناح الحماية والتخفي (FanToolsAll Security Suite)</text>
    <circle cx="560" cy="10" r="14" fill="#2b2d31"/>
    <text x="560" y="15" text-anchor="middle" fill="#dbdee1" font-size="14" font-family="sans-serif">✕</text>
  </g>
  <!-- Card Status -->
  <g transform="translate(24, 68)">
    <rect x="0" y="0" width="572" height="64" rx="8" fill="#1e1f22" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
    <circle cx="28" cy="24" r="6" fill="#10b981"/>
    <text x="44" y="28" font-family="'Cairo', sans-serif" font-size="14px" font-weight="800" fill="#ffffff">🛡️ الحماية النشطة وتعتيم البصمة (Stealth Active)</text>
    <text x="44" y="48" font-family="'Cairo', sans-serif" font-size="12px" font-weight="600" fill="#949ba4">حسابك محمي بنسبة 100% ولا يمكن لأي سيرفر أو بوت كشف استخدامك لـ FanCord.</text>
  </g>
  <!-- Setting 1: Fake Deafen Detector -->
  <g transform="translate(24, 150)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">كاشف مستخدمي الفيك ديفن (Fake Deafen Detector)</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">إظهار علامة تحذير حمراء بجانب أي شخص يسمع الروم وهو يدعي الصمم (Fake Deafen).</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Setting 2: Client Mod Fingerprint Scanner -->
  <g transform="translate(24, 220)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">كاشف بصمات النسخ المعدلة للأعضاء (Mod Fingerprinting)</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">معرفة ما إذا كان العضو يستخدم نسخة معدلة أو إضافة تكشف رسائلك المحذوفة.</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Setting 3: Block Discord Tracking -->
  <g transform="translate(24, 290)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">حجب كامل لجميع نقاط تتبع ديسكورد (Anti-Telemetry)</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">منع ديسكورد من جمع بيانات نشاطك، ألعابك المفتوحة، أو مدة استخدامك للبرنامج.</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
    <line x1="0" y1="52" x2="572" y2="52" stroke="#232428" stroke-width="1"/>
  </g>
  <!-- Setting 4: Ghost Ping & Deleted Messages Alert -->
  <g transform="translate(24, 360)">
    <text x="0" y="20" font-family="'Cairo', sans-serif" font-size="14px" font-weight="700" fill="#dbdee1">تنبيه الغوست منشن والرسائل المحذوفة فورياً</text>
    <text x="0" y="38" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="500" fill="#949ba4">الاحتفاظ بالرسائل المحذوفة وتلوينها باللون الأحمر مع إظهار هوية من قام بعمل المنشن.</text>
    <rect x="522" y="10" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="559" cy="23" r="10" fill="#ffffff"/>
  </g>
  <!-- Footer -->
  <g transform="translate(24, 488)">
    <line x1="0" y1="0" x2="572" y2="0" stroke="#232428" stroke-width="1"/>
    <text x="0" y="28" font-family="'Cairo', sans-serif" font-size="12px" fill="#80848e">FanToolsAll Signature Suite • High-Grade Defense</text>
    <rect x="470" y="8" width="102" height="34" rx="4" fill="url(#ft-shield)"/>
    <text x="521" y="30" text-anchor="middle" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="800" fill="#ffffff">فحص الآن</text>
  </g>
</svg>`;
}

function generateCustomRpcSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="rpc-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
    <linearGradient id="rpc-banner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="rpc-btn" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5865f2"/>
      <stop offset="100%" stop-color="#4752c4"/>
    </linearGradient>
  </defs>
  <style>
    .title { font-family: 'Cairo', system-ui, sans-serif; font-size: 16px; font-weight: 800; fill: #ffffff; }
    .label { font-family: 'Cairo', system-ui, sans-serif; font-size: 13.5px; font-weight: 700; fill: #dbdee1; }
    .sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #949ba4; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: #a78bfa; }
    .btn-lbl { font-family: 'Cairo', system-ui, sans-serif; font-size: 13px; font-weight: 800; fill: #ffffff; }
  </style>

  <rect width="620" height="540" rx="14" fill="url(#rpc-bg)" stroke="#2b2d31" stroke-width="1.5"/>
  <rect x="0" y="0" width="620" height="130" rx="14" fill="url(#rpc-banner)"/>
  
  <circle cx="35" cy="25" r="5.5" fill="#ed4245"/>
  <circle cx="52" cy="25" r="5.5" fill="#faa81a"/>
  <circle cx="69" cy="25" r="5.5" fill="#3ba55d"/>
  <text x="580" y="29" text-anchor="end" fill="#ffffff" font-family="'Cairo', sans-serif" font-size="13px" font-weight="800">حالة النشاط المخصصة · CustomRPC</text>

  <g transform="translate(40, 95)">
    <circle cx="42" cy="42" r="42" fill="#111214"/>
    <circle cx="42" cy="42" r="38" fill="#5865f2"/>
    <text x="42" y="49" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="24px" font-weight="900">FC</text>
    <circle cx="68" cy="68" r="10" fill="#23a55a" stroke="#111214" stroke-width="3"/>
  </g>

  <g transform="translate(140, 145)">
    <text x="0" y="16" class="title">FanCord User <tspan fill="#a855f7" font-size="12px">[VIP MEMBER]</tspan></text>
    <text x="0" y="34" class="sub">fancord_pro · الإصدار 3.0 المستقر</text>
  </g>

  <g transform="translate(30, 205)">
    <rect width="560" height="295" rx="10" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <text x="20" y="32" fill="#b5bac1" font-family="'Cairo', sans-serif" font-size="11.5px" font-weight="800">يلعب الآن (PLAYING A GAME)</text>
    
    <g transform="translate(20, 50)">
      <rect width="80" height="80" rx="16" fill="#2b2d31" stroke="#5865f2" stroke-width="1.5"/>
      <circle cx="40" cy="40" r="26" fill="#7c3aed"/>
      <text x="40" y="47" text-anchor="middle" fill="#ffffff" font-size="20px" font-weight="900">⚡</text>
      <circle cx="70" cy="70" r="12" fill="#23a55a" stroke="#1e1f22" stroke-width="2"/>
      <text x="70" y="75" text-anchor="middle" fill="#ffffff" font-size="11px">✓</text>
    </g>

    <g transform="translate(115, 66)">
      <text x="0" y="10" class="title" fill="#ffffff">FanCord 2026 Pro Edition</text>
      <text x="0" y="30" class="label" fill="#dbdee1">يتصفح ديسكورد المعرّب مع 8 إضافات حصرية</text>
      <text x="0" y="50" class="sub">في روم صوتي: 📢 عام 1 (Public Voice)</text>
      <text x="0" y="68" class="mono">⏱️ مضى على التشغيل: 02:45:18</text>
    </g>

    <g transform="translate(20, 155)">
      <rect width="520" height="42" rx="6" fill="url(#rpc-btn)"/>
      <text x="260" y="26" text-anchor="middle" class="btn-lbl">🌐 زيارة الموقع الرسمي وتحميل FanCord</text>
    </g>
    <g transform="translate(20, 206)">
      <rect width="520" height="42" rx="6" fill="#2b2d31" stroke="#3b3e45" stroke-width="1"/>
      <text x="260" y="26" text-anchor="middle" class="btn-lbl" fill="#dbdee1">✨ تصفح قائمة الـ 494 إضافة معتمدة</text>
    </g>
    <g transform="translate(20, 262)">
      <text x="260" y="14" text-anchor="middle" fill="#80848e" font-family="'Cairo', sans-serif" font-size="11px">⚡ يتم تحديث النشاط آنياً في ديسكورد بدون أي برامج خارجية</text>
    </g>
  </g>
</svg>`;
}

function generateVoiceLoggerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="vl-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
  </defs>
  <style>
    .title { font-family: 'Cairo', system-ui, sans-serif; font-size: 16px; font-weight: 800; fill: #ffffff; }
    .label { font-family: 'Cairo', system-ui, sans-serif; font-size: 13.5px; font-weight: 700; fill: #dbdee1; }
    .sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #949ba4; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; }
  </style>

  <rect width="620" height="540" rx="14" fill="url(#vl-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <g transform="translate(24, 25)">
    <circle cx="10" cy="10" r="5.5" fill="#ed4245"/>
    <circle cx="26" cy="10" r="5.5" fill="#faa81a"/>
    <circle cx="42" cy="10" r="5.5" fill="#3ba55d"/>
    <text x="65" y="16" class="title">🎙️ سجل الرومات الصوتية (VoiceLogger)</text>
    <rect x="440" y="-2" width="128" height="26" rx="13" fill="rgba(35,165,90,0.18)" stroke="#23a55a" stroke-width="1"/>
    <circle cx="452" cy="11" r="4" fill="#23a55a"/>
    <text x="516" y="15" text-anchor="middle" fill="#4ade80" font-family="'Cairo', sans-serif" font-size="11px" font-weight="800">التسجيل الحي مفعّل</text>
  </g>

  <g transform="translate(24, 65)">
    <rect x="0" y="0" width="85" height="28" rx="6" fill="#5865f2"/>
    <text x="42" y="18" text-anchor="middle" fill="#ffffff" font-family="'Cairo', sans-serif" font-size="12px" font-weight="700">الكل (34)</text>

    <rect x="95" y="0" width="95" height="28" rx="6" fill="#2b2d31"/>
    <text x="142" y="18" text-anchor="middle" fill="#b5bac1" font-family="'Cairo', sans-serif" font-size="12px" font-weight="700">دخول الروم (18)</text>

    <rect x="200" y="0" width="95" height="28" rx="6" fill="#2b2d31"/>
    <text x="247" y="18" text-anchor="middle" fill="#b5bac1" font-family="'Cairo', sans-serif" font-size="12px" font-weight="700">انتقال روم (10)</text>

    <rect x="305" y="0" width="95" height="28" rx="6" fill="#2b2d31"/>
    <text x="352" y="18" text-anchor="middle" fill="#b5bac1" font-family="'Cairo', sans-serif" font-size="12px" font-weight="700">مغادرة (6)</text>
  </g>

  <g transform="translate(24, 115)">
    <rect width="572" height="72" rx="8" fill="#1e1f22" stroke="rgba(35, 165, 90, 0.4)" stroke-width="1"/>
    <circle cx="24" cy="24" r="12" fill="rgba(35,165,90,0.2)"/>
    <text x="24" y="29" text-anchor="middle" fill="#23a55a" font-size="13px">🟢</text>
    <text x="48" y="26" class="label">انضمام إلى الروم الصوتي</text>
    <text x="48" y="48" class="sub">دخل <tspan fill="#5865f2" font-weight="800">أحمد (Ahmed#001)</tspan> إلى الروم: <tspan fill="#c084fc">📢 عام 1 (Public 1)</tspan></text>
    <text x="550" y="26" text-anchor="end" class="mono" fill="#4ade80">14:32:04</text>
    <text x="550" y="48" text-anchor="end" class="sub" font-size="11px">قبل دقيقة واحدة</text>
  </g>

  <g transform="translate(24, 198)">
    <rect width="572" height="72" rx="8" fill="#1e1f22" stroke="rgba(88, 101, 242, 0.35)" stroke-width="1"/>
    <circle cx="24" cy="24" r="12" fill="rgba(88,101,242,0.2)"/>
    <text x="24" y="29" text-anchor="middle" fill="#5865f2" font-size="13px">🔄</text>
    <text x="48" y="26" class="label">انتقال بين الرومات</text>
    <text x="48" y="48" class="sub">انتقل <tspan fill="#ec4899" font-weight="800">سلطان (Sultan)</tspan> من <tspan fill="#94a3b8">📢 عام 1</tspan> إلى <tspan fill="#a855f7">🎮 رومات الألعاب</tspan></text>
    <text x="550" y="26" text-anchor="end" class="mono" fill="#a78bfa">14:28:15</text>
    <text x="550" y="48" text-anchor="end" class="sub" font-size="11px">قبل 5 دقائق</text>
  </g>

  <g transform="translate(24, 281)">
    <rect width="572" height="72" rx="8" fill="#1e1f22" stroke="rgba(237, 66, 69, 0.3)" stroke-width="1"/>
    <circle cx="24" cy="24" r="12" fill="rgba(237,66,69,0.2)"/>
    <text x="24" y="29" text-anchor="middle" fill="#ed4245" font-size="13px">🔴</text>
    <text x="48" y="26" class="label">مغادرة الروم</text>
    <text x="48" y="48" class="sub">غادر <tspan fill="#dbdee1" font-weight="800">فهد (Fahad_99)</tspan> الروم الصوتي <tspan fill="#94a3b8">📢 عام 1</tspan> (قضى: 1 ساعة و 12 دقيقة)</text>
    <text x="550" y="26" text-anchor="end" class="mono" fill="#f87171">14:15:50</text>
    <text x="550" y="48" text-anchor="end" class="sub" font-size="11px">قبل 17 دقيقة</text>
  </g>

  <g transform="translate(24, 364)">
    <rect width="572" height="72" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <circle cx="24" cy="24" r="12" fill="rgba(250,168,26,0.2)"/>
    <text x="24" y="29" text-anchor="middle" fill="#faa81a" font-size="13px">🔇</text>
    <text x="48" y="26" class="label">تغيير حالة الصوت</text>
    <text x="48" y="48" class="sub">قام <tspan fill="#38bdf8" font-weight="800">خالد (Khalid)</tspan> بكتم المايك في الروم <tspan fill="#94a3b8">📢 عام 2</tspan></text>
    <text x="550" y="26" text-anchor="end" class="mono" fill="#fde047">14:02:11</text>
    <text x="550" y="48" text-anchor="end" class="sub" font-size="11px">قبل 30 دقيقة</text>
  </g>

  <g transform="translate(24, 460)">
    <rect width="572" height="44" rx="8" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="20" y="27" fill="#dbdee1" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="700">💾 حفظ وتصدير السجل الكامل بصيغة TXT أو JSON بنقرة واحدة</text>
    <rect x="440" y="8" width="115" height="28" rx="6" fill="#5865f2"/>
    <text x="497" y="26" text-anchor="middle" fill="#ffffff" font-family="'Cairo', sans-serif" font-size="12px" font-weight="800">تصدير الآن</text>
  </g>
</svg>`;
}

function generateQuestifySvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="q-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
    <linearGradient id="q-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="q-bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#4ade80"/>
    </linearGradient>
  </defs>
  <style>
    .title { font-family: 'Cairo', system-ui, sans-serif; font-size: 16px; font-weight: 800; fill: #ffffff; }
    .label { font-family: 'Cairo', system-ui, sans-serif; font-size: 14px; font-weight: 800; fill: #ffffff; }
    .sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #949ba4; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; font-weight: 700; fill: #4ade80; }
  </style>

  <rect width="620" height="540" rx="14" fill="url(#q-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <g transform="translate(24, 25)">
    <circle cx="10" cy="10" r="5.5" fill="#ed4245"/>
    <circle cx="26" cy="10" r="5.5" fill="#faa81a"/>
    <circle cx="42" cy="10" r="5.5" fill="#3ba55d"/>
    <text x="65" y="16" class="title">🎯 مساعد مهام ديسكورد التلقائي · Questify</text>
  </g>

  <g transform="translate(24, 65)">
    <rect width="572" height="78" rx="10" fill="url(#q-grad)"/>
    <text x="20" y="30" fill="#ffffff" font-family="'Cairo', sans-serif" font-size="16px" font-weight="900">أكمل مهام Discord Quests تلقائياً بنقرة زر!</text>
    <text x="20" y="54" fill="rgba(255,255,255,0.9)" font-family="'Cairo', sans-serif" font-size="12.5px" font-weight="600">محاكاة ذكية للعبة والبث الصوتي بالخلفية بدون الحاجة لتحميل الألعاب أو فتحها.</text>
  </g>

  <g transform="translate(24, 160)">
    <rect width="572" height="96" rx="8" fill="#1e1f22" stroke="rgba(74, 222, 128, 0.45)" stroke-width="1"/>
    <rect x="16" y="16" width="52" height="52" rx="12" fill="#2b2d31"/>
    <text x="42" y="47" text-anchor="middle" font-size="24px">🎮</text>
    
    <g transform="translate(80, 20)">
      <text x="0" y="14" class="label">مهمة لعبة Genshin Impact · العب لمدة 15 دقيقة</text>
      <text x="0" y="34" class="sub">المكافأة: صندوق مكافآت داخل اللعبة + شارة بروفايل حصرية</text>
      <rect x="0" y="42" width="350" height="8" rx="4" fill="#2b2d31"/>
      <rect x="0" y="42" width="350" height="8" rx="4" fill="url(#q-bar)"/>
    </g>

    <g transform="translate(450, 28)">
      <rect width="106" height="36" rx="6" fill="#23a55a"/>
      <text x="53" y="23" text-anchor="middle" fill="#ffffff" font-family="'Cairo', sans-serif" font-size="12px" font-weight="800">✓ مكتملة 100%</text>
    </g>
  </g>

  <g transform="translate(24, 272)">
    <rect width="572" height="96" rx="8" fill="#1e1f22" stroke="rgba(139, 92, 246, 0.45)" stroke-width="1"/>
    <rect x="16" y="16" width="52" height="52" rx="12" fill="#2b2d31"/>
    <text x="42" y="47" text-anchor="middle" font-size="24px">📺</text>
    
    <g transform="translate(80, 20)">
      <text x="0" y="14" class="label">مهمة بث الشاشة · شارك اللعب مع صديق لمدة 15 دقيقة</text>
      <text x="0" y="34" class="sub">المكافأة: إطار أفتار خاص + اشتراك شهر تجريبي</text>
      <rect x="0" y="42" width="350" height="8" rx="4" fill="#2b2d31"/>
      <rect x="0" y="42" width="295" height="8" rx="4" fill="#8b5cf6"/>
    </g>

    <g transform="translate(450, 28)">
      <rect width="106" height="36" rx="6" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="1"/>
      <text x="53" y="23" text-anchor="middle" fill="#c084fc" font-family="'Cairo', sans-serif" font-size="12px" font-weight="800">⚡ جارٍ الإكمال 85%</text>
    </g>
  </g>

  <g transform="translate(24, 385)">
    <rect width="572" height="125" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <g transform="translate(20, 16)">
      <text x="0" y="18" class="label" font-size="13px">استلام المكافآت تلقائياً فور انتهاء المهمة (Auto Claim)</text>
      <rect x="480" y="5" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="515" cy="16" r="8" fill="#ffffff"/>
    </g>

    <line x1="20" y1="62" x2="552" y2="62" stroke="#2b2d31" stroke-width="1"/>

    <g transform="translate(20, 75)">
      <text x="0" y="18" class="label" font-size="13px">محاكاة البث بدون استهلاك كرت الشاشة والمعالج (Stealth Stream)</text>
      <rect x="480" y="5" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="515" cy="16" r="8" fill="#ffffff"/>
    </g>
  </g>
</svg>`;
}

function generateFastPingSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 540" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="fp-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18191c"/>
      <stop offset="100%" stop-color="#111214"/>
    </linearGradient>
  </defs>
  <style>
    .title { font-family: 'Cairo', system-ui, sans-serif; font-size: 16px; font-weight: 800; fill: #ffffff; }
    .label { font-family: 'Cairo', system-ui, sans-serif; font-size: 13.5px; font-weight: 700; fill: #dbdee1; }
    .sub { font-family: 'Cairo', system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #949ba4; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; }
  </style>

  <rect width="620" height="540" rx="14" fill="url(#fp-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <g transform="translate(24, 25)">
    <circle cx="10" cy="10" r="5.5" fill="#ed4245"/>
    <circle cx="26" cy="10" r="5.5" fill="#faa81a"/>
    <circle cx="42" cy="10" r="5.5" fill="#3ba55d"/>
    <text x="65" y="16" class="title">⚡ المنشن السريع ومكافحة القوست بينق · FastPing</text>
  </g>

  <g transform="translate(24, 65)">
    <rect width="176" height="95" rx="8" fill="#1e1f22" stroke="rgba(74, 222, 128, 0.4)" stroke-width="1"/>
    <text x="20" y="28" class="sub">سرعة الاستجابة (Ping)</text>
    <text x="20" y="65" class="mono" fill="#4ade80" font-size="24px">12 ms</text>
    <text x="20" y="82" fill="#86efac" font-family="'Cairo', sans-serif" font-size="11px">🚀 اتصال فائق السرعة</text>

    <rect x="196" y="0" width="180" height="95" rx="8" fill="#1e1f22" stroke="rgba(139, 92, 246, 0.4)" stroke-width="1"/>
    <text x="216" y="28" class="sub">منشنات تم حفظها</text>
    <text x="216" y="65" class="mono" fill="#c084fc" font-size="24px">18 تنبيه</text>
    <text x="216" y="82" fill="#d8b4fe" font-family="'Cairo', sans-serif" font-size="11px">🛡️ مضاد القوست بينق مفعّل</text>

    <rect x="396" y="0" width="176" height="95" rx="8" fill="#1e1f22" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1"/>
    <text x="416" y="28" class="sub">إكمال المنشن الذكي</text>
    <text x="416" y="65" class="mono" fill="#38bdf8" font-size="24px">0.02s</text>
    <text x="416" y="82" fill="#7dd3fc" font-family="'Cairo', sans-serif" font-size="11px">⚡ اختصارات سريعة</text>
  </g>

  <g transform="translate(24, 180)">
    <rect width="572" height="90" rx="8" fill="#1e1f22" stroke="rgba(237, 66, 69, 0.45)" stroke-width="1"/>
    <circle cx="24" cy="26" r="12" fill="rgba(237,66,69,0.2)"/>
    <text x="24" y="31" text-anchor="middle" fill="#ed4245" font-size="13px">⚠️</text>
    <text x="48" y="28" class="label" fill="#f87171">كشف منشن محذوف (Ghost Ping Detected!)</text>
    <text x="48" y="50" class="sub">قام <tspan fill="#ffffff" font-weight="800">Tariq_Pro</tspan> بمنشنك ثم حذف الرسالة فوراً:</text>
    <text x="48" y="72" fill="#fca5a5" font-family="'Cairo', sans-serif" font-size="12px" font-weight="700">« @User هل أنت موجود في الروم الصوتي؟ »</text>
    <text x="550" y="28" text-anchor="end" class="mono" fill="#949ba4">منذ 3 دقائق</text>
  </g>

  <g transform="translate(24, 290)">
    <rect width="572" height="225" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <g transform="translate(20, 18)">
      <text x="0" y="18" class="label">تنبيه فوري عند قيام أي شخص بعمل Ghost Ping وحذف الرسالة</text>
      <text x="0" y="36" class="sub">يظهر تنبيهاً ثابتاً يعرض محتوى الرسالة المحذوفة والشخص الذي قام بها.</text>
      <rect x="480" y="10" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="515" cy="21" r="8" fill="#ffffff"/>
    </g>

    <line x1="20" y1="70" x2="552" y2="70" stroke="#2b2d31" stroke-width="1"/>

    <g transform="translate(20, 88)">
      <text x="0" y="18" class="label">المنشن السريع بزر اختصار مخصص (Quick Mention Wheel)</text>
      <text x="0" y="36" class="sub">عجلة ذكية للاختيار السريع للأعضاء والرتب الأكثر تواصلاً معك.</text>
      <rect x="480" y="10" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="515" cy="21" r="8" fill="#ffffff"/>
    </g>

    <line x1="20" y1="142" x2="552" y2="142" stroke="#2b2d31" stroke-width="1"/>

    <g transform="translate(20, 160)">
      <text x="0" y="18" class="label">عرض الـ Ping الدقيق بالمللي ثانية في الشريط السفلي لديسكورد</text>
      <text x="0" y="36" class="sub">متابعة مستمرة لاستقرار اتصالك بالسيرفرات الصوتية.</text>
      <rect x="480" y="10" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="515" cy="21" r="8" fill="#ffffff"/>
    </g>
  </g>
</svg>`;
}

fs.writeFileSync('assets/preview_arabic_ui.svg', generateArabicUiSvg(), 'utf8');
fs.writeFileSync('assets/preview_fantools.svg', generateFanToolsSvg(), 'utf8');
fs.writeFileSync('assets/preview_custom_rpc.svg', generateCustomRpcSvg(), 'utf8');
fs.writeFileSync('assets/preview_voice_logger.svg', generateVoiceLoggerSvg(), 'utf8');
fs.writeFileSync('assets/preview_questify.svg', generateQuestifySvg(), 'utf8');
fs.writeFileSync('assets/preview_fast_ping.svg', generateFastPingSvg(), 'utf8');
console.log('All 8 exclusive SVGs generated successfully!');

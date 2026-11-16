const fs = require('fs');

// Common CSS and Fonts definition for all preview SVGs
const commonStyle = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&amp;family=JetBrains+Mono:wght@700&amp;display=swap');
    text { font-family: 'Cairo', system-ui, -apple-system, sans-serif; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .title { font-size: 15px; font-weight: 800; fill: #ffffff; }
    .sub { font-size: 11.5px; font-weight: 600; fill: #949ba4; }
    .label { font-size: 13px; font-weight: 700; fill: #dbdee1; }
    .btn-lbl { font-size: 12.5px; font-weight: 800; fill: #ffffff; }
  </style>
`;

// 1. ArabicUI Engine Preview
function getArabicUiSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="au-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
    <linearGradient id="au-active" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#au-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🌐 محرك التعريب الأصيل · ArabicUI Engine</text>
    <rect x="420" y="-4" width="160" height="26" rx="13" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1"/>
    <circle cx="434" cy="9" r="4" fill="#22c55e"/>
    <text x="504" y="13" text-anchor="middle" fill="#4ade80" font-size="11px" font-weight="800">تعريب RTL نشط 100%</text>
  </g>

  <!-- Setting 1: RTL Toggle -->
  <g transform="translate(20, 68)">
    <rect width="580" height="66" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="27" class="label">تفعيل اتجاه الواجهة من اليمين إلى اليسار (RTL Layout)</text>
    <text x="20" y="47" class="sub">قلب القوائم والشات وأشرطة السيرفرات لتلائم القراءة العربية بانسيابية تامة.</text>
    <rect x="510" y="20" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="33" r="10" fill="#ffffff"/>
  </g>

  <!-- Setting 2: Arabic Font Switcher -->
  <g transform="translate(20, 146)">
    <rect width="580" height="66" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="27" class="label">الخط العربي الافتراضي (Curated Typography)</text>
    <text x="20" y="47" class="sub">دمج خطوط Cairo و Tajawal و Almarai بدون تحميل خارجي.</text>
    <rect x="360" y="17" width="200" height="32" rx="6" fill="#2b2d31" stroke="#3b3e45" stroke-width="1"/>
    <text x="450" y="38" text-anchor="middle" fill="#ffffff" font-size="12px" font-weight="700">Cairo Pro [موصى به] ▾</text>
  </g>

  <!-- Setting 3: Plugins Localizer -->
  <g transform="translate(20, 224)">
    <rect width="580" height="66" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="27" class="label">تعريب إعدادات وبنرات الإضافات بالكامل</text>
    <text x="20" y="47" class="sub">ترجمة تلقائية لجميع نصوص وإعدادات إضافات ديسكورد الـ 494 إلى العربية.</text>
    <rect x="510" y="20" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="33" r="10" fill="#ffffff"/>
  </g>

  <!-- Bottom Guarantee -->
  <g transform="translate(20, 305)">
    <rect width="580" height="72" rx="8" fill="rgba(88,101,242,0.1)" stroke="rgba(88,101,242,0.3)" stroke-width="1"/>
    <text x="20" y="32" fill="#5865f2" font-size="13px" font-weight="800">⚡ صفر تكلفة تشغيل وصفر استهلاك إضافي للرام والمعالج</text>
    <text x="20" y="52" class="sub" font-size="11.5px">يعتمد محرّك التعريب على استبدال جدول نصوص ديسكورد المصرّفة محلياً داخل التطبيق.</text>
  </g>
</svg>`;
}

// 2. CustomRPC Preview
function getCustomRpcSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="cr-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
    <linearGradient id="cr-banner" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="cr-btn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5865f2"/>
      <stop offset="100%" stop-color="#4752c4"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#cr-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Profile Banner -->
  <rect x="0" y="0" width="620" height="85" rx="12" fill="url(#cr-banner)"/>
  <rect x="0" y="65" width="620" height="20" fill="url(#cr-banner)"/>

  <!-- Window Dots -->
  <g transform="translate(20, 20)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="580" y="13" text-anchor="end" fill="#ffffff" font-size="13px" font-weight="800">حالة النشاط المخصصة · CustomRPC</text>
  </g>

  <!-- Avatar & User Info -->
  <g transform="translate(30, 60)">
    <circle cx="34" cy="34" r="34" fill="#111214"/>
    <circle cx="34" cy="34" r="30" fill="#7c3aed"/>
    <text x="34" y="42" text-anchor="middle" fill="#ffffff" font-size="18px" font-weight="900">FC</text>
    <circle cx="54" cy="54" r="8" fill="#23a55a" stroke="#111214" stroke-width="2.5"/>
  </g>

  <g transform="translate(115, 96)">
    <text x="0" y="14" class="title">FanCord Official <tspan fill="#a855f7" font-size="11px">[VIP MOD]</tspan></text>
    <text x="0" y="30" class="sub">@fancord_user · ديسكورد المعرّب الأقوى</text>
  </g>

  <!-- Discord Activity Card -->
  <g transform="translate(20, 142)">
    <rect width="580" height="238" rx="10" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <text x="20" y="26" fill="#b5bac1" font-size="11px" font-weight="800">يلعب الآن (PLAYING A GAME)</text>

    <!-- Game Icon with Verified Check -->
    <g transform="translate(20, 42)">
      <rect width="68" height="68" rx="14" fill="#2b2d31" stroke="#5865f2" stroke-width="1.5"/>
      <circle cx="34" cy="34" r="20" fill="#8b5cf6"/>
      <text x="34" y="41" text-anchor="middle" fill="#ffffff" font-size="16px">⚡</text>
      <circle cx="58" cy="58" r="10" fill="#23a55a" stroke="#1e1f22" stroke-width="2"/>
      <text x="58" y="62" text-anchor="middle" fill="#ffffff" font-size="9px">✓</text>
    </g>

    <g transform="translate(104, 56)">
      <text x="0" y="10" class="title" font-size="15px">FanCord 2026 Pro Edition</text>
      <text x="0" y="28" class="label" font-size="12.5px">يتصفح ديسكورد المعرّب مع 8 إضافات حصرية</text>
      <text x="0" y="46" class="sub">في روم صوتي: 📢 عام 1 (Public Voice)</text>
      <text x="0" y="62" class="mono" fill="#a78bfa" font-size="11px">⏱️ الوقت المنقضي: 01:42:08</text>
    </g>

    <!-- Custom RPC Interactive Buttons -->
    <g transform="translate(20, 126)">
      <rect width="540" height="38" rx="6" fill="url(#cr-btn)"/>
      <text x="270" y="24" text-anchor="middle" class="btn-lbl">🌐 زيارة الموقع الرسمي وتحميل FanCord</text>
    </g>
    <g transform="translate(20, 172)">
      <rect width="540" height="38" rx="6" fill="#2b2d31" stroke="#3b3e45" stroke-width="1"/>
      <text x="270" y="24" text-anchor="middle" class="btn-lbl" fill="#dbdee1">✨ تصفح دليل الـ 494 إضافة معتمدة</text>
    </g>
    <g transform="translate(20, 224)">
      <text x="270" y="0" text-anchor="middle" fill="#80848e" font-size="10.5px">⚡ يتم تحديث النشاط آنياً في ديسكورد ويظهر لجميع أصدقائك بالسيرفرات</text>
    </g>
  </g>
</svg>`;
}

// 3. FanToolsAll Security Suite Preview
function getFanToolsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="ft-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#ft-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🛡️ جناح الحماية والتخفي · FanToolsAll Security Suite</text>
  </g>

  <!-- Card Status -->
  <g transform="translate(20, 56)">
    <rect width="580" height="52" rx="8" fill="#1e1f22" stroke="rgba(16,185,129,0.4)" stroke-width="1"/>
    <circle cx="24" cy="26" r="6" fill="#10b981"/>
    <text x="40" y="24" fill="#ffffff" font-size="13px" font-weight="800">🛡️ الحماية النشطة وتعتيم البصمة (Stealth Active 100%)</text>
    <text x="40" y="42" class="sub" font-size="11px">حسابك محمي بنسبة 100% ولا يمكن لأي سيرفر أو بوت كشف استخدامك لـ FanCord.</text>
  </g>

  <!-- Setting 1: Fake Deafen -->
  <g transform="translate(20, 118)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="25" class="label">كاشف مستخدمي الفيك ديفن (Fake Deafen Detector)</text>
    <text x="20" y="45" class="sub">إظهار علامة تحذير حمراء بجانب أي شخص يسمع الروم وهو يدعي الصمم (Fake Deafen).</text>
    <rect x="510" y="17" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="30" r="10" fill="#ffffff"/>
  </g>

  <!-- Setting 2: Mod Fingerprinting -->
  <g transform="translate(20, 188)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="25" class="label">كاشف بصمات النسخ المعدلة للأعضاء (Mod Fingerprinting)</text>
    <text x="20" y="45" class="sub">معرفة ما إذا كان العضو يستخدم نسخة معدلة أو إضافة تكشف رسائلك المحذوفة.</text>
    <rect x="510" y="17" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="30" r="10" fill="#ffffff"/>
  </g>

  <!-- Setting 3: Anti-Telemetry -->
  <g transform="translate(20, 258)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="25" class="label">حجب كامل لنقاط تتبع ديسكورد (Anti-Telemetry Shield)</text>
    <text x="20" y="45" class="sub">منع ديسكورد من جمع بيانات نشاطك، ألعابك المفتوحة، أو مدة استخدامك للبرنامج.</text>
    <rect x="510" y="17" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="30" r="10" fill="#ffffff"/>
  </g>

  <!-- Bottom Footer -->
  <g transform="translate(20, 330)">
    <rect width="580" height="52" rx="8" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="20" y="31" fill="#dbdee1" font-size="12px" font-weight="700">🔒 تم فحص ومطابقة 6 محاور حماية بروتوكولية وصوتية حتمية بنجاح</text>
    <rect x="470" y="11" width="95" height="30" rx="6" fill="#10b981"/>
    <text x="517" y="31" text-anchor="middle" fill="#ffffff" font-size="11.5px" font-weight="800">فحص الآن</text>
  </g>
</svg>`;
}

// 4. FastPing & Anti-Ghost Ping Preview
function getFastPingSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="fp-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#fp-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">⚡ المنشن السريع ومكافحة القوست بينق · FastPing</text>
  </g>

  <!-- Ping Metric Cards -->
  <g transform="translate(20, 56)">
    <rect width="180" height="78" rx="8" fill="#1e1f22" stroke="rgba(74,222,128,0.4)" stroke-width="1"/>
    <text x="18" y="24" class="sub">سرعة الاستجابة (Ping)</text>
    <text x="18" y="55" class="mono" fill="#4ade80" font-size="22px">12 ms</text>
    <text x="18" y="70" fill="#86efac" font-size="10px">🚀 اتصال فائق السرعة</text>

    <rect x="200" y="0" width="180" height="78" rx="8" fill="#1e1f22" stroke="rgba(192,132,252,0.4)" stroke-width="1"/>
    <text x="218" y="24" class="sub">منشنات محذوفة تم حفظها</text>
    <text x="218" y="55" class="mono" fill="#c084fc" font-size="22px">18 تنبيه</text>
    <text x="218" y="70" fill="#d8b4fe" font-size="10px">🛡️ مضاد القوست مفعّل</text>

    <rect x="400" y="0" width="180" height="78" rx="8" fill="#1e1f22" stroke="rgba(56,189,248,0.4)" stroke-width="1"/>
    <text x="418" y="24" class="sub">إكمال المنشن الذكي</text>
    <text x="418" y="55" class="mono" fill="#38bdf8" font-size="22px">0.02s</text>
    <text x="418" y="70" fill="#7dd3fc" font-size="10px">⚡ اختصار نقر مزدوج</text>
  </g>

  <!-- Ghost Ping Alert Banner -->
  <g transform="translate(20, 146)">
    <rect width="580" height="72" rx="8" fill="#1e1f22" stroke="rgba(237,66,69,0.5)" stroke-width="1"/>
    <circle cx="24" cy="24" r="10" fill="rgba(237,66,69,0.2)"/>
    <text x="24" y="28" text-anchor="middle" fill="#ed4245" font-size="12px">⚠️</text>
    <text x="44" y="25" class="label" fill="#f87171">كشف منشن محذوف (Ghost Ping Detected!)</text>
    <text x="44" y="44" class="sub">قام <tspan fill="#ffffff" font-weight="800">Tariq_Pro</tspan> بمنشنك ثم حذف الرسالة فوراً:</text>
    <text x="44" y="62" fill="#fca5a5" font-size="12px" font-weight="700">« @User هل أنت موجود في الروم الصوتي؟ »</text>
    <text x="560" y="25" text-anchor="end" class="mono" fill="#949ba4" font-size="11px">منذ دقيقتين</text>
  </g>

  <!-- Fast Ping Features -->
  <g transform="translate(20, 230)">
    <rect width="580" height="66" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="27" class="label">تحويل المعرّف (User ID) إلى إشارة منشن بنقرتين</text>
    <text x="20" y="47" class="sub">انقر مرتين على أي ID في الشات ليتم نسخه وتضمينه تلقائياً كمنشن قابل للضغط.</text>
    <rect x="510" y="20" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="33" r="10" fill="#ffffff"/>
  </g>

  <g transform="translate(20, 308)">
    <rect width="580" height="72" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="28" class="label">عرض الـ Ping الدقيق بالمللي ثانية في الشريط السفلي لديسكورد</text>
    <text x="20" y="48" class="sub">متابعة مستمرة لاستقرار اتصالك بالسيرفرات الصوتية مع تنبيهات عند حدوث Packet Loss.</text>
    <rect x="510" y="23" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="36" r="10" fill="#ffffff"/>
  </g>
</svg>`;
}

// 5. Questify Auto-Completer Preview
function getQuestifySvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="qu-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
    <linearGradient id="qu-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="qu-bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#4ade80"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#qu-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🎯 مساعد مهام ديسكورد التلقائي · Questify</text>
  </g>

  <!-- Banner -->
  <g transform="translate(20, 56)">
    <rect width="580" height="64" rx="8" fill="url(#qu-grad)"/>
    <text x="20" y="27" fill="#ffffff" font-size="15px" font-weight="900">أكمل مهام Discord Quests تلقائياً بنقرة زر!</text>
    <text x="20" y="47" fill="rgba(255,255,255,0.9)" font-size="11.5px" font-weight="600">محاكاة ذكية للعبة والبث الصوتي بالخلفية بدون الحاجة لتحميل الألعاب أو فتحها.</text>
  </g>

  <!-- Quest 1 -->
  <g transform="translate(20, 132)">
    <rect width="580" height="74" rx="8" fill="#1e1f22" stroke="rgba(74,222,128,0.4)" stroke-width="1"/>
    <rect x="14" y="14" width="46" height="46" rx="10" fill="#2b2d31"/>
    <text x="37" y="42" text-anchor="middle" font-size="20px">🎮</text>
    
    <g transform="translate(70, 16)">
      <text x="0" y="14" class="label" font-size="13px">مهمة لعبة Genshin Impact · العب لمدة 15 دقيقة</text>
      <text x="0" y="32" class="sub" font-size="11px">المكافأة: صندوق مكافآت داخل اللعبة + شارة بروفايل حصرية</text>
      <rect x="0" y="40" width="370" height="7" rx="3.5" fill="#2b2d31"/>
      <rect x="0" y="40" width="370" height="7" rx="3.5" fill="url(#qu-bar)"/>
    </g>

    <g transform="translate(460, 22)">
      <rect width="105" height="32" rx="6" fill="#23a55a"/>
      <text x="52" y="21" text-anchor="middle" fill="#ffffff" font-size="11.5px" font-weight="800">✓ مكتملة 100%</text>
    </g>
  </g>

  <!-- Quest 2 -->
  <g transform="translate(20, 218)">
    <rect width="580" height="74" rx="8" fill="#1e1f22" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
    <rect x="14" y="14" width="46" height="46" rx="10" fill="#2b2d31"/>
    <text x="37" y="42" text-anchor="middle" font-size="20px">📺</text>
    
    <g transform="translate(70, 16)">
      <text x="0" y="14" class="label" font-size="13px">مهمة بث الشاشة · شارك اللعب مع صديق لمدة 15 دقيقة</text>
      <text x="0" y="32" class="sub" font-size="11px">المكافأة: إطار أفتار خاص + شهر ديسكورد تجريبي</text>
      <rect x="0" y="40" width="370" height="7" rx="3.5" fill="#2b2d31"/>
      <rect x="0" y="40" width="310" height="7" rx="3.5" fill="#8b5cf6"/>
    </g>

    <g transform="translate(460, 22)">
      <rect width="105" height="32" rx="6" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="1"/>
      <text x="52" y="21" text-anchor="middle" fill="#c084fc" font-size="11.5px" font-weight="800">⚡ جارٍ الإكمال 85%</text>
    </g>
  </g>

  <!-- Auto Claim Toggle -->
  <g transform="translate(20, 304)">
    <rect width="580" height="76" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="28" class="label">استلام المكافآت التلقائي (Auto Claim Rewards)</text>
    <text x="20" y="48" class="sub">إضافة الجوائز والأكواد تلقائياً إلى حسابك فور انتهاء عداد المهمة دون الحاجة لفتح المتصفح.</text>
    <rect x="510" y="24" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="37" r="10" fill="#ffffff"/>
  </g>
</svg>`;
}

// 6. TikTok Viewer Preview (Animated Vertical Reel Showcasing Exclusive FanCord Plugins)
function getTikTokSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="tk-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
    <linearGradient id="tk-pink" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fe2c55"/>
      <stop offset="100%" stop-color="#ff0050"/>
    </linearGradient>

    <!-- Clip 1 Gradient (ArabicUI) -->
    <linearGradient id="tk-c1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e103d"/>
      <stop offset="50%" stop-color="#110825"/>
      <stop offset="100%" stop-color="#06020f"/>
    </linearGradient>

    <!-- Clip 2 Gradient (VoicePing) -->
    <linearGradient id="tk-c2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a2a1a"/>
      <stop offset="50%" stop-color="#05160d"/>
      <stop offset="100%" stop-color="#020804"/>
    </linearGradient>

    <!-- Clip 3 Gradient (FanToolsAll) -->
    <linearGradient id="tk-c3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d0a1b"/>
      <stop offset="50%" stop-color="#15030b"/>
      <stop offset="100%" stop-color="#080104"/>
    </linearGradient>

    <!-- Clip 4 Gradient (VoiceRoomRecorder) -->
    <linearGradient id="tk-c4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#091f3a"/>
      <stop offset="50%" stop-color="#050e1c"/>
      <stop offset="100%" stop-color="#02050b"/>
    </linearGradient>

    <!-- Phone Viewport Screen Clip -->
    <clipPath id="tk-screen">
      <rect x="20" y="56" width="240" height="324" rx="10"/>
    </clipPath>
  </defs>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&amp;family=JetBrains+Mono:wght@700&amp;display=swap');
    text { font-family: 'Cairo', system-ui, -apple-system, sans-serif; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .title { font-size: 15px; font-weight: 800; fill: #ffffff; }
    .sub { font-size: 11px; font-weight: 600; fill: #949ba4; }
    .label { font-size: 12.5px; font-weight: 700; fill: #dbdee1; }
    .btn-lbl { font-size: 12px; font-weight: 800; fill: #ffffff; }

    /* Vertical Reel Auto-Scroll Animation */
    @keyframes tkVerticalFeed {
      0%, 20% { transform: translateY(0); }
      25%, 45% { transform: translateY(-324px); }
      50%, 70% { transform: translateY(-648px); }
      75%, 95% { transform: translateY(-972px); }
      100% { transform: translateY(0); }
    }
    .tk-reel-track {
      animation: tkVerticalFeed 14s cubic-bezier(0.7, 0, 0.2, 1) infinite;
    }

    /* Rotating Music Disc */
    @keyframes spinVinyl {
      100% { transform: rotate(360deg); }
    }
    .vinyl-spin {
      transform-box: fill-box;
      transform-origin: center;
      animation: spinVinyl 3.5s linear infinite;
    }

    /* Animated Scrollbar Indicator */
    @keyframes scrollIndicator {
      0%, 20% { transform: translateY(0); }
      25%, 45% { transform: translateY(22px); }
      50%, 70% { transform: translateY(44px); }
      75%, 95% { transform: translateY(66px); }
      100% { transform: translateY(0); }
    }
    .tk-scroll-pill {
      animation: scrollIndicator 14s cubic-bezier(0.7, 0, 0.2, 1) infinite;
    }

    /* Pulsating Heart */
    @keyframes pulseHeart {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    .pulse-heart {
      transform-box: fill-box;
      transform-origin: center;
      animation: pulseHeart 1.8s ease-in-out infinite;
    }
  </style>

  <rect width="620" height="400" rx="12" fill="url(#tk-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🎵 مشغل تيك توك المدمج · TikTok | FanCord</text>
    <rect x="420" y="-4" width="160" height="26" rx="13" fill="rgba(254,44,85,0.18)" stroke="#fe2c55" stroke-width="1"/>
    <circle cx="434" cy="9" r="4" fill="#fe2c55"/>
    <text x="504" y="13" text-anchor="middle" fill="#ff7693" font-size="11px" font-weight="800">تصفح الفيديوهات مفعّل</text>
  </g>

  <!-- Left: Animated TikTok Phone Feed Viewport -->
  <g clip-path="url(#tk-screen)">
    <!-- Scrolling Track containing 4 vertical reels -->
    <g class="tk-reel-track">

      <!-- ================= CLIP 1: ArabicUI Engine ================= -->
      <g transform="translate(20, 56)">
        <rect width="240" height="324" fill="url(#tk-c1)"/>
        
        <!-- Video Center Showcase Card -->
        <g transform="translate(14, 45)">
          <rect width="212" height="152" rx="10" fill="rgba(30,16,61,0.7)" stroke="rgba(168,85,247,0.4)" stroke-width="1.2"/>
          <circle cx="106" cy="38" r="24" fill="rgba(168,85,247,0.25)"/>
          <text x="106" y="46" text-anchor="middle" font-size="24px">🌐</text>
          
          <rect x="46" y="70" width="120" height="20" rx="10" fill="rgba(168,85,247,0.2)"/>
          <text x="106" y="84" text-anchor="middle" fill="#c084fc" font-size="10.5px" font-weight="800">محرك التعريب الأصيل</text>
          
          <text x="106" y="112" text-anchor="middle" fill="#ffffff" font-size="12.5px" font-weight="800">تعريب ديسكورد بالكامل RTL</text>
          <text x="106" y="132" text-anchor="middle" fill="#94a3b8" font-size="9.5px">بصفر استهلاك لموارد المعالج</text>
        </g>

        <!-- Right Side Engagement Bar -->
        <g transform="translate(196, 68)">
          <!-- Creator Avatar with Follow Plus -->
          <circle cx="14" cy="14" r="14" fill="#5865f2" stroke="#ffffff" stroke-width="1.2"/>
          <text x="14" y="19" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="900">FC</text>
          <circle cx="14" cy="27" r="5" fill="#fe2c55"/>
          <text x="14" y="30" text-anchor="middle" fill="#ffffff" font-size="9px" font-weight="900">+</text>

          <!-- Heart -->
          <g transform="translate(0, 40)" class="pulse-heart">
            <circle cx="14" cy="14" r="13" fill="rgba(0,0,0,0.5)"/>
            <text x="14" y="18" text-anchor="middle" font-size="13px">❤️</text>
          </g>
          <text x="14" y="66" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">48.2K</text>

          <!-- Comment -->
          <circle cx="14" cy="84" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="88" text-anchor="middle" font-size="12px">💬</text>
          <text x="14" y="106" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">1,420</text>

          <!-- Bookmark -->
          <circle cx="14" cy="124" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="128" text-anchor="middle" font-size="12px">🔖</text>
          <text x="14" y="146" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">8,300</text>

          <!-- Rotating Vinyl Disc -->
          <g transform="translate(14, 172)" class="vinyl-spin">
            <circle cx="0" cy="0" r="13" fill="#111111" stroke="#333333" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="#a855f7"/>
          </g>
        </g>

        <!-- Bottom Video Details -->
        <g transform="translate(14, 218)">
          <text x="0" y="14" fill="#ffffff" font-size="12px" font-weight="800">@FanCord_Official ✓</text>
          <text x="0" y="32" fill="#e2e8f0" font-size="10px">شرح تعريب ديسكورد الكامل من اليمين لليسار 🔥</text>
          <text x="0" y="48" fill="#c084fc" font-size="9.5px" font-weight="700">#FanCord #ArabicUI #ديسكورد_عربي #fyp</text>
          <text x="0" y="68" fill="#949ba4" font-size="9px">♫ الصوت الأصلي - تعريب FanCord الأصيل</text>
        </g>

        <!-- Animated Progress Bar -->
        <rect x="0" y="320" width="240" height="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="0" y="320" width="165" height="4" fill="#fe2c55"/>
      </g>

      <!-- ================= CLIP 2: VoicePing Monitor ================= -->
      <g transform="translate(20, 380)">
        <rect width="240" height="324" fill="url(#tk-c2)"/>
        
        <!-- Video Center Showcase Card -->
        <g transform="translate(14, 45)">
          <rect width="212" height="152" rx="10" fill="rgba(10,42,26,0.7)" stroke="rgba(34,197,94,0.4)" stroke-width="1.2"/>
          <circle cx="106" cy="38" r="24" fill="rgba(34,197,94,0.25)"/>
          <text x="106" y="46" text-anchor="middle" font-size="24px">📡</text>
          
          <rect x="46" y="70" width="120" height="20" rx="10" fill="rgba(34,197,94,0.2)"/>
          <text x="106" y="84" text-anchor="middle" fill="#4ade80" font-size="10.5px" font-weight="800">كاشف بنق الصوت</text>
          
          <text x="106" y="112" text-anchor="middle" fill="#ffffff" font-size="12.5px" font-weight="800">اعرف بنق كل شخص بالروم لايف!</text>
          <text x="106" y="132" text-anchor="middle" fill="#86efac" font-size="9.5px">سلطان: 24ms 🟢 | سعود: 118ms 🟠</text>
        </g>

        <!-- Right Side Engagement Bar -->
        <g transform="translate(196, 68)">
          <circle cx="14" cy="14" r="14" fill="#10b981" stroke="#ffffff" stroke-width="1.2"/>
          <text x="14" y="19" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="900">FC</text>
          <circle cx="14" cy="27" r="5" fill="#fe2c55"/>
          <text x="14" y="30" text-anchor="middle" fill="#ffffff" font-size="9px" font-weight="900">+</text>

          <g transform="translate(0, 40)" class="pulse-heart">
            <circle cx="14" cy="14" r="13" fill="rgba(0,0,0,0.5)"/>
            <text x="14" y="18" text-anchor="middle" font-size="13px">❤️</text>
          </g>
          <text x="14" y="66" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">65.4K</text>

          <circle cx="14" cy="84" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="88" text-anchor="middle" font-size="12px">💬</text>
          <text x="14" y="106" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">2,890</text>

          <circle cx="14" cy="124" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="128" text-anchor="middle" font-size="12px">🔖</text>
          <text x="14" y="146" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">11.5K</text>

          <g transform="translate(14, 172)" class="vinyl-spin">
            <circle cx="0" cy="0" r="13" fill="#111111" stroke="#333333" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="#10b981"/>
          </g>
        </g>

        <!-- Bottom Video Details -->
        <g transform="translate(14, 218)">
          <text x="0" y="14" fill="#ffffff" font-size="12px" font-weight="800">@FanCord_Official ✓</text>
          <text x="0" y="32" fill="#e2e8f0" font-size="10px">كيف تكشف بنق خويك اللي يقول عندي لاق 😂⚡</text>
          <text x="0" y="48" fill="#4ade80" font-size="9.5px" font-weight="700">#VoicePing #رومات_صوتية #ديسكورد #FanCord</text>
          <text x="0" y="68" fill="#949ba4" font-size="9px">♫ الصوت الأصلي - Voice Latency Trend</text>
        </g>

        <rect x="0" y="320" width="240" height="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="0" y="320" width="190" height="4" fill="#fe2c55"/>
      </g>

      <!-- ================= CLIP 3: FanToolsAll ================= -->
      <g transform="translate(20, 704)">
        <rect width="240" height="324" fill="url(#tk-c3)"/>
        
        <!-- Video Center Showcase Card -->
        <g transform="translate(14, 45)">
          <rect width="212" height="152" rx="10" fill="rgba(45,10,27,0.7)" stroke="rgba(239,68,68,0.4)" stroke-width="1.2"/>
          <circle cx="106" cy="38" r="24" fill="rgba(239,68,68,0.25)"/>
          <text x="106" y="46" text-anchor="middle" font-size="24px">🛡️</text>
          
          <rect x="46" y="70" width="120" height="20" rx="10" fill="rgba(239,68,68,0.2)"/>
          <text x="106" y="84" text-anchor="middle" fill="#f87171" font-size="10.5px" font-weight="800">كاشف الفيك ديفن</text>
          
          <text x="106" y="112" text-anchor="middle" fill="#ffffff" font-size="12.5px" font-weight="800">⚠️ Fake Deafen Detected!</text>
          <text x="106" y="132" text-anchor="middle" fill="#fca5a5" font-size="9.5px">كشف أي شخص يتنصت بالسر في الروم</text>
        </g>

        <!-- Right Side Engagement Bar -->
        <g transform="translate(196, 68)">
          <circle cx="14" cy="14" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="1.2"/>
          <text x="14" y="19" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="900">FC</text>
          <circle cx="14" cy="27" r="5" fill="#fe2c55"/>
          <text x="14" y="30" text-anchor="middle" fill="#ffffff" font-size="9px" font-weight="900">+</text>

          <g transform="translate(0, 40)" class="pulse-heart">
            <circle cx="14" cy="14" r="13" fill="rgba(0,0,0,0.5)"/>
            <text x="14" y="18" text-anchor="middle" font-size="13px">❤️</text>
          </g>
          <text x="14" y="66" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">92.1K</text>

          <circle cx="14" cy="84" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="88" text-anchor="middle" font-size="12px">💬</text>
          <text x="14" y="106" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">4,310</text>

          <circle cx="14" cy="124" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="128" text-anchor="middle" font-size="12px">🔖</text>
          <text x="14" y="146" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">19.4K</text>

          <g transform="translate(14, 172)" class="vinyl-spin">
            <circle cx="0" cy="0" r="13" fill="#111111" stroke="#333333" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="#ef4444"/>
          </g>
        </g>

        <!-- Bottom Video Details -->
        <g transform="translate(14, 218)">
          <text x="0" y="14" fill="#ffffff" font-size="12px" font-weight="800">@FanCord_Official ✓</text>
          <text x="0" y="32" fill="#e2e8f0" font-size="10px">كشفنا مين مسوي فيك ديفن ويسمعكم بالسر 🕵️‍♂️</text>
          <text x="0" y="48" fill="#f87171" font-size="9.5px" font-weight="700">#FanTools #FakeDeafen #حماية_الرومات</text>
          <text x="0" y="68" fill="#949ba4" font-size="9px">♫ الصوت الأصلي - نظام التخفي والحماية</text>
        </g>

        <rect x="0" y="320" width="240" height="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="0" y="320" width="140" height="4" fill="#fe2c55"/>
      </g>

      <!-- ================= CLIP 4: VoiceRoomRecorder ================= -->
      <g transform="translate(20, 1028)">
        <rect width="240" height="324" fill="url(#tk-c4)"/>
        
        <!-- Video Center Showcase Card -->
        <g transform="translate(14, 45)">
          <rect width="212" height="152" rx="10" fill="rgba(9,31,58,0.7)" stroke="rgba(56,189,248,0.4)" stroke-width="1.2"/>
          <circle cx="106" cy="38" r="24" fill="rgba(56,189,248,0.25)"/>
          <text x="106" y="46" text-anchor="middle" font-size="24px">🎥</text>
          
          <rect x="46" y="70" width="120" height="20" rx="10" fill="rgba(56,189,248,0.2)"/>
          <text x="106" y="84" text-anchor="middle" fill="#38bdf8" font-size="10.5px" font-weight="800">مسجل الرومات الصوتي</text>
          
          <text x="106" y="112" text-anchor="middle" fill="#ffffff" font-size="12.5px" font-weight="800">⏺ تسجيل ستيريو 320kbps</text>
          <text x="106" y="132" text-anchor="middle" fill="#7dd3fc" font-size="9.5px">حفظ تلقائي في Videos\\FanCord</text>
        </g>

        <!-- Right Side Engagement Bar -->
        <g transform="translate(196, 68)">
          <circle cx="14" cy="14" r="14" fill="#0284c7" stroke="#ffffff" stroke-width="1.2"/>
          <text x="14" y="19" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="900">FC</text>
          <circle cx="14" cy="27" r="5" fill="#fe2c55"/>
          <text x="14" y="30" text-anchor="middle" fill="#ffffff" font-size="9px" font-weight="900">+</text>

          <g transform="translate(0, 40)" class="pulse-heart">
            <circle cx="14" cy="14" r="13" fill="rgba(0,0,0,0.5)"/>
            <text x="14" y="18" text-anchor="middle" font-size="13px">❤️</text>
          </g>
          <text x="14" y="66" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">39.8K</text>

          <circle cx="14" cy="84" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="88" text-anchor="middle" font-size="12px">💬</text>
          <text x="14" y="106" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">1,120</text>

          <circle cx="14" cy="124" r="13" fill="rgba(0,0,0,0.5)"/>
          <text x="14" y="128" text-anchor="middle" font-size="12px">🔖</text>
          <text x="14" y="146" text-anchor="middle" fill="#ffffff" font-size="9px" class="mono">7,890</text>

          <g transform="translate(14, 172)" class="vinyl-spin">
            <circle cx="0" cy="0" r="13" fill="#111111" stroke="#333333" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="#38bdf8"/>
          </g>
        </g>

        <!-- Bottom Video Details -->
        <g transform="translate(14, 218)">
          <text x="0" y="14" fill="#ffffff" font-size="12px" font-weight="800">@FanCord_Official ✓</text>
          <text x="0" y="32" fill="#e2e8f0" font-size="10px">سجل أي مكالمة في ديسكورد بجودة نقية استوديو 🎙️💾</text>
          <text x="0" y="48" fill="#38bdf8" font-size="9.5px" font-weight="700">#VoiceRecorder #تسجيل_رومات #FanCord</text>
          <text x="0" y="68" fill="#949ba4" font-size="9px">♫ الصوت الأصلي - Stereo Recording 320k</text>
        </g>

        <rect x="0" y="320" width="240" height="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="0" y="320" width="210" height="4" fill="#fe2c55"/>
      </g>

    </g> <!-- end tk-reel-track -->

    <!-- Static Phone Top Overlay Bar (Stays on top while reel scrolls) -->
    <g transform="translate(20, 56)">
      <rect width="240" height="34" fill="rgba(0,0,0,0.4)"/>
      <rect x="12" y="8" width="46" height="18" rx="4" fill="#fe2c55"/>
      <text x="35" y="21" text-anchor="middle" fill="#ffffff" font-size="9px" font-weight="900">LIVE</text>
      
      <text x="110" y="21" text-anchor="middle" fill="#94a3b8" font-size="11px" font-weight="700">أتابعه</text>
      <text x="145" y="21" text-anchor="middle" fill="#ffffff" font-size="11.5px" font-weight="900">لك</text>
      <rect x="137" y="27" width="16" height="2" rx="1" fill="#ffffff"/>

      <text x="218" y="22" text-anchor="middle" fill="#ffffff" font-size="12px">🔍</text>
    </g>

    <!-- Static Right Feed Scroll Track Indicator -->
    <g transform="translate(254, 160)">
      <rect width="3" height="88" rx="1.5" fill="rgba(255,255,255,0.15)"/>
      <rect y="0" width="3" height="22" rx="1.5" fill="#fe2c55" class="tk-scroll-pill"/>
    </g>
  </g> <!-- end clip-path tk-screen -->

  <!-- Outer Phone Border Frame -->
  <rect x="20" y="56" width="240" height="324" rx="10" fill="none" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Right: Discord Sidebar Integration Panel -->
  <g transform="translate(280, 56)">
    <rect width="320" height="324" rx="10" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>

    <g transform="translate(20, 24)">
      <text x="0" y="16" class="title" fill="#ffffff">تصفح تيك توك أثناء اللعب والمحادثة</text>
      <text x="0" y="38" class="sub">نافذة جانبية ذكية مدمجة في ديسكورد تتيح لك مشاهدة مقاطع التيك توك وشروحات البلوقينات الحصرية وأنت في الروم الصوتي دون الحاجة لفتح المتصفح.</text>
    </g>

    <!-- Control 1: Sound Volume Slider -->
    <g transform="translate(20, 115)">
      <text x="0" y="14" class="label" font-size="12.5px">تحكم مستقل بمستوى الصوت (Volume)</text>
      <rect x="0" y="24" width="280" height="8" rx="4" fill="#2b2d31"/>
      <rect x="0" y="24" width="190" height="8" rx="4" fill="#5865f2"/>
      <circle cx="190" cy="28" r="7" fill="#ffffff"/>
      <text x="280" y="14" text-anchor="end" class="mono" fill="#5865f2" font-size="11px">68%</text>
    </g>

    <!-- Control 2: Toggles -->
    <g transform="translate(20, 175)">
      <text x="0" y="14" class="label" font-size="12px">كتم الصوت التلقائي عند تحدث أحد بالروم</text>
      <rect x="234" y="0" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="269" cy="11" r="8" fill="#ffffff"/>
    </g>

    <line x1="20" y1="215" x2="300" y2="215" stroke="#2b2d31" stroke-width="1"/>

    <g transform="translate(20, 230)">
      <text x="0" y="14" class="label" font-size="12px">التمرير التلقائي لمقاطع البلوقينات الحصرية</text>
      <rect x="234" y="0" width="46" height="22" rx="11" fill="#5865f2"/>
      <circle cx="269" cy="11" r="8" fill="#ffffff"/>
    </g>

    <!-- Bottom Button -->
    <g transform="translate(20, 268)">
      <rect width="280" height="36" rx="6" fill="url(#tk-pink)"/>
      <text x="140" y="23" text-anchor="middle" class="btn-lbl">▶️ تشغيل النافذة الجانبية الآن</text>
    </g>
  </g>
</svg>`;
}

// 7. VoiceLogger Preview
function getVoiceLoggerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="vl-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#vl-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🎙️ سجل الرومات الصوتية · VoiceLogger</text>
    <rect x="440" y="-4" width="140" height="26" rx="13" fill="rgba(35,165,90,0.18)" stroke="#23a55a" stroke-width="1"/>
    <circle cx="454" cy="9" r="4" fill="#23a55a"/>
    <text x="518" y="13" text-anchor="middle" fill="#4ade80" font-size="11px" font-weight="800">التتبع الحي مفعّل</text>
  </g>

  <!-- Filter tabs -->
  <g transform="translate(20, 56)">
    <rect x="0" y="0" width="80" height="26" rx="6" fill="#5865f2"/>
    <text x="40" y="17" text-anchor="middle" fill="#ffffff" font-size="11.5px" font-weight="700">الكل (34)</text>

    <rect x="90" y="0" width="90" height="26" rx="6" fill="#2b2d31"/>
    <text x="135" y="17" text-anchor="middle" fill="#b5bac1" font-size="11.5px" font-weight="700">دخول (18)</text>

    <rect x="190" y="0" width="90" height="26" rx="6" fill="#2b2d31"/>
    <text x="235" y="17" text-anchor="middle" fill="#b5bac1" font-size="11.5px" font-weight="700">انتقال (10)</text>

    <rect x="290" y="0" width="90" height="26" rx="6" fill="#2b2d31"/>
    <text x="335" y="17" text-anchor="middle" fill="#b5bac1" font-size="11.5px" font-weight="700">مغادرة (6)</text>
  </g>

  <!-- Log Entry 1: Joined -->
  <g transform="translate(20, 94)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="rgba(35,165,90,0.4)" stroke-width="1"/>
    <circle cx="22" cy="22" r="10" fill="rgba(35,165,90,0.2)"/>
    <text x="22" y="26" text-anchor="middle" fill="#23a55a" font-size="11px">🟢</text>
    <text x="44" y="24" class="label">انضمام إلى الروم الصوتي</text>
    <text x="44" y="44" class="sub">دخل <tspan fill="#5865f2" font-weight="800">أحمد (Ahmed#001)</tspan> إلى الروم: <tspan fill="#c084fc">📢 عام 1 (Public 1)</tspan></text>
    <text x="560" y="24" text-anchor="end" class="mono" fill="#4ade80" font-size="11.5px">14:32:04</text>
    <text x="560" y="44" text-anchor="end" class="sub" font-size="10.5px">قبل دقيقة واحدة</text>
  </g>

  <!-- Log Entry 2: Switched -->
  <g transform="translate(20, 164)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="rgba(88,101,242,0.35)" stroke-width="1"/>
    <circle cx="22" cy="22" r="10" fill="rgba(88,101,242,0.2)"/>
    <text x="22" y="26" text-anchor="middle" fill="#5865f2" font-size="11px">🔄</text>
    <text x="44" y="24" class="label">انتقال بين الرومات</text>
    <text x="44" y="44" class="sub">انتقل <tspan fill="#ec4899" font-weight="800">سلطان (Sultan)</tspan> من <tspan fill="#94a3b8">📢 عام 1</tspan> إلى <tspan fill="#a855f7">🎮 رومات الألعاب</tspan></text>
    <text x="560" y="24" text-anchor="end" class="mono" fill="#a78bfa" font-size="11.5px">14:28:15</text>
    <text x="560" y="44" text-anchor="end" class="sub" font-size="10.5px">قبل 5 دقائق</text>
  </g>

  <!-- Log Entry 3: Left -->
  <g transform="translate(20, 234)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="rgba(237,66,69,0.3)" stroke-width="1"/>
    <circle cx="22" cy="22" r="10" fill="rgba(237,66,69,0.2)"/>
    <text x="22" y="26" text-anchor="middle" fill="#ed4245" font-size="11px">🔴</text>
    <text x="44" y="24" class="label">مغادرة الروم</text>
    <text x="44" y="44" class="sub">غادر <tspan fill="#dbdee1" font-weight="800">فهد (Fahad_99)</tspan> الروم الصوتي <tspan fill="#94a3b8">📢 عام 1</tspan> (المدة: 1 ساعة و 12 دقيقة)</text>
    <text x="560" y="24" text-anchor="end" class="mono" fill="#f87171" font-size="11.5px">14:15:50</text>
    <text x="560" y="44" text-anchor="end" class="sub" font-size="10.5px">قبل 17 دقيقة</text>
  </g>

  <!-- Bottom Export Bar -->
  <g transform="translate(20, 310)">
    <rect width="580" height="72" rx="8" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="20" y="32" fill="#dbdee1" font-size="12.5px" font-weight="700">💾 حفظ وتصدير السجل الكامل بصيغة TXT أو JSON بنقرة زر</text>
    <text x="20" y="52" class="sub" font-size="11px">تسجيل صامت بدون استهلاك أي بيانات شبكية أو إبطاء لاتصال الديسكورد.</text>
    <rect x="470" y="16" width="95" height="38" rx="6" fill="#5865f2"/>
    <text x="517" y="40" text-anchor="middle" fill="#ffffff" font-size="12px" font-weight="800">تصدير الآن</text>
  </g>
</svg>`;
}

// 8. VoiceRoomRecorder Preview
function getVoiceRoomRecorderSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="vr-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
    <linearGradient id="vr-green" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#vr-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">🎥 مسجل الرومات الاحترافي · VoiceRoomRecorder</text>
  </g>

  <!-- Status Box -->
  <g transform="translate(20, 56)">
    <rect width="580" height="52" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <circle cx="24" cy="22" r="5" fill="#80848e"/>
    <text x="38" y="24" fill="#ffffff" font-size="13px" font-weight="800">⚪ التسجيل متوقف (جاهز للعمل بنقرة واحدة)</text>
    <text x="38" y="42" class="sub" font-size="11px">الروم المتصل به: 📢 | • عام 1 (Public Voice) • جودة الصوت: ستيريو 320kbps نقي</text>
  </g>

  <!-- Dual Action Buttons -->
  <g transform="translate(20, 118)">
    <rect width="280" height="40" rx="6" fill="url(#vr-green)"/>
    <text x="140" y="25" text-anchor="middle" class="btn-lbl">▶️ بدء تسجيل الروم الصوتي الآن</text>

    <rect x="300" y="0" width="280" height="40" rx="6" fill="#2b2d31" stroke="#35373c" stroke-width="1"/>
    <text x="440" y="25" text-anchor="middle" class="btn-lbl">📁 فتح مجلد الحفظ (Videos\\FanCord)</text>
  </g>

  <!-- Setting 1: Loopback -->
  <g transform="translate(20, 170)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="25" class="label">تسجيل صوت أعضاء الروم (System Loopback)</text>
    <text x="20" y="45" class="sub">التقاط نقي وفوري لأصوات جميع المتواجدين في الروم بدون صدى وبجودة استوديو.</text>
    <rect x="510" y="17" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="30" r="10" fill="#ffffff"/>
  </g>

  <!-- Setting 2: Mix Mic -->
  <g transform="translate(20, 240)">
    <rect width="580" height="60" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="25" class="label">خلط صوت المايك المحلي مع صوت الروم (Record Microphone with Room)</text>
    <text x="20" y="45" class="sub">دمج صوتك الشخصي مع محادثات الروم في مسار صوتي ستيريو موحد ومتوازن.</text>
    <rect x="510" y="17" width="50" height="26" rx="13" fill="#5865f2"/>
    <circle cx="547" cy="30" r="10" fill="#ffffff"/>
  </g>

  <!-- Setting 3: Auto Record on Join -->
  <g transform="translate(20, 310)">
    <rect width="580" height="72" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    <text x="20" y="27" class="label">التسجيل التلقائي فور دخول الروم الصوتي (Auto Record on Channel Join)</text>
    <text x="20" y="47" class="sub">يبدأ التسجيل فمع دخولك للروم ويحفظ الملف الصوتي تلقائياً فور خروجك دون تدخل منك.</text>
    <rect x="510" y="22" width="50" height="26" rx="13" fill="#35373c"/>
    <circle cx="523" cy="35" r="10" fill="#ffffff"/>
  </g>
</svg>`;
}

// 9. VoicePing Preview
function getVoicePingSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400" width="100%" height="100%" dir="rtl">
  <defs>
    <linearGradient id="vp-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16171a"/>
      <stop offset="100%" stop-color="#0f1012"/>
    </linearGradient>
  </defs>
  ${commonStyle}

  <rect width="620" height="400" rx="12" fill="url(#vp-bg)" stroke="#2b2d31" stroke-width="1.5"/>

  <!-- Window Header -->
  <g transform="translate(20, 24)">
    <circle cx="10" cy="8" r="5" fill="#ed4245"/>
    <circle cx="26" cy="8" r="5" fill="#faa81a"/>
    <circle cx="42" cy="8" r="5" fill="#3ba55d"/>
    <text x="64" y="13" class="title">📡 كاشف بنق الصوت · VoicePing Monitor</text>
    <rect x="420" y="-4" width="160" height="26" rx="13" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1"/>
    <circle cx="434" cy="9" r="4" fill="#22c55e"/>
    <text x="504" y="13" text-anchor="middle" fill="#4ade80" font-size="11px" font-weight="800">مراقبة اتصال حية 60fps</text>
  </g>

  <!-- Left Side: Voice Room Live View (Renamed room & members) -->
  <g transform="translate(20, 60)">
    <!-- Voice Channel Container -->
    <rect width="285" height="320" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <!-- Channel Header -->
    <rect width="285" height="46" rx="8" fill="#232428"/>
    <path d="M 0 46 L 285 46" stroke="#2b2d31" stroke-width="1"/>
    <text x="14" y="22" fill="#23a55a" font-size="14px">🔊</text>
    <text x="36" y="22" fill="#ffffff" font-size="12.5px" font-weight="800">مجلس FanCord الصوتي</text>
    <text x="272" y="22" text-anchor="end" class="mono" fill="#23a55a" font-size="11px" font-weight="700">03:42:18</text>
    <text x="16" y="38" fill="#949ba4" font-size="9.5px" font-weight="600">دردشة وسوالف مجتمع FanCord 🌟</text>

    <!-- Member 1: سلطان (Ping 24) -->
    <g transform="translate(10, 54)">
      <rect width="265" height="46" rx="6" fill="#2b2d31" opacity="0.6"/>
      <text x="12" y="26" class="mono" fill="#23a55a" font-size="14px" font-weight="900">24</text>
      <circle cx="48" cy="23" r="14" fill="#5865f2"/>
      <text x="48" y="27" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="800">س</text>
      <text x="70" y="22" fill="#ffffff" font-size="11.5px" font-weight="700">سلطان | Sultan</text>
      <text x="156" y="22" fill="#f59e0b" font-size="11px">👑</text>
      <text x="252" y="26" text-anchor="end" fill="#80848e" font-size="12px">🔇</text>
      <text x="12" y="40" class="mono" fill="#23a55a" font-size="8px">ms • loss: 0%</text>
    </g>

    <!-- Member 2: عبدالله (Speaking with glowing ring - Ping 36) -->
    <g transform="translate(10, 106)">
      <rect width="265" height="46" rx="6" fill="#2b2d31" opacity="0.9" stroke="rgba(35,165,90,0.5)" stroke-width="1"/>
      <text x="12" y="26" class="mono" fill="#23a55a" font-size="14px" font-weight="900">36</text>
      <circle cx="48" cy="23" r="15" fill="none" stroke="#23a55a" stroke-width="2"/>
      <circle cx="48" cy="23" r="13" fill="#eb459e"/>
      <text x="48" y="27" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="800">ع</text>
      <text x="70" y="22" fill="#ffffff" font-size="11.5px" font-weight="700">عبدالله | Abdullah</text>
      <text x="252" y="26" text-anchor="end" fill="#23a55a" font-size="12px">🎙️</text>
      <text x="12" y="40" class="mono" fill="#23a55a" font-size="8px">ms • loss: 0%</text>
    </g>

    <!-- Member 3: فهد (Streaming Live - Ping 42) -->
    <g transform="translate(10, 158)">
      <rect width="265" height="46" rx="6" fill="#2b2d31" opacity="0.6"/>
      <text x="12" y="26" class="mono" fill="#23a55a" font-size="14px" font-weight="900">42</text>
      <circle cx="48" cy="23" r="14" fill="#8b5cf6"/>
      <text x="48" y="27" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="800">ف</text>
      <text x="70" y="22" fill="#ffffff" font-size="11.5px" font-weight="700">فهد | Fahad</text>
      <rect x="146" y="13" width="38" height="16" rx="3" fill="rgba(88,101,242,0.3)"/>
      <text x="165" y="24" text-anchor="middle" fill="#a5b4fc" font-size="8.5px" font-weight="800">بث LIVE</text>
      <text x="12" y="40" class="mono" fill="#23a55a" font-size="8px">ms • loss: 0%</text>
    </g>

    <!-- Member 4: سعود (High Ping Warning - Ping 118) -->
    <g transform="translate(10, 210)">
      <rect width="265" height="46" rx="6" fill="#2b2d31" opacity="0.6" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
      <text x="12" y="26" class="mono" fill="#f59e0b" font-size="14px" font-weight="900">118</text>
      <circle cx="48" cy="23" r="14" fill="#f97316"/>
      <text x="48" y="27" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="800">س</text>
      <text x="70" y="22" fill="#ffffff" font-size="11.5px" font-weight="700">سعود | Saud</text>
      <rect x="144" y="13" width="46" height="16" rx="3" fill="rgba(245,158,11,0.2)"/>
      <text x="167" y="24" text-anchor="middle" fill="#f59e0b" font-size="8.5px" font-weight="700">بنق مرتفع</text>
      <text x="12" y="40" class="mono" fill="#f59e0b" font-size="8px">ms • loss: 1.2%</text>
    </g>

    <!-- Member 5: خالد (Ping 28) -->
    <g transform="translate(10, 262)">
      <rect width="265" height="46" rx="6" fill="#2b2d31" opacity="0.4"/>
      <text x="12" y="26" class="mono" fill="#23a55a" font-size="14px" font-weight="900">28</text>
      <circle cx="48" cy="23" r="14" fill="#06b6d4"/>
      <text x="48" y="27" text-anchor="middle" fill="#ffffff" font-size="11px" font-weight="800">خ</text>
      <text x="70" y="22" fill="#ffffff" font-size="11.5px" font-weight="700">خالد | Khalid</text>
      <text x="252" y="26" text-anchor="end" fill="#80848e" font-size="12px">🎧</text>
      <text x="12" y="40" class="mono" fill="#23a55a" font-size="8px">ms • loss: 0%</text>
    </g>
  </g>

  <!-- Right Side: VoicePing Settings (from Screenshot 2) -->
  <g transform="translate(315, 60)">
    <rect width="285" height="320" rx="8" fill="#1e1f22" stroke="#2b2d31" stroke-width="1"/>
    
    <!-- Settings Header -->
    <g transform="translate(15, 20)">
      <text x="0" y="0" fill="#ffffff" font-size="14px" font-weight="800">إعدادات VoicePing</text>
      <rect x="140" y="-12" width="45" height="18" rx="4" fill="#2b2d31"/>
      <text x="162" y="1" text-anchor="middle" fill="#949ba4" font-size="9.5px" font-weight="700">Voice</text>
      <rect x="192" y="-12" width="48" height="18" rx="4" fill="#2b2d31"/>
      <text x="216" y="1" text-anchor="middle" fill="#949ba4" font-size="9.5px" font-weight="700">Utility</text>
      <text x="0" y="18" fill="#949ba4" font-size="10.5px">عرض بنق الجميع في الروم الصوتي مع التفاصيل</text>
    </g>

    <!-- User Ping Display Mode -->
    <g transform="translate(15, 64)">
      <text x="0" y="0" fill="#dbdee1" font-size="12px" font-weight="700">User Ping (نمط العرض في الروم)</text>
      <rect x="0" y="8" width="255" height="32" rx="6" fill="#2b2d31" stroke="#5865f2" stroke-width="1.2"/>
      <text x="12" y="28" fill="#ffffff" font-size="11.5px" font-weight="700">رقم البنق بجانب الاسم (Number)</text>
      <text x="240" y="28" text-anchor="end" fill="#949ba4" font-size="11px">▾</text>
    </g>

    <!-- Alerts Toggle Switch -->
    <g transform="translate(15, 126)">
      <text x="0" y="0" fill="#dbdee1" font-size="12px" font-weight="700">Alerts (تنبيهات جودة الاتصال)</text>
      <text x="0" y="16" fill="#949ba4" font-size="10px">تنبيهي فوراً عند ضعف الاتصال أو ضياع الصوت</text>
      <rect x="205" y="-4" width="50" height="24" rx="12" fill="#5865f2"/>
      <circle cx="241" cy="8" r="9" fill="#ffffff"/>
    </g>

    <!-- High Ping Slider (at 120ms) -->
    <g transform="translate(15, 178)">
      <text x="0" y="0" fill="#dbdee1" font-size="11.5px" font-weight="700">High Ping (حد البنق المرتفع):</text>
      <text x="255" y="0" text-anchor="end" class="mono" fill="#f59e0b" font-size="12px" font-weight="800">120 ms</text>
      <rect x="0" y="10" width="255" height="6" rx="3" fill="#35373c"/>
      <rect x="0" y="10" width="135" height="6" rx="3" fill="#5865f2"/>
      <circle cx="135" cy="13" r="7" fill="#ffffff"/>
      <text x="0" y="27" class="mono" fill="#6d6f78" font-size="8.5px">60</text>
      <text x="80" y="27" class="mono" fill="#6d6f78" font-size="8.5px">100</text>
      <text x="135" y="27" class="mono" fill="#f59e0b" font-size="8.5px" font-weight="700">120</text>
      <text x="255" y="27" text-anchor="end" class="mono" fill="#6d6f78" font-size="8.5px">200</text>
    </g>

    <!-- Bad Packet Loss Slider (at 5%) -->
    <g transform="translate(15, 230)">
      <text x="0" y="0" fill="#dbdee1" font-size="11.5px" font-weight="700">Bad Loss (حد فقدان الحزم):</text>
      <text x="255" y="0" text-anchor="end" class="mono" fill="#ed4245" font-size="12px" font-weight="800">5 %</text>
      <rect x="0" y="10" width="255" height="6" rx="3" fill="#35373c"/>
      <rect x="0" y="10" width="95" height="6" rx="3" fill="#5865f2"/>
      <circle cx="95" cy="13" r="7" fill="#ffffff"/>
      <text x="0" y="27" class="mono" fill="#6d6f78" font-size="8.5px">1%</text>
      <text x="95" y="27" class="mono" fill="#ed4245" font-size="8.5px" font-weight="700">5%</text>
      <text x="170" y="27" class="mono" fill="#6d6f78" font-size="8.5px">10%</text>
      <text x="255" y="27" text-anchor="end" class="mono" fill="#6d6f78" font-size="8.5px">20%</text>
    </g>

    <!-- Bottom Feature Note -->
    <g transform="translate(15, 278)">
      <rect width="255" height="30" rx="6" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.25)" stroke-width="1"/>
      <text x="12" y="19" fill="#4ade80" font-size="10.5px" font-weight="700">⚡ قياس دقيق بالـ WebRTC بدون تأخير للصوت</text>
    </g>
  </g>
</svg>`;
}

// Generate all 9 SVGs into assets directory
fs.writeFileSync('assets/preview_arabic_ui.svg', getArabicUiSvg(), 'utf8');
fs.writeFileSync('assets/preview_custom_rpc.svg', getCustomRpcSvg(), 'utf8');
fs.writeFileSync('assets/preview_fantools.svg', getFanToolsSvg(), 'utf8');
fs.writeFileSync('assets/preview_fast_ping.svg', getFastPingSvg(), 'utf8');
fs.writeFileSync('assets/preview_questify.svg', getQuestifySvg(), 'utf8');
fs.writeFileSync('assets/preview_tiktok_fancord.svg', getTikTokSvg(), 'utf8');
fs.writeFileSync('assets/preview_voice_logger.svg', getVoiceLoggerSvg(), 'utf8');
fs.writeFileSync('assets/preview_voice_recorder_ar.svg', getVoiceRoomRecorderSvg(), 'utf8');
fs.writeFileSync('assets/preview_voice_ping.svg', getVoicePingSvg(), 'utf8');

console.log('Successfully generated all 9 unified widescreen 620x400 SVGs!');


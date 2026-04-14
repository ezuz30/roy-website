// ==========================================
// 1. HEADER / NAV COMPONENT
// ==========================================
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .nav-header { flex-shrink: 0; height: 90px; display: flex; align-items: center; justify-content: space-between; padding: 0 6vw; border-bottom: 1px solid #2a2a2e; z-index: 10000; position: fixed; top: 0; left: 0; right: 0; background: #0a0a0a; }
        .nav-logo { text-decoration: none; display: inline-flex; align-items: center; line-height: 0; }
        .nav-links { display: flex; gap: 3rem; list-style: none; margin: 0; padding: 0; }
        .nav-links a { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 0.95rem; letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none; color: #ffffff; position: relative; transition: 0.3s; }
        .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #E32119; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-links a:hover::after { width: 100%; }
        .nav-links a:hover { color: #ffffff; }

        /* Hamburger button */
        .nav-hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; padding: 8px; cursor: pointer; z-index: 10002; }
        .nav-hamburger span { display: block; width: 24px; height: 1px; background: #f0f0f2; transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s; }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* Mobile drawer */
        .nav-mobile-drawer { display: none; position: fixed; inset: 0; background: #0a0a0a; z-index: 10001; flex-direction: column; align-items: center; justify-content: center; gap: 3rem; opacity: 0; pointer-events: none; transition: opacity 0.4s cubic-bezier(0.16,1,0.3,1); }
        .nav-mobile-drawer.open { opacity: 1; pointer-events: all; }
        .nav-mobile-drawer a { font-family: 'Barlow Condensed', sans-serif; font-weight: 300; font-size: 1.6rem; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; color: #b0b0b8; transition: color 0.3s; }
        .nav-mobile-drawer a:active { color: #E32119; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-mobile-drawer { display: flex; }
        }
      </style>
      <header class="nav-header">
        <a href="index.html" class="nav-logo">
          <svg width="252" height="46" viewBox="0 0 252 54" xmlns="http://www.w3.org/2000/svg">
            <!-- Camera body -->
            <rect x="1" y="7" width="126" height="40" rx="3" fill="none" stroke="#f0f0f2" stroke-width="0.9"/>
            <!-- Top plate separation line -->
            <line x1="1" y1="18.5" x2="127" y2="18.5" stroke="#f0f0f2" stroke-width="0.45" stroke-opacity="0.22"/>
            <!-- Viewfinder window -->
            <rect x="81" y="12.5" width="33" height="20" rx="2" fill="none" stroke="#f0f0f2" stroke-width="0.7"/>
            <!-- Viewfinder inner reflection -->
            <rect x="84" y="15.5" width="27" height="14" rx="1" fill="none" stroke="#f0f0f2" stroke-width="0.35" stroke-opacity="0.28"/>
            <!-- Lens outer ring -->
            <circle cx="39" cy="28" r="8.5" fill="none" stroke="#f0f0f2" stroke-width="0.9"/>
            <!-- Lens mid ring -->
            <circle cx="39" cy="28" r="6.1" fill="none" stroke="#f0f0f2" stroke-width="0.55" stroke-opacity="0.6"/>
            <!-- Lens inner ring -->
            <circle cx="39" cy="28" r="3.4" fill="none" stroke="#f0f0f2" stroke-width="0.45" stroke-opacity="0.38"/>
            <!-- Red center -->
            <circle cx="39" cy="28" r="1.9" fill="#E32119"/>
            <!-- Lens glint -->
            <circle cx="35.2" cy="24.3" r="1.05" fill="#f0f0f2" fill-opacity="0.18"/>
            <!-- R -->
            <text x="14" y="36.5" font-family="Raleway, sans-serif" font-weight="300" font-size="22" fill="#f0f0f2">R</text>
            <!-- Y -->
            <text x="50.5" y="36.5" font-family="Raleway, sans-serif" font-weight="300" font-size="22" fill="#f0f0f2">Y</text>
            <!-- EZUZ -->
            <text x="140" y="36.5" font-family="Raleway, sans-serif" font-weight="300" font-size="22" letter-spacing="2.8" fill="#f0f0f2">EZUZ</text>
          </svg>
        </a>
        <ul class="nav-links">
          <li><a href="selected-work.html">Collection</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="#" id="openCollaborate">Contact</a></li>
        </ul>
        <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </header>
      <nav class="nav-mobile-drawer" id="navMobileDrawer">
        <a href="index.html">Home</a>
        <a href="selected-work.html">Collection</a>
        <a href="profile.html">Profile</a>
        <a href="#" id="openCollaborateMobile">Contact</a>
      </nav>
    `;
  }
}
customElements.define('site-nav', SiteNav);

// ==========================================
// 1b. HAMBURGER MENU LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const drawer = document.getElementById('navMobileDrawer');
  if (!hamburger || !drawer) return;

  function openDrawer() { hamburger.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { hamburger.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; }
  function toggleDrawer() { drawer.classList.contains('open') ? closeDrawer() : openDrawer(); }

  hamburger.addEventListener('click', toggleDrawer);

  // Close when a link is tapped
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  // Open collaborate modal from mobile drawer
  document.addEventListener('click', e => {
    if (e.target.closest('#openCollaborateMobile')) { e.preventDefault(); closeDrawer(); setTimeout(() => { const modal = document.getElementById('globalCollaborateModal'); if (modal) modal.classList.add('active'); }, 350); }
  });
});

// ==========================================
// 2. FOOTER COMPONENT
// ==========================================
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .site-footer { flex-shrink: 0; height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 6vw; border-top: 1px solid #2a2a2e; font-family: 'Barlow Condensed', sans-serif; font-weight: 300; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #8a8a92; z-index: 100; background: #0a0a0a; }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { color: #8a8a92; text-decoration: none; transition: 0.3s; }
        .footer-links a:hover { color: #f0f0f2; }
        @media (max-width: 768px) { .site-footer { flex-direction: column; justify-content: center; gap: 10px; height: 100px; } }
      </style>
      <footer class="site-footer">
        <div>© 2026 ROY EZUZ</div>
        <div class="footer-links"><a href="#">Instagram</a><a href="#">Email</a></div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);

// ==========================================
// 2b. TOUCH DEVICE CURSOR FIX (global)
// ==========================================
(function fixTouchCursor() {
  const style = document.createElement('style');
  style.textContent = `
    @media (hover: none) and (pointer: coarse) {
      *, *::before, *::after { cursor: auto !important; }
      a, button, [role="button"], input, textarea, select, label { cursor: pointer !important; }
    }
  `;
  document.head.appendChild(style);
})();

// ==========================================
// 3b. COLLABORATE MODAL (global, all pages)
// ==========================================
(function initCollaborateModal() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .collab-mo { position: fixed; inset: 0; z-index: 50000; background: rgba(0,0,0,.75); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity .5s; }
    .collab-mo.active { opacity: 1; pointer-events: all; }
    .collab-mc { position: relative; border: 1px solid rgba(255,255,255,0.08); background: rgba(10,10,10,.92); padding: 4rem 3.5rem; max-width: 480px; width: 90vw; text-align: center; transform: translateY(20px); transition: transform .5s cubic-bezier(.25,1,.5,1); }
    .collab-mo.active .collab-mc { transform: translateY(0); }
    .collab-mx { position: absolute; top: 1.2rem; right: 1.5rem; background: none; border: none; font-family: 'Barlow', sans-serif; font-weight: 200; font-size: 1.4rem; color: #8a8a92; cursor: none; transition: color .3s; line-height: 1; padding: 4px; }
    .collab-mx:hover { color: #E32119; }
    .collab-ms { font-family: 'Barlow Condensed', sans-serif; font-weight: 300; font-size: .6rem; letter-spacing: .35em; text-transform: uppercase; color: #8a8a92; margin-bottom: 1.5rem; }
    .collab-mh { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-style: italic; font-size: clamp(1.3rem, 2.5vw, 1.8rem); line-height: 1.4; color: #f0f0f2; margin-bottom: 2.5rem; }
    .collab-md { width: 30px; height: 1px; background: #E32119; margin: 0 auto 2rem; }
    .collab-cfw { display: flex; flex-direction: column; gap: 1rem; }
    .collab-cfw input, .collab-cfw textarea { width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.1); padding: .85rem 1rem; font-family: 'Barlow', sans-serif; font-weight: 300; font-size: .82rem; color: #f0f0f2; letter-spacing: .03em; transition: border-color .3s; outline: none; resize: vertical; cursor: none; }
    .collab-cfw input::placeholder, .collab-cfw textarea::placeholder { color: #8a8a92; }
    .collab-cfw input:focus, .collab-cfw textarea:focus { border-color: #E32119; }
    .collab-sb { width: 100%; padding: .9rem; background: transparent; border: 1px solid rgba(255,255,255,0.2); font-family: 'Barlow Condensed', sans-serif; font-weight: 400; font-size: .72rem; letter-spacing: .25em; text-transform: uppercase; color: #f0f0f2; cursor: none; transition: all .4s; margin-top: .5rem; }
    .collab-sb:hover { border-color: #E32119; background: #E32119; color: #fff; }
    .collab-fs { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: .75rem; text-align: center; color: #8a8a92; min-height: 1.2em; margin-top: .5rem; }
    .collab-fs.ok { color: #4caf50; } .collab-fs.er { color: #E32119; }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const modal = document.createElement('div');
  modal.className = 'collab-mo';
  modal.id = 'globalCollaborateModal';
  modal.innerHTML = `
    <div class="collab-mc">
      <button class="collab-mx" id="globalModalClose">&times;</button>
      <div class="collab-ms">G E T &nbsp; I N &nbsp; T O U C H</div>
      <h2 class="collab-mh">Questions, collaborations, or just to say hello — reach out.</h2>
      <div class="collab-md"></div>
      <div class="collab-cfw">
        <input type="text" id="globalFormName" placeholder="Your Name" required>
        <input type="email" id="globalFormEmail" placeholder="Your Email" required>
        <textarea id="globalFormMessage" placeholder="Your Message" rows="3" required></textarea>
        <button type="button" class="collab-sb" id="globalFormSubmit">Send Message</button>
        <div class="collab-fs" id="globalFormStatus"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  function openModal(e) { e && e.preventDefault(); modal.classList.add('active'); }
  function closeModal() { modal.classList.remove('active'); }

  document.getElementById('globalModalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

  document.addEventListener('click', e => {
    const trigger = e.target.closest('#openCollaborate');
    if (trigger) { e.preventDefault(); openModal(); }
  });

  document.getElementById('globalFormSubmit').addEventListener('click', function() {
    const n = document.getElementById('globalFormName');
    const em = document.getElementById('globalFormEmail');
    const m = document.getElementById('globalFormMessage');
    const status = document.getElementById('globalFormStatus');
    if (!n.value || !em.value || !m.value) {
      status.textContent = 'Please fill in all fields.';
      status.className = 'collab-fs er';
      return;
    }
    status.textContent = 'Message sent. Thank you.';
    status.className = 'collab-fs ok';
    setTimeout(() => { closeModal(); n.value = ''; em.value = ''; m.value = ''; status.textContent = ''; status.className = 'collab-fs'; }, 2000);
  });
})();

// ==========================================
// 3. GLOBAL CURSOR LOGIC (EXACT MATCH TO INDEX.HTML)
// ==========================================
(function initCursor() {
  // בדיקה שאיננו במכשיר טאץ'
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  const style = document.createElement('style');
  style.textContent = `
    html, body { cursor: none !important; }
    .cursor-dot {
      position: fixed; top: 0; left: 0; width: 4px; height: 4px;
      background: #E32119; border-radius: 50%; pointer-events: none;
      z-index: 99998; transform: translate(-50%, -50%);
      transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                  height 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                  background 0.4s ease;
      will-change: transform;
    }
    .cursor-ring {
      position: fixed; top: 0; left: 0; width: 15px; height: 15px;
      border: 1px solid rgba(227, 33, 25, 0.35); border-radius: 50%;
      pointer-events: none; z-index: 99997; transform: translate(-50%, -50%);
      transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                  height 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                  border-color 0.4s ease;
      will-change: transform;
    }
    .cursor-dot.on-link { width: 3px; height: 3px; background: #f0f0f2; }
    .cursor-ring.on-link { width: 12px; height: 12px; border-color: #b0b0b8; }
    a, button { cursor: none !important; }
  `;
  document.head.appendChild(style);

  const dot = document.createElement('div'); dot.className = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = -100, my = -100, dx = -100, dy = -100, rx = -100, ry = -100;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  const lerp = (a, b, t) => a + (b - a) * t;

  function anim() {
    // ערכי ה-LERP המדויקים מ-index.html: 0.45 לנקודה ו-0.25 לטבעת
    dx = lerp(dx, mx, 0.45); dy = lerp(dy, my, 0.45);
    rx = lerp(rx, mx, 0.25); ry = lerp(ry, my, 0.25);
    
    dot.style.transform = "translate(" + dx + "px," + dy + "px) translate(-50%,-50%)";
    ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
    requestAnimationFrame(anim);
  }
  anim();

  // טיפול באינטראקציה עם לינקים (on-link)
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button')) {
      dot.classList.add('on-link');
      ring.classList.add('on-link');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button')) {
      dot.classList.remove('on-link');
      ring.classList.remove('on-link');
    }
  });
})();
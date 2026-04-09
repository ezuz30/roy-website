// ==========================================
// 1. HEADER / NAV COMPONENT
// ==========================================
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .nav-header { flex-shrink: 0; height: 90px; display: flex; align-items: center; justify-content: space-between; padding: 0 6vw; border-bottom: 1px solid #2a2a2e; z-index: 1000; position: fixed; top: 0; left: 0; right: 0; background: #0a0a0a; }
        .nav-logo { font-family: 'Raleway', sans-serif; font-weight: 300; font-size: 1.4rem; letter-spacing: 0.12em; text-decoration: none; color: #f0f0f2; }
        .nav-logo .accent { color: #E32119; font-weight: 400; }
        .nav-links { display: flex; gap: 3rem; list-style: none; margin: 0; padding: 0; }
        .nav-links a { font-family: 'Barlow Condensed', sans-serif; font-weight: 300; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; color: #b0b0b8; position: relative; transition: 0.3s; }
        .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #E32119; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-links a:hover::after { width: 100%; }
        .nav-links a:hover { color: #f0f0f2; }
        @media (max-width: 768px) { .nav-links { display: none; } }
      </style>
      <header class="nav-header">
        <a href="index.html" class="nav-logo">R<span class="accent">O</span>Y EZUZ</a>
        <ul class="nav-links">
          <li><a href="selected-work.html">Collection</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="#" id="openCollaborate">Collaborate</a></li>
        </ul>
      </header>
    `;
  }
}
customElements.define('site-nav', SiteNav);

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
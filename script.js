// Tiny JS: year + typewriter effect with zero deps
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Kebab menu toggle
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu on link click (mobile UX)
    nav.addEventListener('click', function (e) {
      if (e.target && e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('open')) return;
      if (e.target === toggle || toggle.contains(e.target)) return;
      if (e.target === nav || nav.contains(e.target)) return;
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if ((savedTheme === 'dark') || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
    
    // Update aria-label based on current theme
    function updateAriaLabel() {
      const isDark = document.documentElement.classList.contains('dark-theme');
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    
    updateAriaLabel();

    themeToggle.addEventListener('click', function () {
      const isDark = document.documentElement.classList.contains('dark-theme');
      document.documentElement.classList.toggle('dark-theme');
      document.documentElement.classList.toggle('light-theme');
      if (!isDark) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateAriaLabel();
    });
  }

  // Typewriter effect
  const el = document.getElementById('typewriter');
  if (!el) return;
  const messages = [
    'We build drones.',
    'Unmanned Aerial Systems.',
    'Autonomy. Payloads. Performance.'
  ];
  let idx = 0, pos = 0, deleting = false;
  const speedWrite = 28, speedDelete = 16, pause = 900;

  function tick() {
    const msg = messages[idx];
    if (!deleting) {
      pos++;
      el.textContent = msg.slice(0, pos);
      if (pos === msg.length) {
        deleting = true;
        return setTimeout(tick, pause);
      }
      return setTimeout(tick, speedWrite);
    } else {
      pos--;
      el.textContent = msg.slice(0, pos);
      if (pos === 0) {
        deleting = false;
        idx = (idx + 1) % messages.length;
        return setTimeout(tick, speedWrite);
      }
      return setTimeout(tick, speedDelete);
    }
  }

  setTimeout(tick, 700);
})();
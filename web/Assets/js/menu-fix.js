(() => {
  function closeMenu() {
    const nav = document.getElementById('siteNav');
    const toggle = document.getElementById('menuToggle');
    if (!nav) return;
    nav.classList.remove('open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
    }
  }

  function bindMenuDismiss() {
    const nav = document.getElementById('siteNav');
    const toggle = document.getElementById('menuToggle');
    if (!nav || !toggle || document.documentElement.dataset.kkfMenuDismiss === '1') return;

    document.documentElement.dataset.kkfMenuDismiss = '1';

    // Close when the user taps/clicks anywhere outside the navigation area.
    document.addEventListener('pointerdown', (event) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    }, true);

    // Close after selecting any navigation link on mobile.
    nav.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link) closeMenu();
    });

    // Escape should always close the menu.
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    // If the viewport becomes desktop-sized, reset the mobile menu state.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1020) closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindMenuDismiss, { once: true });
  } else {
    bindMenuDismiss();
  }
})();

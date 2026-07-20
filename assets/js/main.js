/* Ferme de Basseilles — header variants: shared behaviour */
(function () {
  'use strict';

  /* ---------- Variant switcher ---------- */
  var VARIANTS = [
    { file: 'variant-1.html', label: '4 boutons distincts' },
    { file: 'variant-2.html', label: 'Menu déroulant « Mon séjour »' },
    { file: 'variant-3.html', label: 'Logo centré, 2 boutons de chaque côté' },
    { file: 'variant-4.html', label: 'Liens dans la barre supérieure + CTA' },
    { file: 'variant-5.html', label: 'Barre d’actions mobile (app-like)' }
  ];

  var current = parseInt(document.body.getAttribute('data-variant') || '0', 10);

  function buildSwitcher() {
    var sw = document.createElement('nav');
    sw.className = 'switcher';
    sw.setAttribute('aria-label', 'Changer de variante de header');

    var home = document.createElement('a');
    home.href = 'index.html';
    home.className = 'sw-home';
    home.title = 'Toutes les variantes';
    home.textContent = '⌂';
    sw.appendChild(home);

    VARIANTS.forEach(function (v, i) {
      var a = document.createElement('a');
      a.href = v.file;
      a.textContent = String(i + 1);
      a.title = 'Variante ' + (i + 1) + ' — ' + v.label;
      if (i + 1 === current) a.className = 'current';
      sw.appendChild(a);
    });

    if (current > 0) {
      var label = document.createElement('span');
      label.className = 'sw-label';
      label.textContent = VARIANTS[current - 1].label;
      sw.appendChild(label);
    }

    document.body.appendChild(sw);
  }

  buildSwitcher();

  /* arrow keys: navigate between variants */
  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input, textarea, select')) return;
    if (!current) return;
    if (e.key === 'ArrowRight' && current < VARIANTS.length) {
      window.location.href = VARIANTS[current].file;
    } else if (e.key === 'ArrowLeft' && current > 1) {
      window.location.href = VARIANTS[current - 2].file;
    }
  });

  /* ---------- Mobile drawer ---------- */
  var burger = document.querySelector('.burger');
  var overlay = document.querySelector('.drawer-overlay');
  var closeBtn = document.querySelector('.drawer-close');

  function closeDrawer() { document.body.classList.remove('drawer-open'); }

  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('drawer-open');
    });
  }
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- Generic click-toggles (lang, submenus, action dropdowns) ---------- */
  function wireToggle(rootSelector, btnSelector) {
    document.querySelectorAll(rootSelector).forEach(function (root) {
      var btn = root.querySelector(btnSelector);
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var wasOpen = root.classList.contains('open');
        document.querySelectorAll(rootSelector + '.open').forEach(function (o) {
          o.classList.remove('open');
        });
        if (!wasOpen) root.classList.add('open');
      });
    });
  }

  wireToggle('.lang', '.lang-btn');
  wireToggle('.actions-dd', '.actions-dd-btn');
  wireToggle('.navbar .has-submenu', ':scope > a');
  wireToggle('.drawer-nav .has-submenu', ':scope > a');

  /* close any open dropdown on outside click */
  document.addEventListener('click', function () {
    document.querySelectorAll('.lang.open, .actions-dd.open, .has-submenu.open')
      .forEach(function (o) { o.classList.remove('open'); });
  });
})();

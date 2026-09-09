/* ==========================================================================
   Bubble Budget — landing page interactions
   Vanilla JS, no dependencies. Everything degrades gracefully without it.
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- footer */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------- nav on scroll */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------- reveal on scroll-in */
  var revealables = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ====================================================================
     Interactive bubble canvas
     ==================================================================== */

  var stage = document.getElementById('stage');
  if (!stage) return;

  var MONTHLY_CAP = 1800;

  // size / left / top are percentages of the stage box.
  var CATEGORIES = [
    { name: 'Groceries',  color: '#2DD4BF', spent: 412.60, cap: 550, size: 30, left: 5,  top: 12 },
    { name: 'Eating out', color: '#A78BFA', spent: 298.15, cap: 400, size: 24, left: 42, top: 5  },
    { name: 'Transport',  color: '#FBBF24', spent: 216.00, cap: 250, size: 20, left: 73, top: 23 },
    { name: 'Coffee',     color: '#38BDF8', spent: 174.50, cap: 250, size: 17, left: 8,  top: 47 },
    { name: 'Subs',       color: '#FB7185', spent: 128.90, cap: 120, size: 15, left: 34, top: 39 },
    { name: 'Fun',        color: '#A3E635', spent: 53.85,  cap: 200, size: 13, left: 62, top: 55 }
  ];

  var sheet      = document.getElementById('sheet');
  var sheetName  = document.getElementById('sheetName');
  var sheetDot   = document.getElementById('sheetDot');
  var sheetAmt   = document.getElementById('sheetAmount');
  var sheetClose = document.getElementById('sheetClose');
  var sheetSave  = document.getElementById('sheetSave');
  var stageTotal = document.getElementById('stageTotal');
  var stageHint  = document.getElementById('stageHint');

  var active = null;   // index of the category currently open
  var entry  = '';     // digits typed into the keypad

  var money = function (n) {
    return '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  /* ------------------------------------------------------ build bubbles */

  CATEGORIES.forEach(function (cat, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'bubble';
    b.dataset.index = String(i);
    b.style.width  = cat.size + '%';
    b.style.aspectRatio = '1';
    b.style.left = cat.left + '%';
    b.style.top  = cat.top + '%';
    b.style.background = 'radial-gradient(circle at 34% 26%, ' + hexToRgba(cat.color, 0.5) +
                         ', ' + hexToRgba(cat.color, 0.26) + ' 62%)';
    b.style.setProperty('--dur', (7.5 + i * 0.9).toFixed(1) + 's');
    b.style.setProperty('--delay', (i * 0.55).toFixed(2) + 's');
    b.innerHTML = '<span class="b-name">' + cat.name + '</span>' +
                  '<span class="b-amt">' + money(cat.spent) + '</span>';
    b.setAttribute('aria-label', 'Log an expense in ' + cat.name +
                   '. Currently ' + money(cat.spent) + ' of ' + money(cat.cap) + '.');
    cat.el = b;
    applyRing(cat);
    stage.appendChild(b);
  });

  function hexToRgba(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  function applyRing(cat) {
    var pct = cat.spent / cat.cap;
    cat.el.classList.toggle('warn', pct >= 0.8 && pct < 1);
    cat.el.classList.toggle('over', pct >= 1);
  }

  function refreshTotal() {
    var total = CATEGORIES.reduce(function (sum, c) { return sum + c.spent; }, 0);
    if (stageTotal) stageTotal.textContent = money(total) + ' of ' + money(MONTHLY_CAP);
  }
  refreshTotal();

  /* -------------------------------------------------------- open / close */

  function openSheet(i) {
    active = i;
    entry = '';
    var cat = CATEGORIES[i];
    sheetName.textContent = cat.name;
    sheetDot.style.background = cat.color;
    sheetAmt.textContent = '$0';
    sheet.classList.add('open');
    stage.classList.add('sheet-open');
    if (stageHint) stageHint.classList.add('hide');
  }

  function closeSheet() {
    sheet.classList.remove('open');
    stage.classList.remove('sheet-open');
    active = null;
    entry = '';
  }

  stage.addEventListener('click', function (e) {
    var b = e.target.closest('.bubble');
    if (!b) return;
    openSheet(Number(b.dataset.index));
  });

  sheetClose.addEventListener('click', closeSheet);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sheet.classList.contains('open')) closeSheet();
  });

  /* ------------------------------------------------------------- keypad */

  function renderEntry() {
    var val = entry === '' ? 0 : parseInt(entry, 10);
    sheetAmt.textContent = '$' + val.toLocaleString('en-AU');
  }

  sheet.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (chip) {
      commit(Number(chip.dataset.add));
      return;
    }

    var key = e.target.closest('.key');
    if (!key || !key.dataset.key) return;

    var k = key.dataset.key;
    if (k === 'del') {
      entry = entry.slice(0, -1);
    } else if (entry.length < 6) {
      entry = (entry === '' && k === '00') ? '' : entry + k;
    }
    renderEntry();
  });

  sheetSave.addEventListener('click', function () {
    var val = entry === '' ? 0 : parseInt(entry, 10);
    if (val > 0) commit(val);
  });

  /* ------------------------------------------------------------- commit */

  function commit(amount) {
    if (active === null) return;
    var cat = CATEGORIES[active];

    cat.spent += amount;
    cat.size = Math.min(cat.size + amount / 55, 34);

    cat.el.style.width = cat.size.toFixed(2) + '%';
    cat.el.querySelector('.b-amt').textContent = money(cat.spent);
    cat.el.setAttribute('aria-label', 'Log an expense in ' + cat.name +
                        '. Currently ' + money(cat.spent) + ' of ' + money(cat.cap) + '.');
    applyRing(cat);
    refreshTotal();

    if (!reduceMotion) {
      cat.el.classList.remove('pop');
      void cat.el.offsetWidth;      // restart the animation
      cat.el.classList.add('pop');
    }

    closeSheet();
  }

})();

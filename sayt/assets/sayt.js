
(function () {
  function setLang(v) {
    document.documentElement.dataset.l = v;
    try { localStorage.setItem('sayt-lang', v); } catch (e) {}
  }
  try {
    var s = localStorage.getItem('sayt-lang');
    if (s) document.documentElement.dataset.l = s;
  } catch (e) {}
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.set); });
  });

  // Maʼlumotnoma sahifalari formulalarni oʻz skripti bilan chizadi — ikkinchi
  // marta chizilsa, KaTeX oʻz chiqishini manba deb oʻqib, buzib qoʻyadi.
  document.querySelectorAll('.k').forEach(function (e) {
    if (e.querySelector('.katex')) return;
    try {
      katex.render(e.textContent, e, {
        throwOnError: false, displayMode: e.classList.contains('kdisp')
      });
    } catch (x) {}
  });

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------------- menyu
  var bar = document.querySelector('.sitenav');
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('menyu');
  var drop = document.querySelector('.drop');
  var dropb = document.querySelector('.dropb');

  if (burger && panel) {
    burger.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open && drop) { drop.classList.remove('open'); dropb.setAttribute('aria-expanded', 'false'); }
    });
  }
  if (drop && dropb) {
    dropb.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('open');
      dropb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
        dropb.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      drop.classList.remove('open');
      dropb.setAttribute('aria-expanded', 'false');
      if (panel) { panel.classList.remove('open'); }
      if (burger) { burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  // yopishgan holat + oʻqish chizigʻi
  var prog = document.querySelector('.navp i');
  var tick = false;
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (bar) bar.classList.toggle('stuck', y > 24);
    if (prog) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? Math.min(100, y / h * 100) : 0) + '%';
    }
    tick = false;
  }
  window.addEventListener('scroll', function () {
    if (!tick) { tick = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // --------------------------------------------------- koʻringanda chiqsin
  var targets = document.querySelectorAll(
    '.cards .card, .blk, ul.dl>li, .variant, .ticker, table.ov');
  if (!still && 'IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (rows) {
      rows.forEach(function (r) {
        if (!r.isIntersecting) return;
        r.target.classList.add('in');
        io.unobserve(r.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i, 6) * 45 + 'ms';
      io.observe(el);
    });
  }

  // --------------------------------------------------- raqamlar sanalsin
  if (!still) {
    document.querySelectorAll('.stats b').forEach(function (b) {
      var end = parseInt(b.textContent.replace(/\D/g, ''), 10);
      if (!end || end > 100000) return;
      var t0 = null, dur = 900;
      function step(t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur);
        b.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
        if (k < 1) window.requestAnimationFrame(step);
      }
      b.textContent = '0';
      window.requestAnimationFrame(step);
    });
  }

  // savollar sahifasining filtri — faqat savollar sahifasida
  var state = { sinf: 'all', mavzu: 'all' };
  var cards = document.querySelectorAll('.qcard');
  if (!cards.length) { return; }
  var shown = document.getElementById('shown');

  function apply() {
    var n = 0;
    cards.forEach(function (c) {
      var ok = (state.sinf === 'all' || c.dataset.sinf === state.sinf) &&
               (state.mavzu === 'all' || c.dataset.mavzu === state.mavzu);
      c.classList.toggle('off', !ok);
      if (ok) n++;
    });
    document.querySelectorAll('.variant').forEach(function (v) {
      v.classList.toggle('off', !v.querySelector('.qcard:not(.off)'));
    });
    if (shown) shown.textContent = n;
  }

  document.querySelectorAll('.fbtns button').forEach(function (b) {
    b.addEventListener('click', function () {
      state[b.dataset.f] = b.dataset.v;
      document.querySelectorAll('.fbtns button[data-f="' + b.dataset.f + '"]')
        .forEach(function (o) { o.classList.toggle('on', o.dataset.v === b.dataset.v); });
      apply();
    });
  });
  document.querySelectorAll('.fbtns button[data-v="all"]')
    .forEach(function (b) { b.classList.add('on'); });
  apply();
})();

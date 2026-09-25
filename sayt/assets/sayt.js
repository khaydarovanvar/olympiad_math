
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

  document.querySelectorAll('.k').forEach(function (e) {
    try {
      katex.render(e.textContent, e, {
        throwOnError: false, displayMode: e.classList.contains('kdisp')
      });
    } catch (x) {}
  });

  // savollar sahifasining filtri
  var state = { sinf: 'all', mavzu: 'all' };
  var cards = document.querySelectorAll('.qcard');
  if (!cards.length) return;
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

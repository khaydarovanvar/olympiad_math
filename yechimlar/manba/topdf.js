const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const dir='/tmp/sol';
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const g of process.argv.slice(2)) {
    const p = await b.newPage({ viewport: { width: 794, height: 1123 } });
    const errs=[]; p.on('pageerror', e=>errs.push(String(e)));
    await p.goto('file://'+dir+'/'+g+'.html', { waitUntil:'load' });
    await p.waitForFunction('window.__ready===1');
    await p.waitForTimeout(1200);
    const bad = await p.evaluate(()=> (window.__texerr||[]).slice(0,8));
    await p.pdf({ path: dir+'/'+g+'.pdf', format:'A4', printBackground:true });
    await p.screenshot({ path: dir+'/'+g+'_preview.png' });
    console.log(g, '| TeX errors:', bad.length, bad.join(' || '), '| js:', errs.length);
    await p.close();
  }
  await b.close();
})();

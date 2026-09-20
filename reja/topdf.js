// Renders each {html, pdf} job through Chromium. Google Fonts is unreachable
// from the build box, so the request is dropped and the local fallback is used.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const jobs = require(process.argv[2]);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const j of jobs) {
    const p = await b.newPage();
    await p.route('**://fonts.g*/**', r => r.abort());
    await p.emulateMedia({ media: 'print', colorScheme: 'light' });
    await p.goto('file://' + j.html, { waitUntil: 'load' });
    await p.waitForTimeout(2500);
    await p.pdf({ path: j.pdf, format: 'A4', printBackground: true });
    console.log('  ' + j.pdf.replace(/.*\//, ''));
    await p.close();
  }
  await b.close();
})();

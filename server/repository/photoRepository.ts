import { chromium } from 'playwright';

export const getPhoto = async (searchQuery: string) => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Googleで検索を実行
  await page.goto('https://www.google.com');

  // セレクタをplaceholder属性を使用して更新
  await page.getByLabel('検索', { exact: true }).click();
  await page.getByLabel('検索', { exact: true }).fill(searchQuery);
  await page.keyboard.press('Enter');

  // 検索結果が表示されるまで待機
  await page.waitForSelector('h3');

  await page.getByRole('link', { name: '画像', exact: true }).click();

  await page.waitForSelector('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');

  const newsHeadings = await page.$$('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');

  for (const newsHeading of newsHeadings) {
    // newsHeadingがDOM上に存在するか確認
    const isAttached = await page.evaluate(
      (element) => document.body.contains(element),
      newsHeading
    );
    if (!isAttached) continue;

    await newsHeading.click();

    console.log('aaa');
    await page.waitForTimeout(1000);
    console.log('bbb');
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    console.log('ccc');
    await page.getByText('Download file').click();
    console.log('ddd');
    const download = await downloadPromise;
    console.log('eee');
    console.log(await download.path());
  }

  // Wait for the download process to complete.

  await browser.close();
};

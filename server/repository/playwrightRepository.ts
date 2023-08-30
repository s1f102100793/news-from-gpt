import { chromium } from 'playwright';

export const getNewsFromGoogleSearch = async (searchQuery: string) => {
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

  await page.getByRole('link', { name: 'ニュース', exact: true }).click();

  await page.waitForSelector('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');
  // // 最初のニュースリンクをクリック
  // const firstNewsLink = await page.$('div n0jPhd ynAwRc MBeuO nDgy9d a');
  // if (firstNewsLink) {
  //   await firstNewsLink.click();
  //   await page.waitForLoadState('load'); // 新しいページがロードされるのを待機
  // } else {
  //   console.log('ニュースリンクが見つかりませんでした。');
  // }
  const newsHeading = await page.$('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');
  if (newsHeading) {
    await newsHeading.click();
    // await page.waitForLoadState('load');
    const res = await page.getByText(`${searchQuery}`).first();
    const res1 = await page.getByText(`${searchQuery}`).nth(2);
    const text: string | null = await res.textContent();
    const text1: string | null = await res1.textContent();
    await browser.close();
    console.log(text1);
    return res;
  } else {
    console.log('見出しが見つかりませんでした。');
  }

  // <div class="n0jPhd ynAwRc MBeuO nDgy9d" aria-level="3" role="heading" style="-webkit-line-clamp:3">Scraping the unscrapable in Python using Playwright</div>

  // // セレクタを使用して要素を取得
  // const headingElement = await page.$('.n0jPhd.ynAwRc.MBeuO.nDgy9d');

  // if (headingElement) {
  //   // 要素をクリック
  //   await headingElement.click();
  //   await page.waitForLoadState('load'); // 新しいページがロードされるのを待機
  // } else {
  //   console.log('指定された要素が見つかりませんでした。');
  // }
  // const firstNewsLink = await page.getByRole('link', { role;'heding' }).click();
  // // const firstNewsLink = await page.$('article h3 a');
  // if (firstNewsLink) {
  //   await firstNewsLink.click();
  //   await page.waitForLoadState('load'); // 新しいページがロードされるのを待機
  // } else {
  //   console.log('ニュースリンクが見つかりませんでした。');
  // }

  // const firstNewsLink = await page.$$('article h3 a');
  // if (firstNewsLink.length > 0) {
  //   await firstNewsLink[0].click();

  //   // 新しいページがロードされるのを待機
  //   await page.waitForLoadState('load');

  //   // ニュースの主要なテキスト内容を取得
  //   const newsContent = await page.$$eval('p', (elements) =>
  //     elements.map((el) => el.textContent).join('\n')
  //   );
  //   console.log(newsContent);
  // } else {
  //   console.log('ニュースリンクが見つかりませんでした。');
  // }

  await browser.close();
};

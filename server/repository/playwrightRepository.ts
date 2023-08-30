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

  const newsLinks = await page.getByRole('link', { name: 'ニュース', exact: true }).click();

  if (newsLinks.length > 0) {
    await newsLinks[0].click();

    // 新しいページがロードされるのを待機
    await page.waitForLoadState('load');

    // ニュースの主要なテキスト内容を取得
    // 注意: これは一般的なセレクタです。実際のサイトに合わせて調整が必要です。
    const newsContent = await page.$$eval('p', (elements) =>
      elements.map((el) => el.textContent).join('\n')
    );
    console.log(newsContent);
  } else {
    console.log('ニュースリンクが見つかりませんでした。');
  }

  await browser.close();
};

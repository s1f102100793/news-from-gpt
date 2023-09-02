import { chromium } from 'playwright';

export const getYoutube = async (searchQuery: string) => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Googleで検索を実行
  await page.goto('https://www.google.com');

  // セレクタをplaceholder属性を使用して更新
  await page.getByLabel('検索', { exact: true }).click();
  await page.getByLabel('検索', { exact: true }).fill('youtube');
  await page.keyboard.press('Enter');

  // 検索結果が表示されるまで待機
  await page.waitForSelector('h3');
  await page
    .getByRole('link', { name: 'YouTube: ホーム YouTube https://www.youtube.com › ...' })
    .click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill(searchQuery);
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByLabel('Search filters').click();
  await page.getByRole('link', { name: 'View count' }).click();
};

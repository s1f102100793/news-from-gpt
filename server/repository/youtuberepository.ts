export const getYoutube = async (searchQuery: string) => {
  try {
    const playwright = await require('playwright-core');

    const browser = await playwright.chromium.launch({ channel: 'chrome', headless: false });

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
    await page.waitForNavigation();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill(searchQuery);
    await page.getByPlaceholder('Search').press('Enter');

    await page.waitForTimeout(1000);

    await page.click('yt-formatted-string.style-scope.ytd-video-renderer:nth-of-type(1)');

    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Share' }).click();
    await page.getByRole('button', { name: 'Embed' }).click();
    const textValue = await page
      .locator('.textarea-container .style-scope.tp-yt-iron-autogrow-textarea')
      .inputValue();

    await page.locator('#close-panel-icon div').click();
    await browser.close();
    return textValue;
  } catch (error: any) {
    console.error('Error occurred:', error.message);
  }
};

export const getYoutube = async (searchQuery: string) => {
  const playwright = await require('playwright-core');

  const browser = await playwright.chromium.launch({
    headless: true,
    locale: 'ja-JP',
    chromiumSandbox: false,
  });
  try {
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
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('検索').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('検索').fill(searchQuery);
    await page.getByPlaceholder('検索').press('Enter');

    await page.waitForTimeout(1000);

    await page.click('yt-formatted-string.style-scope.ytd-video-renderer:nth-of-type(1)');

    console.log('share');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: '共有' }).click();
    console.log('embed');
    await page.getByRole('button', { name: '埋め込む' }).click();
    const textValue = await page
      .locator('.textarea-container .style-scope.tp-yt-iron-autogrow-textarea')
      .inputValue();

    await page.locator('#close-panel-icon div').click();
    await page.waitForTimeout(1000);
    await browser.close();
    return textValue;
  } catch (error: any) {
    console.error('Error occurred:', error.message);
    await browser.close();
    const playwright = await require('playwright-core');

    const browser1 = await playwright.chromium.launch({
      headless: true,
      locale: 'ja-JP',
      chromiumSandbox: false,
    });

    const page = await browser1.newPage();
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
    await page.getByPlaceholder('検索').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('検索').fill(searchQuery);
    await page.getByPlaceholder('検索').press('Enter');

    await page.waitForTimeout(1000);

    await page.getByLabel('Search filters').click();

    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Video', exact: true }).click();

    await page.waitForTimeout(1000);

    await page.getByLabel('Search filters').click();

    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: '4 - 20 minutes' }).click();

    await page.waitForTimeout(1000);

    await page.click('yt-formatted-string.style-scope.ytd-video-renderer:nth-of-type(1)');

    console.log('share');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Share' }).click();
    await page.getByRole('button', { name: 'Embed' }).click();
    const textValue = await page
      .locator('.textarea-container .style-scope.tp-yt-iron-autogrow-textarea')
      .inputValue();

    await page.locator('#close-panel-icon div').click();
    await page.waitForTimeout(1000);
    await browser1.close();
    return textValue;
  }
};

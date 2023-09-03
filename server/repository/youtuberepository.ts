export const getYoutube = async (searchQuery: string) => {
  console.log('searchQuery', searchQuery);
  try {
    const playwright = await require('playwright-core');
    console.log('aaaaa');

    const browser = await playwright.chromium.launch({ channel: 'chrome', headless: false });
    console.log('bbbbb');

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
    // await page.getByLabel('Search filters').click();
    // await page.getByRole('link', { name: 'View count' }).click();
    await page.waitForTimeout(1000);
    console.log('aaaa');
    await page.click('yt-formatted-string.style-scope.ytd-video-renderer:nth-of-type(1)');
    console.log('bbbb');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Share' }).click();
    await page.getByRole('button', { name: 'Embed' }).click();
    // const textValue = await page.locator('#textarea').getAttribute('value');
    // const textValue = await page.locator('#textarea').innerText();
    // // const textValue2 = await page.getByRole('#textarea').innerText();
    // const textValue = await page
    //   .locator('.textarea-container .style-scope.tp-yt-iron-autogrow-textarea')
    //   .innerText();
    const textValue = await page
      .locator('.textarea-container .style-scope.tp-yt-iron-autogrow-textarea')
      .inputValue();

    // const text = <iframe width="560" height="315" src="https://www.youtube.com/embed/R_QoIn3bD-o?si=sFBual0YuGh3UGKO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    // if (typeof textValue === 'string' && textValue.trim() !== '') {
    console.log('textValue', textValue);
    // }

    // await page.locator('#textarea').click();
    // await page.locator('#textarea').press('Control+c');
    // const aaa = await page.getByRole('button', { name: 'Copy' }).click();
    // console.log('aaa', aaa);
    await page.locator('#close-panel-icon div').click();
    await browser.close();
    return textValue;
  } catch (error: any) {
    console.error('Error occurred:', error.message);
  }
};

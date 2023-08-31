import { chromium } from 'playwright';

const isValidText = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value !== '';
};

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
  // // }

  // // 動いた
  // const newsHeading = await page.$('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');
  // if (newsHeading) {
  //   await newsHeading.click();

  //   const elements = await page.$$(`:text("${searchQuery}")`);
  //   const texts: (string | null)[] = [];

  //   for (const element of elements) {
  //     const text = await element.textContent();
  //     if (isValidText(text)) {
  //       texts.push(text);
  //     }
  //   }
  //   // aaa
  //   await browser.close();

  //   return texts; // これでテキストの配列を返します
  // } else {
  //   console.log('見出しが見つかりませんでした。');
  // }
  // //

  const getAllTextsFromPage = async (page: any, searchQuery: string) => {
    const elements = await page.$$(`:text("${searchQuery}")`);
    const texts: (string | null)[] = [];

    for (const element of elements) {
      const text = await element.textContent();
      if (isValidText(text)) {
        texts.push(text);
      }
    }

    return texts;
  };

  // すべてのニュース見出しを取得
  const newsHeadings = await page.$$('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');
  console.log('newsHeadings.length', newsHeadings.length);

  if (newsHeadings.length === 0) {
    console.log('見出しが見つかりませんでした。');
    return [];
  }
  for (const newsHeading of newsHeadings) {
    try {
      // newsHeadingがDOM上に存在するか確認
      const isAttached = await page.evaluate(
        (element) => document.body.contains(element),
        newsHeading
      );
      if (!isAttached) continue;

      await newsHeading.click();

      const texts = await getAllTextsFromPage(page, searchQuery);
      console.log('texts.length', texts.length);

      if (texts.length > 0) {
        await browser.close();
        return texts;
      }
    } catch (error) {
      console.error('Error during processing the news heading:', error.message);
    }
  }

  await browser.close();
  console.log('適切なテキストが見つかりませんでした。');
  return [];

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

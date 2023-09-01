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
  await page.waitForSelector('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');

  // この上は確定

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
      // console.log('aaaa');
      // await page.waitForSelector(page.$$(`:text("${searchQuery}")`));
      // console.log('bbbb');
      console.log('aaa');
      await page.waitForTimeout(1000);

      const texts = await getAllTextsFromPage(page, searchQuery);
      console.log('texts.length', texts.length);

      if (texts.length > 0) {
        await browser.close();
        return texts;
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        console.error('Error during processing the news heading:', error.message);
      } else {
        console.error('Error during processing the news heading:', error);
      }
    }
  }

  await browser.close();
  console.log('適切なテキストが見つかりませんでした。');
  return [];
};

// いる

// export const getNewsFromGoogleSearch = async (searchQuery: string) => {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();

//   await navigateToGoogleNews(searchQuery, page);

//   const texts = await processNewsHeadings(page, searchQuery);

//   await browser.close();

//   if (texts.length === 0) {
//     console.log('適切なテキストが見つかりませんでした。');
//   }

//   return texts;
// };

// const navigateToGoogleNews = async (searchQuery: string, page: any) => {
//   await page.goto('https://www.google.com');
//   await page.getByLabel('検索', { exact: true }).click();
//   await page.getByLabel('検索', { exact: true }).fill(searchQuery);
//   await page.keyboard.press('Enter');

//   await page.waitForSelector('h3');
//   await page.getByRole('link', { name: 'ニュース', exact: true }).click();
//   await page.waitForSelector('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');
// };

// const processNewsHeadings = async (page: any, searchQuery: string) => {
//   const getAllTextsFromPage = async (page: any, searchQuery: string) => {
//     const elements = await page.$$(`:text("${searchQuery}")`);
//     const texts: (string | null)[] = [];

//     for (const element of elements) {
//       const text = await element.textContent();
//       if (isValidText(text)) {
//         texts.push(text);
//       }
//     }

//     return texts;
//   };

//   const newsHeadings = await page.$$('div.n0jPhd.ynAwRc.MBeuO.nDgy9d[role="heading"]');

//   if (newsHeadings.length === 0) {
//     console.log('見出しが見つかりませんでした。');
//     return [];
//   }
//   for (const newsHeading of newsHeadings) {
//     const isAttached: boolean = await page.evaluate(
//       (element: Element) => document.body.contains(element),
//       newsHeading
//     );

//     if (isAttached !== true) continue;

//     await newsHeading.click();
//     const texts = await getAllTextsFromPage(page, searchQuery);

//     if (texts.length > 0) {
//       return texts;
//     }
//   }

//   return [];
// };

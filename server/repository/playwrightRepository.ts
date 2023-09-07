import { chromium } from 'playwright';

const isValidText = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value !== '';
};

// eslint-disable-next-line complexity
export const getNewsFromGoogleSearch = async (
  searchQuery: string,
  startPercentage: number,
  endPercentage: number
) => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
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

  const getTextsFromPageByPercentage = async (
    page: any,
    searchQuery: string,
    startPercentage: number,
    endPercentage: number
  ) => {
    const elements = await page.$$(`:text("${searchQuery}")`);
    const startIdx = Math.floor(elements.length * (startPercentage / 100));
    const endIdx = Math.floor(elements.length * (endPercentage / 100));
    const texts: (string | null)[] = [];

    for (let i = startIdx; i < endIdx; i++) {
      const text = await elements[i].textContent();
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

      console.log('aaa');
      await page.waitForTimeout(1000);

      const texts = await getTextsFromPageByPercentage(
        page,
        searchQuery,
        startPercentage,
        endPercentage
      );
      console.log('texts.length', texts.length);

      if (texts.length > 0) {
        // await page.on('download')
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

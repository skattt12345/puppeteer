const puppeteer = require("puppeteer");

// import puppeteer from "puppeteer";

(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://bookopt.com.ua/?utm_source=google&utm_medium=cpc&utm_campaign=PM_painting_number&utm_content=&utm_term=&utm_id={campaign_id}&gclid=CjwKCAiA0syqBhBxEiwAeNx9N7ZEU0QUKGXAkRDv3BcORppWgBb6w4KryKuvINxMSiwuteETynEOjRoC0z4QAvD_BwE"
  );
  await page.waitForSelector(".UI-NAV-INPUT");
  // await page.click("button.icon-user");
  // await page.waitForNavigation({ waitUntil: "domcontentloaded" });
  // await page.click(".icon-menu");
  await page.type(".UI-SEARCH", "Текст, який ви хочете ввести");
})();

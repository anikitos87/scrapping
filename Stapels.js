import puppeteer from "puppeteer";

export const fetchPriceStapels = async (partNumber) => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  let url="https://www.staples.com/"+partNumber+"/directory_"+partNumber+"?sby=1";
  console.log("URL IS "+url);
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
//  const searchTextBox = await page.$('#searchInput');
//   searchTextBox.type(partNumber);
 
 
//   const searchButton = await page.$('search-bar-input__searchIcon');
  

//   //searchButton.click();

//   //await page.keyboard.press('Enter');
//   await page.waitForTimeout(80);
await page.waitForTimeout(2000);

  const spanElement = await page.$('span.standard-tile__final_price');
  console.log("SPAN ELEMENT"+spanElement);
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  console.log("SPAN ELEMENT"+bodyHTML);

  
  
  
  // Get the content of the span element
  const content = await page.evaluate(element => element.textContent, spanElement);
  console.log("CONTENT"+content);
  const priceList = content.split(" ");
  console.log("PRICELIST"+priceList);
  let price = priceList[2];
  await browser.close();

 
  return price;

  //const html = await page.evaluate(() => document.documentElement.outerHTML);

  //console.log('Page HTML:', html);
};

// Start the scraping

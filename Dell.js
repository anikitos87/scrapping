import puppeteer from "puppeteer";

export const fetchPriceDell = async (partNumber) => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.dell.com/en-us", {
    waitUntil: "domcontentloaded",
  });
 const searchTextBox = await page.$('#mh-search-input');
  searchTextBox.type(partNumber);
 
 
 const searchButton = await page.$('search-bar-input__searchIcon');
  

  searchButton.click();

 // await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);

  const divElement = await page.$('div.ps-dell-price');


  const priceSpan = await divElement.$(':nth-child(2)');
  
 
  const content = await page.evaluate(element => element.textContent, priceSpan);
  //const priceList = content.split(" ");
  console.log('Span:', content);
  
  
  
 
 
  
  

//   console.log('Span content:', price);

  //const html = await page.evaluate(() => document.documentElement.outerHTML);

  //console.log('Page HTML:', html);
};

// Start the scraping

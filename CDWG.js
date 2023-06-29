import puppeteer from "puppeteer";
import 'dotenv/config'

export const fetchPriceCDWG = async (partNumber) => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    headless:true,
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.cdw.com/search/?key="+partNumber, {
    waitUntil: "domcontentloaded",
  });
//  const searchTextBox = await page.$('#search-input');
//   searchTextBox.type(partNumber);
 
//   const searchButton = await page.$('#gh-header-button-search');
 

//   searchButton.click();
 // await page.waitForTimeout(4000);

  const spanElement = await page.$('span.price-type-selected');
  
  // Get the content of the span element
  const content = await page.evaluate(element => element.textContent, spanElement);

  console.log('Span content:', content);

  return content;

  
};

// Start the scraping

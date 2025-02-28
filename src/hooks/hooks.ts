import { Before, After, World, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium, firefox, webkit } from "@playwright/test";
import * as dotenv from 'dotenv';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';

dotenv.config();

let browser: Browser;
let page: Page;
setDefaultTimeout(15 * 1000);
Before(async function () {
    // Initialize browser and open a new page before each scenario
    if(process.env.BROWSER_NAME=='chrome')
    {
        browser = await chromium.launch({ headless: process.env.HEADLESS=="true"});  
    }
    else if(process.env.BROWSER_NAME=='firefox')
    {
        browser = await firefox.launch({ headless: process.env.HEADLESS=="true"});    
    }
    else if(process.env.BROWSER_NAME=='safari')
    {
        browser = await webkit.launch({ headless: process.env.HEADLESS=="true"});    
    }
    else
    {
        throw new Error("Please set the proper browser!");
    }
    
    page = await browser.newPage();
    this.page = page;
});

After(async function (this: World & ITestCaseHookParameter, scenario: ITestCaseHookParameter) {
    // Add screenshot to HTML report and close the browser after each scenario to free up resources
    if (scenario.result?.status === Status.FAILED) {
        const screenshotPath = `reports/screenshots/${scenario.pickle.name}.png`;
        await page.screenshot({ path: screenshotPath });
        this.attach(await page.screenshot({ path: screenshotPath }), 'image/png');
      }
    await browser.close();
})
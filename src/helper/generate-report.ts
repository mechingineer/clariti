// generate-report.ts
import * as reporter from 'cucumber-html-reporter';

//This file is to generate the HTML report at the end of the execution
const options: reporter.Options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  storeScreenshots: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": "Local Machine",
    "Executed": "Remote"
  }
};

reporter.generate(options);
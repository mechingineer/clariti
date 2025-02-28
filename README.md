# Project Title
Clariti Automation Framework

## Description
The framework used in this demo project is Page Object Model with tests written in BDD format utilising Cucumber. This provides a robust and flexible structure for writing automated tests, ensuring higher code quality and faster release cycles.

## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage](#usage)
3. [Toling Info](#tooling-info)
4. [Project Structure](#project-structure)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Code of Conduct](#code-of-conduct)
7. [Issue Reporting](#issue-reporting)
8. [Pull Request Process](#pull-request-process)
9. [Documentation](#documentation)
10. [Contact Information](#contact-information)
11. [License](#license)

## Installation Instructions
1. Clone the repo
2. navigate to the project directory
3. Install the required dependencies using 'npm install' and 'npx playwright install'

## Usage
1. To execute all the feature files, use command 'npm test'
2. To execute a specific feature file, add a tag on the top of the feature file say '@regression'. Use command npx cucumber-js --tags "<TagName>"  

## Tooling Info:
Node Version - 20.18.0 <br />
Playwright Version - 10.8.2 <br />
Cucumber Version - 11.0.1 <br />
Cucumber HTML Report Version - 7.2.0

## Project Structure
1. All the test feature files are present under src/test/features
2. All the respective glue code TS files are present under src/test/steps
3. All the web locators are present in their respective page classes under src/pages
4. HTML Report generation code is present under src/helper
5. Hook configurations are present under src/hooks
6. All the environment variables are present in the root of the directory as .env. Supported values in env file are - 
 a. BASE_URL - URL of the application under test
 b. BRIWSER_NAME - Supported values are chrome, safari, firefox
 c. HEADLESS - Supported values are true and false. 

## Contribution Guidelines
- **Code Standards**: Follow the Typescript style guide (e.g., ESLint rules) for consistency. Please refer this for more information - https://google.github.io/styleguide/tsguide.html
- **Testing Requirements**: All new features must be accompanied by automated tests. Use the existing test structure as a guide. Please make use of re-usable step definitions already defined and avoid creating duplicate definitions.
- **Commit Messages**: Use clear and descriptive commit messages.(e.g., fix(tests): corrected the login test).
- **Branching Strategy**: Create a new branch for each feature or bug fix using the format feature/your-feature-name

## Code of Conduct
We expect all contributors to adhere to our code of conduct, promoting an inclusive and respectful community. Please treat everyone with respect and kindness.

## Issue Reporting
If you encounter any issues or bugs, please report them using the GitHub issue tracker. Include a detailed description and steps to reproduce the issue.

## Pull Request Process
1. Fork the repository and create your branch (git checkout -b feature/your-feature-name).
2. Make your changes and commit them (git commit -m "Add new feature").
3. Push to your branch (git push origin feature/your-feature-name).
4. Create a pull request, providing a clear description of your changes.

## Documentation
Please refer the confluence document for more detailed information on the framework's features and guidelines.

## Contact Information
Aseem Gupta - QA Manager

## License
This project is an intellectual property of Clariti Cloud.
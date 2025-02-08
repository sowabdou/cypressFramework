***Cypress Framework Setup & Test Execution***

**1. Pre-requisites**

Install Node.js
Ensure that Node.js is installed on your system. You can download it from here.

**2. Setup Instructions**

Clone the Repository
Clone the Cypress framework repository using the following command:
`git clone https://github.com/sowabdou/cypressFramework.git`
`cd <project-directory>`

Install Dependencies
Run the following command to install the required dependencies:
`npm install`

**3. Running the Tests**

Headed Mode (GUI Mode)
To run the Cypress tests with the UI (headed mode), use the following command:

`npx cypress open`

This will launch the Cypress UI, where you can select and run tests interactively.

Headless Mode (Run Entire Suite)
To run all tests in the background without the UI (headless mode), use the following command:
`npx cypress run`

Running Tests with Tags
To run specific sections of the test suite (e.g., only UI or API tests), use tags like @UI or @API in the command:

`npx cypress run --env tags="@UI"`

This will run only the tests that are tagged with @UI.

**4. Project Design**

Page Object Model (POM)
This project follows the Page Object Model (POM) design pattern. Each page in the application is represented by a separate class or object, with methods for interacting with the page elements. This helps make the tests more reusable and maintainable.

Behaviour Driven Development (BDD) with Cucumber
We use Cucumber with Gherkin syntax to write tests in a readable format. The tests are defined using .feature files, which describe the behavior in plain language.

**5. Directory Structure**

* cypress/e2e/:
Contains folders for different test types (e.g., API and UI). Each folder contains Gherkin .feature files that correspond to the tests.

* cypress/fixtures/:
Contains data files that are used during testing, such as credentials and mock data.

* cypress/screenshots/:
Screenshots of failed test cases are automatically saved here after a test run.

* cypress/support/DomainPages/:
Contains reusable methods for interacting with various pages of the application.

* cypress/support/Pages/:
Stores the page object selectors, which identify the elements on each page for testing.

* cypress/support/step_definitions/:
Contains the step definitions for the Gherkin .feature files. These definitions map each Gherkin step to actual code that performs the corresponding actions in the tests.

* cypress/cucumber-report.html:
Generates a detailed report of the test execution, including passed and failed test cases, and other relevant information.
![image](https://github.com/user-attachments/assets/1ed11802-82b2-4247-9098-d67e108f1831)


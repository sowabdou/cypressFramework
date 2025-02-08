1.  Pre-requisites
    Install Node.js

2.  Setup Instructions
    Clone the repository:
    git clone <repo-url>
    cd <project-directory>

        Install dependencies:

    npm install

3.  Running the Tests headed
    npx cypress open

4.  Running the entire suite
    npx cypress run

\*\*\* To run sections of the suite use tags @UI or @API
npx cypress run --env tags="@UI"

4.  Project design
    Page Object Model design
    Behaviour Driven Development using Cucumber

5.  Directory Structure
    cypress/e2e/: Contains folders for types of tests mainly API & Ui Tests.Each folder contains Gherkin feature files related to the test type
    cypress/fixtures/:Contains data files used for testing, like credentials
    cypress/screenshots: Save a screenshot of each failed test case after run.
    cypress/support/DomainPages: Contains files relevent to each page where we are saving reusable methods.
    cypress/support/Pages: Is where we are saving selectors for each page to be used during testing
    cypress/support/step_definitions: For each feature file we are definining or importing steps to be used during testing
    cypress?cucumber-report.html: generates a report detailed passed & failed test cases after run

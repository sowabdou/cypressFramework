import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../Pages/loginPage";

When("I login using {string} credentials", (state) => {
  cy.fixture("credentials").then((data) => {
    credentials = data;
    let index = state === "valid" ? 0 : 1;
    loginPage.emailInput().type(credentials[index].email);
    loginPage.passwordInput().type(credentials[index].password);
    loginPage.loginButton().click();
  });
});

Then("Verify error {string} is visible", (msg) => {
  loginPage.errorMessageText().contains(msg).should("be.visible");
});

When("I click on Logout", () => {
  loginPage.logoutButton().should("be.visible").click();
});

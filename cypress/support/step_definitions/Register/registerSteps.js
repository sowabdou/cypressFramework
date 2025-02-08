import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import RegisterDom from "../../DomainPages/RegisterDom";
import registerPage from "../../Pages/registerPage";

When("I navigate to Homepage", () => {
  cy.visit("/");
});

Then("I validate {string} page is displayed", (page) => {
  RegisterDom.validatePage(page);
});

When("I click on {string} Menu", (page) => {
  cy.contains(page).click();
});

Then("I validate the header {string} is displayed", (msg) => {
  registerPage.pageHeader().contains(msg).should("be.visible");
});

When("I Enter name and email", () => {
  registerPage.nameInput().should("be.visible").type("aaa");
  registerPage.emailInput().should("be.visible").type("aaa@testmail.com");
});

When("I fill in account information details", () => {
  RegisterDom.fillAccountInformation();
});

Then("I fill in address information details", () => {
  RegisterDom.fillAddressInformation();
});

When("I click on Continue Button", () => {
  registerPage.continueButton().click();
});

Then("I validate logged in as user is displayed", () => {
  cy.contains("Logged in as").should("be.visible");
});

When("I click on Delete Account Button", () => {
  registerPage.deleteAccountButton().click();
});

Then("I click on {string} Button", (btn) => {
  cy.contains("button", btn).click();
});

When("Enter name and already registered email address", () => {
  cy.fixture("credentials").then((data) => {
    credentials = data;

    registerPage.nameInput().should("be.visible").type(credentials[0].name);
    registerPage.emailInput().should("be.visible").type(credentials[0].email);
  });
});

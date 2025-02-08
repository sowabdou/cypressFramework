class RegisterPage {
  address1Input() {
    return cy.get('[id="address1"]');
  }
  address2Input() {
    return cy.get('[id="address2"]');
  }
  createAccountButton() {
    return cy.get('[data-qa="create-account"]');
  }
  companyInput() {
    return cy.get('[id="company"]');
  }
  continueButton() {
    return cy.get('[data-qa="continue-button"]');
  }
  countryDropdown() {
    return cy.get('[data-qa="country"]');
  }
  cityInput() {
    return cy.get('[id="city"]');
  }
  dayDropDown() {
    return cy.get('[id="days"]');
  }
  deleteAccountButton() {
    return cy.get('[href="/delete_account"]');
  }
  emailInput() {
    return cy.get('[data-qa="signup-email"]');
  }
  firstNameInput() {
    return cy.get('[id="first_name"]');
  }
  genderButton() {
    return cy.get('[id="id_gender1"]');
  }
  lastNameInput() {
    return cy.get('[id="last_name"]');
  }
  monthDropDown() {
    return cy.get('[id="months"]');
  }
  nameInput() {
    return cy.get('[data-qa="signup-name"]');
  }
  optinCheckbox() {
    return cy.get('[id="optin"]');
  }
  newsletterCheckox() {
    return cy.get('[id="newsletter"]');
  }
  pageHeader() {
    return cy.get('[class="title text-center"]');
  }
  passwordInput() {
    return cy.get('[id="password"]');
  }
  phoneNumberInput() {
    return cy.get('[id="mobile_number"]');
  }
  signupButton() {
    return cy.get('[data-qa="signup-button"]');
  }
  stateInput() {
    return cy.get('[id="state"]');
  }
  yearDropDown() {
    return cy.get('[id="years"]');
  }
  zipCodeInput() {
    return cy.get('[id="zipcode"]');
  }
}
const registerPage = new RegisterPage();
export default registerPage;

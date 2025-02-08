import registerPage from "../Pages/registerPage";
class RegisterDom {
  fillAccountInformation() {
    registerPage.genderButton().click();
    registerPage.passwordInput().type("1233456789");
    registerPage.dayDropDown().select("11");
    registerPage.monthDropDown().select("November");
    registerPage.yearDropDown().select("2011");
    registerPage.newsletterCheckox().check();
    registerPage.optinCheckbox().check();
  }

  fillAddressInformation() {
    registerPage.firstNameInput().type("Abd");
    registerPage.lastNameInput().type("Wad");
    registerPage.companyInput().type("ABTST");
    registerPage.address1Input().type("11 Main St");
    registerPage.address2Input().type("Suite 11");
    registerPage.countryDropdown().select("Canada");
    registerPage.stateInput().type("Quebec");
    registerPage.cityInput().type("Montreal");
    registerPage.zipCodeInput().type("H1H1H1");
    registerPage.phoneNumberInput().type("5555555555");
  }

  validatePage(page) {
    cy.contains(page)
      .should("be.visible")
      .invoke("attr", "style")
      .should("contain", "color: orange");
  }
}
export default new RegisterDom();

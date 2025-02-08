class loginPage {
  emailInput() {
    return cy.get('[class="login-form"] [name="email"]');
  }
  errorMessageText() {
    return cy.get('[style="color: red;"]');
  }
  loginButton() {
    return cy.get('[data-qa="login-button"]');
  }
  logoutButton() {
    return cy.get('[href="/logout"]');
  }
  passwordInput() {
    return cy.get('[class="login-form"] [name="password"]');
  }
}
const LoginPage = new loginPage();
export default LoginPage;

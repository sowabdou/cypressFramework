import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const jsonFilePath = "cypress/fixtures/apiResponse.json";

beforeEach(() => {
  cy.writeFile(jsonFilePath, "{}");
});

When("I send a {string} request for {string} endpoint", (method, endp) => {
  let url = Cypress.config("baseUrl");
  cy.request(method, `${url}/api/${endp}`).then((response) => {
    cy.writeFile("cypress/fixtures/apiResponse.json", response);
  });
});

Then("I Verify the response code is {int}", (code) => {
  cy.readFile(jsonFilePath).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(
      code,
      `The response code should be ${JSON.parse(response.body).responseCode}`
    );
  });
});

Then("I verify the list of product is provided", () => {
  cy.readFile(jsonFilePath).then((response) => {
    JSON.parse(response.body).products.forEach((product) => {
      cy.log(`Product ${product.id}: ${product.name} is displayed`);
    });
  });
});

Then("I verify the response Message is {string}", (msg) => {
  cy.readFile(jsonFilePath).then((response) => {
    expect(JSON.parse(response.body).message).to.eq(msg);
  });
});

Then("I verify the list of brands is provided", () => {
  cy.readFile(jsonFilePath).then((response) => {
    JSON.parse(response.body).brands.forEach((brand) => {
      cy.log(`Brand ${brand.id}: ${brand.brand} is displayed`);
    });
  });
});

When(
  "I send a {string} request for {string} endpoint with body parameters {string}",
  (mth, endp, param) => {
    let keyPair = param.split(",");
    let bodyData = {};
    keyPair.forEach((element) => {
      let key = element.split(":")[0];
      let value = element.split(":")[1];
      cy.log(key);
      cy.log(value);

      bodyData[key] = value;
    });

    let baseUrl = Cypress.config("baseUrl");

    cy.request({
      method: mth,
      url: `${baseUrl}/api/${endp}`,
      form: true,
      body: bodyData,
    }).then((response) => {
      console.log(response);
      cy.writeFile("cypress/fixtures/apiResponse.json", response);
    });
  }
);

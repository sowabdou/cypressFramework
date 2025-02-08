@API
Feature: I want to test Products API

    Scenario:API 1: Get All Products List
        When I send a "GET" request for "productsList" endpoint
        Then I Verify the response code is 200
        And I verify the list of product is provided

    Scenario: API 2: POST To All Products List
        When I send a "POST" request for "productsList" endpoint
        Then I Verify the response code is 405
        And  I verify the response Message is "This request method is not supported."




@API
Feature: I want to test the BrandList API

    Scenario: API 3: Get All Brands List
        When I send a "GET" request for "brandsList" endpoint
        Then I Verify the response code is 200
        And I verify the list of brands is provided

    Scenario: API 4: PUT To All Brands List
        When I send a "PUT" request for "brandsList" endpoint
        Then I Verify the response code is 405
        And  I verify the response Message is "This request method is not supported."

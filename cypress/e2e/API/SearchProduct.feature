@API
Feature: I want to test the Search Product API

    Scenario:API 5: POST To Search Product
        When I send a "POST" request for "searchProduct" endpoint with body parameters "search_product:top"
        Then I Verify the response code is 200
        And I verify the list of product is provided

    Scenario:API 6: POST To Search Product without search_product parameter
        When I send a "POST" request for "searchProduct" endpoint
        Then I Verify the response code is 400
        And  I verify the response Message is "Bad request, search_product parameter is missing in POST request."





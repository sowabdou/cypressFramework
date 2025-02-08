@API
Feature: I want to validate the VerifyLogin API

    Scenario: API 7: POST To Verify Login with valid details
        When I send a "POST" request for "verifyLogin" endpoint with body parameters "email:cyptst@tstmail.com,password:pass"

        Then I Verify the response code is 200
        And  I verify the response Message is "User exists!"

    Scenario:API 8: POST To Verify Login without email parameter
        When I send a "POST" request for "verifyLogin" endpoint with body parameters "password:pass"
        Then I Verify the response code is 400
        And  I verify the response Message is "Bad request, email or password parameter is missing in POST request."

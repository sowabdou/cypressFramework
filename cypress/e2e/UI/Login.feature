@UI
Feature: I want to test the Login Feature

    Scenario: Test Case 2:Login User with correct email and password
        When I navigate to Homepage
        Then I validate "Home" page is displayed
        When I click on "Signup / Login" Menu
        Then I validate "Signup / Login" page is displayed
        When I login using 'valid' credentials
        Then I validate logged in as user is displayed

    Scenario:Test Case 3: Login User with incorrect email and password
        When I navigate to Homepage
        Then I validate "Home" page is displayed
        When I click on "Signup / Login" Menu
        Then I validate "Signup / Login" page is displayed
        When I login using 'invalid' credentials
        Then Verify error 'Your email or password is incorrect!' is visible

    Scenario: Test Case 4: Logout User
        When I navigate to Homepage
        Then I validate "Home" page is displayed
        When I click on "Signup / Login" Menu
        Then I validate "Signup / Login" page is displayed
        When I login using 'valid' credentials
        Then I validate logged in as user is displayed
        When I click on Logout
        Then I validate "Signup / Login" page is displayed

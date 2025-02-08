@UI
Feature: I want to test the register Feature

    Scenario: Test Case 1: Register User
        When I navigate to Homepage
        Then I validate "Home" page is displayed
        When I click on "Signup / Login" Menu
        Then I validate "Signup / Login" page is displayed
        When I Enter name and email
        And I click on "Signup" Button
        Then I validate the header "Enter Account Information" is displayed
        When I fill in account information details
        And I fill in address information details
        Then I click on "Create Account" Button
        Then I validate the header "Account Created!" is displayed
        When I click on Continue Button
        Then I validate logged in as user is displayed
        When I click on Delete Account Button
        Then I validate the header "Account Deleted!" is displayed

    Scenario: Test Case 5: Register User with existing email
        When I navigate to Homepage
        Then I validate "Home" page is displayed
        When I click on "Signup / Login" Menu
        Then I validate "Signup / Login" page is displayed
        When Enter name and already registered email address
        And I click on "Signup" Button
        Then Verify error 'Email Address already exist!' is visible



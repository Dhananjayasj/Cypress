Feature: Verify login function

    Positive and Negative Tests for login
Scenario: Verify login with valid username and vaild password

Given  User Launch the application
When User Enter username "Admin" And Enter password "admin123"
And User clicks on login button
Then User should be navigated to dashboard page

Scenario: Verify login with valid username and Invaild password
Given  user Launch the application
When user Enter username "Admin" And Enter password "admin13"
And user clicks on login button
Then user should get login error message

Scenario: Verify login with Invalid username and vaild password
Given  user Launch the application
When user Enter username "admin" And Enter password "admin13"
And user clicks on login button
Then user should get login error message

Scenario: Verify login with Invalid username and vaild password
Given  user Launch the application
When user Enter username "admin" And Enter password "admin13"
And user clicks on login button
Then user should get login error message

Scenario: Verify login with Invalid username and Invaild password
Given  user Launch the application
When user Enter username "admin" And Enter password "admin13"
And user clicks on login button
Then user should get login error message   
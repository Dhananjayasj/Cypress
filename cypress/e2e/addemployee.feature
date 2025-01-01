Feature: Verify add employee funactionality positive and negative test for Add Employee

    mandatory fields checking
Scenario: verify add employee with mandatory field 
Given user Launch the application
When user Enter username "Admin" And Enter password "admin123"
And user clicks on login button
Then user should be navigated to dashboard page
When user clicks on PIM
And user clicks on add Employee submenu
And user Enter firstname "Raju" And Enter lastname "G"
And user clicks on Save button
Then user should get Successful message

Scenario: verify add employee error message for mandatory fields 
Given user Launch the application
When user Enter username "Admin" And Enter password "admin123"
And user clicks on login button
Then user should be navigated to dashboard page
When user clicks on PIM
And user clicks on add Employee submenu
And user Enter firstname "Raju" And Enter lastname "G"
And user clicks on Save button
Then user should get error message for firstname and lastname field


      
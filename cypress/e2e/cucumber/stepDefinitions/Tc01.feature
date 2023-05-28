Feature: Conduit Login Functionality

    This is the feature to test Conduit Login

Scenario: Login and Logout with valid credentials
Given I am on the Conuduit Login page
When I login with valid credentials
|username             | password    |
|cypressdemo@gmail.com| cypressdemo |
And I click on the settings button
And I click on the Logout Button
Then I route back to the Login page
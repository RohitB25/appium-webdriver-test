Feature: Login functionality in saucelab application
As a user, I want to be able to log in using valid credentials, 
And I should receive error messages when providing invalid credentials. 

  Background: Navigating to login page
    Given I open the application
   
 @Smoke
  Scenario Outline: As a user, I can log into the saucelab application with valid credintials
    When I login with <username> and <password>
    Then I can see the header on top of page with "<message>"

    Examples:
    |message|
    |PRODUCTS|

  Scenario Outline: As a user , I can not log into saucelab application with invalid credintials
    When I login with "<username>" and "<password>"
    Then I can see the error "<message>"

    Examples:
      | username | password | message                                                      |
      | standard | secret   | Username and password do not match any user in this service. |

Feature: Learn English
    As a user
    I want to move to the page to learn English
    In order to learn English

Scenario: 
	Given I am on the home page
    When I click in "Tiếp tục học"
    Then I will be redirected to the new words page
    When I click in "Ôn lại các từ đã học"
    Then I will be redirected to review the words I have learned
    When I click in "Học lại từ đầu"
    Then I will be learning again from the beginning
	
Scenario:
	Given I am on the home page
    When I click on level 2 at the bottom of the home page
    Then I will be going to the level 2
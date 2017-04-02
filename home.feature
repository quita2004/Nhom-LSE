Feature: Continue the learn
    As a user
    I want to continue the lesson
    In order to move to the new word page

Background: 
    Given on the home page

Scenario: Continue learning new words
    When I click in "Tiep tuc hoc"
    Then I will be redirected to the new vocabulary

Scenario: Review the words learned
    When I click in "On lai cac tu da hoc"
    Then I will be redirected to review the words I have learned

Scenario: Start over
    When I click in "Hoc lai tu dau"
    Then I will be learning again from the beginning

Scenario: Go on to next level
    When I click on a level at the bottom of the home page
    Then I will be going to the corresponding level
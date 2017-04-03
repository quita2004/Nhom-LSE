Feature: Learn new words
	As a learner
	I want to see new words
	In order to remember new words

Scenario: 
	Given I'm on the new word page
    When I filled in the suggestion 
	 And click in "Lưu"
    Then My suggestion was saved
    When I do not fill in the proposal 
	 And click in "Lưu"
    Then A warning line will appear "Bạn không được để trống!"
	 And Nothing is save

Scenario:
    When I click in "Tiếp theo"
    Then I will learn the next word or do the tests
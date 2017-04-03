Feature: Take a test
	As a user
	I want to take a test
	In In order to remember new words
Scenario:
	Given I am on the word fill page
	 And the correct answer is "connect"
	 And Have a suggestion
	When I filled in "connect"
	 And Click in "Tiếp theo"
	Then I will be go to the next test
	When I filled in "connec"
	 And Click in "Tiếp theo"
	Then I should see the notification "Sai"
	 And I will be reviewing from there
	When I click in "Hiện từ gợi ý"
	Then I will see the "connect" line appears
	
Scenario:
	Given I am on the test multiple choice page
	 And Have not a hint
	When I click in "Hiện từ gợi ý"
	Then I will not see any change
Feature: Take a test
	As a user
	I want to take a test
	In In order to remember new words

Scenario:
	Given I am on the test multiple choice page
	 And The correct answer is B
	 And Hint is "connect"
	When I click in answer B
	Then I should see the notification "Đúng"
	When I click in answer A or C or D
	Then I should see the notification "Sai"
	 And I will be reviewing from there
	When I click in "Hiện từ gợi ý"
	Then I will see the "connect" line appears
	
Scenario:
	Given I am on the test multiple choice page
	 And Have not a hint
	When I click in "Hiện từ gợi ý"
	Then I will not see any change
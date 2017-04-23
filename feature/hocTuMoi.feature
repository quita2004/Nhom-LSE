Feature: Học từ mới
	As a người dùng
	I want to học từ mới
	in order to lyện tập tiếng anh

Scenario: 
	Given Tôi đang ở màn hình học từ mới
	 And Màn hình hiện từ "abandon"
	When Tôi ấn nút "Tiếp theo"
	Then Tôi thấy màn hình sẽ hiện từ "abandoned"

Scenario:
	Given Tôi đang ở màn hình học từ mới
	 And Tôi thấy màn hình đang hiện từ "ability"
	When Tôi bấm "Làm bài kiểm tra"
	Then Tôi sẽ thấy màn hình học từ mới chuyển sang màn hình làm bài kiểm tra trắc nghiệm
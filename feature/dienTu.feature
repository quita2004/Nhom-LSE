Feature: Điền từ vào chỗ trống
	As a người dùng
	I want to làm bài điền từ vào chỗ trống 
	In order to luyện tập tiếng anh

Scenario: Tôi điền đúng
	Given Tôi đang ở màn hình điền từ
	 And màn hình hiện từ "bỏ, từ bỏ"
	When Tôi điền vào ô trống từ "abandon"
	Then Tôi thấy màn hình hiện ra "Đúng rồi. Tiếp nào"
	 And Tôi thấy màn hình hiện ra nút "Tiếp theo"
	When Tôi ấn nút "Tiếp theo"
	Then Tôi sẽ được chuyển sang từ "bị bỏ rơi, bị ruồng bỏ"


Scenario: Tôi điền sai
	Given Tôi đang ở màn hình điền từ
	 And màn hình hiện từ "bỏ, từ bỏ"
	When Tôi điền vào ô trống từ "abandn"
	Then Tôi không thấy màn hình hiện ra cái gì cả

Scenario: Tôi điền đúng từ cuối cùng
	Given Tôi đang ở màn hình điền từ
	 And màn hình hiện từ "khả năng, năng lực"
	When Tôi điền vào ô trống từ "ability"
	Then Tôi thấy màn hình hiện ra "Đúng rồi. Tiếp nào"
	 And Tôi thấy màn hình hiện ra nút "Tiếp theo"
	When Tôi ấn nút "Tiếp theo"
	Then Tôi sẽ được chuyển sang màn hình trang chủ

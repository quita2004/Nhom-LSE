Feature: Làm bài trắc nghiệm
	As a Người dùng
	T want to làm bài kiểm tra trắc nghiệm
	In order to luyện tập tiếng anh

Scenario: Chọn đúng
	Given Tôi đang ở màn hình trắc nghiệm
	 And Màn hình hiện từ "abandon"
	 And Màn hình hiện 4 kết quả dưới từ "abandon" là "khả năng, năng lực", "bỏ, từ bỏ", "bị bỏ rơi, bị ruồng bỏ", "có năng lực, có tài"
	When Tôi ấn vào đáp án "bỏ, từ bỏ"
	Then Tôi thấy màn hình hiện lên "Đúng rồi. huyển sang câu tiếp nào"
	 And Tôi thấy màn hình hiện lên nút "Tiếp theo"
	When Tôi ấn vào nút "Tiếp theo"
	Then Tôi thấy nàm hình chuyển sang từ "abandoned"
	 
Scenario: Tôi chọn sai
	Given Tôi đang ở màn hình trắc nghiệm
	 And Màn hình hiện từ "abandon"
	 And Màn hình hiện 4 kết quả dưới từ "abandon" là "khả năng, năng lực", "bỏ, từ bỏ", "bị bỏ rơi, bị ruồng bỏ", "có năng lực, có tài"
	When Tôi ấn vào đáp án "khả năng, năng lực"
	Then Tôi thấy màn hình hiện ra thông báo "Sai rồi. Chọn lại đi"

Scenario: Chuyển sang bài điền từ
	Given Tôi đang ở màn hình trắc nghiệm
	 And Màn hình hiện từ "ability"
	 And Màn hình hiện 4 kết quả dưới từ "abandon" là "Không có năng lực, không có tài", "có năng lực, có tài", "khả năng, năng lực", "khoảng, về"
	When Tôi ấn vào đáp án "khả năng, năng lực"
	Then Tôi thấy màn hình hiện lên "Đúng rồi. huyển sang câu tiếp nào"
	 And Tôi thấy màn hình hiện lên nút "Tiếp theo"
	When Tôi ấn vào nút "Tiếp theo"
	Then Tôi thấy nàm hình chuyển sang màn hình điền từ vào chỗ trống

	
Feature: Truy cập các chức năng từ trang chủ
    As a người dung
    I want to học tiếng Anh
    In order to học từ mới và làm các bài liểm tra

Scenario: Tôi chọn mục "Học từ mới"
    Given Tôi đang ở màn hình trang chủ
    When Tôi bấm nút "Học từ mới"
    Then Tôi thấy màn hình trang chủ chuyển sang màn hình học từ mới

Scenario: Tôi muốn chọn mục "Ôn lại các từ đã học"
    Given Tôi đang ở màn hình trang chủ
     And Tôi đã học được 3 từ trước đó
    When Tôi bấm nút "Ôn lại các từ đã học"
    Then Tôi thấy màn hình trang chủ chuyển sang màn hình ôn lại các từ đã học

Scenario: Tôi chọn mục "Học lại từ đầu"
    Given Tôi đang ở màn hình trang chủ
     And Tôi đã học được 3 từ trước đó
    When Tôi bấm nút "Học lại từ đầu"
    Then Tôi thấy màn hình trang chủ hiện "0/100 từ"

Scenario: Tôi chọn mức độ 2
    Given Tôi đang ở màn hình trang chủ
    When Tôi bấm nút mức độ 2 
    Then Tôi thấy màn hình trang chủ chuyển sang màn hình mức độ 2
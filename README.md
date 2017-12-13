# Dự án 3000 từ vựng tiếng anh cơ bản
#
# 1. Giới thiệu chung

### 1.1 Giới thiệu về dự án phần mềm "3000 từ vựng tiếng anh cơ bản"

Hiện nay, việc học tiếng Anh là rất phổ biến và quan trọng trong đời sống và công việc của mọi người. Nhưng việc học tiếng Anh lại không hề đơn giản với nhiều người, nhất là phần học từ vựng. Nắm bắt được nhu cầu này, nhóm LSE đã xây dựng 1 trang web giúp học khoảng 3000 từ vựng cơ bản với các bài kiểm tra sau khi học từ mới giúp người học nhớ từ mới lâu hơn.

* Dự án được lấy ý tưởng từ 1 khoá học trên [https://www.memrise.com](https://www.memrise.com)

* Liên kết tới khoá học: [https://www.memrise.com/course/393971/3000-tu-vung-tieng-anh-thong-dung-oxford-wordlist](https://www.memrise.com/course/393971/3000-tu-vung-tieng-anh-thong-dung-oxford-wordlist/)

* Liên kết tới repo của nhóm trên github: [https://github.com/quita2004/Nhom-LSE/tree/master/src](https://github.com/quita2004/Nhom-LSE)

* Liên kết tới trang chủ sản phẩm triển khai của nhóm: [https://basic-english-3000-word.herokuapp.com](https://basic-english-3000-word.herokuapp.com/#/)

### 1.2 Các thành viên trong nhóm LSE

Nhóm gồm 3 thành viên:

* Tạ Ngọc Quí

* Bùi Hùng Tráng

* Đỗ Đức Linh


### 1.3 Quy trình làm việc của nhóm

* Nhóm đã áp dụng quy trình mô hình Scrum trong quá trình phát triển dự án.

* Các phương tiện liên lạc chủ yếu qua Facebook, gmail, điện thoại, và gặp trực tiếp.

* Hàng tuần nhóm sẽ có ít nhất 1 buổi gặp mặt để đánh giá những việc đã làm trong tuần trước và phân công công việc tiếp theo.

* Lịch trình thực hiện:

* Tuần 1-3: Tìm ý tưởng cho dự án, học các kiến thức cần thiết để làm phần mềm.

* Tuần 4-5: Thiết kế màn hình giao diện ban dầu cho dự án của nhóm.

* Tuần 6-7: Xây dựng cơ sở dữ liệu ban đầu, hoàn thiện chức năng điều hướng của của trang chủ.

* Tuần 8-10: Viết test cho phần mềm, hoàn thiện các chức năng học từ mới, làm bài trắc nghiệm và điền từ.

* Tuần 11- 14: Cài Google Analytics vào ứng dụng của nhóm, triển khai dự án trên heroku, hoàn thiện trang giới thiệu, hướng dẫn sử dụng, thu hút người dùng.

## 2. Yêu cầu bài toán
#
## 2.1 Yêu cầu chức năng

Ứng dụng cung cấp các từ mới gồm từ, nghĩa, cách phát âm, loại từ để người học dẽ dàng ghi nhớ. Cùng với các bài kiểm tra trắc nghiệm và điền từ giúp người dùng ghi nhớ lâu hơn.

#### 2.1.1 Sơ đồ ca sử dụng

![](http://i.imgur.com/RFzZKdS.jpg)

```
Hình 2.1.1-Sơ đồ ca sử dụng
```

#### 2.1.2 Các features, scenarios

* **Kịch bản trang chủ**

```Feature
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
```

* **Kịch bản trang học từ mới**

```Faeture
Feature: Học từ mới
As a người dùng

I want to học từ mới
in order to luyện tập tiếng anh
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
```

* **Kịch bản trang làm bài trắc nghiệm**

```Faeture
Feature: Làm bài trắc nghiệm
As a Người dùng
T want to làm bài kiểm tra trắc nghiệm
In order to luyện tập tiếng anh
Scenario: Chọn đúng
Given Tôi đang ở màn hình trắc nghiệm
And Màn hình hiện từ "abandon"
And Màn hình hiện 4 kết quả dưới từ "abandon" là "khả năng, năng lực", "bỏ, từ bỏ", "bị bỏ rơi, bị ruồng bỏ", "có năng lực, có tài"
When Tôi ấn vào đáp án "bỏ, từ bỏ"
Then Tôi thấy màn hình hiện lên "Đúng rồi. Chuyển sang câu tiếp nào"
And Tôi thấy màn hình hiện lên nút "Tiếp theo"
When Tôi ấn vào nút "Tiếp theo"
Then Tôi thấy màn hình chuyển sang từ "abandoned"
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
Then Tôi thấy màn hình hiện lên "Đúng rồi. Chuyển sang câu tiếp nào"
And Tôi thấy màn hình hiện lên nút "Tiếp theo"
When Tôi ấn vào nút "Tiếp theo"
Then Tôi thấy nàm hình chuyển sang màn hình điền từ vào chỗ trống
```

* **Kịch bản trang điền từ**

```Faeture
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
```



### 2.2 Yêu cầu chất lượng

Sản phẩm cần đáp ứng được các yêu cầu như:

* Tính khả dụng: Phần mềm đơn giản, thân thiện, giúp người dùng dễ sử dụng.

* Tính tin cậy: Phần mềm hoạt động đúng với chức năng đã thiết kế.

* Khả năng tiếp cận: Chỉ cần trình duyệt web,tương thích với mọi trình duyệt.

* Hiệu năng: Ổn định, sẵn sàng phục vụ yêu cầu từ người dùng mọi lúc, phản hồi nhanh các thao tác của người dùng.

#
# 3. Công nghệ sử dụng

Sản phẩm sử dụng các công nghệ sau:

* Phía Client: Sử dụng framework [**AngularJS **](https://angularjs.org/)làm cốt lõi cho phát triển front-end với các Component: [_Router_](https://docs.angularjs.org/api/ngRoute), [_Resource_](https://docs.angularjs.org/api/ngResource). Sử dụng một số Service như [_controller_](https://docs.angularjs.org/api/ng/service/$controller), [_http_](https://docs.angularjs.org/api/ng/service/$http),... Tạo các Service mới với các phương thức [_factory_](https://docs.angularjs.org/guide/providers), [_service_](https://docs.angularjs.org/guide/providers). Sử dụng framewwork [**Bootstrap **](http://getbootstrap.com/)hỗ trợ phần hiển thị.

* Phía Server: Sử dụng công nghệ [**NodeJS**](https://nodejs.org), với các framework_ _[_Express.js_](https://expressjs.com/)_,_ [_body-parser_](https://www.npmjs.com/package/body-parser), [_morgan_](https://www.npmjs.com/package/morgan), [_mongoose_](http://mongoosejs.com/).

* Cơ sở dữ liệu: sử dụng [**MongoDB**](https://www.mongodb.com/), với CSDL online trên trang [https://mlab.com](https://mlab.com) .



#
# 4. Cài đặt và kiểm thử hệ thống:

Toàn bộ mã nguồn của phần mềm được lưu trữ trên repo của nhóm trên [github](https://github.com/quita2004/Nhom-LSE).

#
## 4.1 Cài đặt Front-end:

Phần cài đặt chức năng và giao diện phần mềm nằm trong thư mục [/public/JS. ](https://github.com/quita2004/Nhom-LSE/tree/master/src/public/JS)Cấu trúc thư mục gồm:

| Thư mục | Mô tả |
| :--- | :--- |
| controller | Chứa các controller tương ứng cho phần điều khiển trang chủ, từ mới, các bài kiểm tra |
| pages | Chứa các file html tương ứng cho phần hiển thị |
| service | Chứa các service tạo mới |
| app.js | Cài đặt module AngularJs |

####

####

###



#
### 4.1.1 Thư mục controller:

Là phần lấy dữ liệu từ server, xử lý và hiển thị lên giao diện.

* **homeController.js**: Lấy dữ liệu số từ đã học từ server để hiển thị. Khi ấn vào nút "Học lại từ đầu" thì đặt số từ đã học bằng 0. Lưu lại trên server.

Code:

```js
var myapp = angular.module('myapp');

myapp.controller('homeController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

svSTDH.get().success(function (data) {
//Lấy dữ liệu số từ đã học từ server
$scope.soTuDaHoc = data[0].sotudahoc;

//Đk hiện nút "Học lại từ đầu" và "Ôn lại các từ đã học"
if ($scope.soTuDaHoc > 2){
$scope.hien = true;
}
// Khi ấn vào nút học lại thì đặt lại số từ đã học = 0.
$scope.hoc_lai = function(){
$scope.soTuDaHoc = 0;
data[0].sotudahoc = $scope.soTuDaHoc;
//Lưu lại trên server
svSTDH.update(data[0]);
};

});
}]);
```

* **tuMoiController.js**: Lấy dữ liệu về số từ đã học và từ mới để hiển thị; cập nhật thông tin số từ đã học lên server.

Code

```js
svSTDH.get().success(function (data) {
//Lấy dữ liệu số từ đã học từ server
$scope.soTuDaHoc = data[0].sotudahoc;

//Lấy từ mới từ service svTuMoi
$scope.tu_moi = svTuMoi.tu_moi;

$scope.soTuDaHoc++;

//Hiển thị từ mới: từ, nghĩa, loại từ, cách đọc
$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc - 1].nghia;
$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc -1].loai_tu;
$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;


//Cập nhật lại số từ đã học lên server
data[0].sotudahoc = $scope.soTuDaHoc;
svSTDH.update(data[0])

//Chuyển từ tiếp theo
$scope.click = function () {
$scope.soTuDaHoc++;

$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc -1 ].nghia;
$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc - 1].loai_tu;
$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;
// Cập nhật lại số từ đã học
data[0].sotudahoc = $scope.soTuDaHoc;
svSTDH.update(data[0]);
};
});
```

* **tracNghiemController.js:**lấy dữ liệu số từ đã học từ server, từ mới từ service svTuMoi để tạo câu hỏi dạng trắc nghiệm.

Code:

```js
svSTDH.get().success(function (data) {
//Lấy dữ liệu số từ đã học từ server
$scope.soTuDaHoc = data[0].sotudahoc;

//Lấy từ mới từ service svTuMoi
$scope.tu_moi = svTuMoi.tu_moi;

if ($scope.soTuDaHoc > 2){
$scope.soTuDaHoc = $scope.soTuDaHoc - 3;
}

//thứ tự hiển thị các đáp án
$scope.a = 0;
$scope.b = 0;
$scope.c = 0;
$scope.d = 0;
//Dùng hàn random để trộn thứ tự đáp án
$scope.rand = function(){
$scope.a = Math.floor(Math.random() * 4);
$scope.b = Math.floor(Math.random() * 4);
$scope.b = Math.floor(Math.random() * 4);
while($scope.a === $scope.b){
$scope.b = Math.floor(Math.random() * 4);
}
while($scope.a === $scope.c || $scope.b === $scope.c){
$scope.c = Math.floor(Math.random() * 4);
}
$scope.d = 6 - ($scope.a + $scope.b + $scope.c);
};

//Đk hiển thị nút "Tiếp theo"
$scope.sai = false;
$scope.dung = false;

//Đáp án
$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

$scope.rand();
//Hiển thị đáp án
$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + $scope.a].nghia;
$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + $scope.b].nghia;
$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + $scope.c].nghia;
$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + $scope.d].nghia;
$scope.soTuDaHoc++;

//Chuyển từ tiếp theo
$scope.click = function () {

$scope.dung = false;
$scope.sai = false;


$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

$scope.rand();

$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + $scope.a].nghia;
$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + $scope.b].nghia;
$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + $scope.c].nghia;
$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + $scope.d].nghia;
$scope.soTuDaHoc++;

};

//Chọn đáp án 1
$scope.chon_dap_an_1 = function(){
if ($scope.nghia1 === $scope.nghia){
$scope.dung = true;
$scope.sai = false;
} else {
$scope.sai = true;
$scope.dung = false;
}
};
//Chọn đáp án 2
$scope.chon_dap_an_2 = function(){
if ($scope.nghia2 === $scope.nghia){
$scope.dung = true;
$scope.sai = false;
} else {
$scope.sai = true;
$scope.dung = false;
}
};
//Chọn đáp án 3
$scope.chon_dap_an_3 = function(){
if ($scope.nghia3 === $scope.nghia){
$scope.dung = true;
$scope.sai = false;
} else {
$scope.sai = true;
$scope.dung = false;
}
};
//Chọn đáp án 4
$scope.chon_dap_an_4 = function(){
if ($scope.nghia4 === $scope.nghia){
$scope.dung = true;
$scope.sai = false;
} else {
$scope.sai = true;
$scope.dung = false;
}
};
});
```

* **dienTuController.js** : lấy dữ liệu số từ đã học từ server, từ mới từ service svTuMoi để tạo câu hỏi dạng điền từ.

Code:

```js
svSTDH.get().success(function (data) {
//Lấy dữ liệu số từ đã học từ server
$scope.soTuDaHoc = data[0].sotudahoc;

//Lấy từ mới từ service svTuMoi
$scope.tu_moi = svTuMoi.tu_moi;

if ($scope.soTuDaHoc > 2){
$scope.soTuDaHoc = $scope.soTuDaHoc - 3;
}
//Đk hiển thị nút để đi tiếp
$scope.dung = false;

//Hiển thị nghĩa
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
//Đáp án
$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
//Từ tiếp theo
$scope.soTuDaHoc++;

//Theo dõi khi người dùng điền đáp án
$scope.$watch('dien', function(){
//Nếu đáp án đúng thì hiển thị nút để đi tiếp
if ($scope.dien === $scope.tu){
$scope.dung = true;
} else {
$scope.dung = false;
}
});


$scope.click = function(){
//Khi ấn vào nút "Tiếp theo", sẽ thay đổi từ
$scope.dien = "";
$scope.dung = false;
$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
$scope.soTuDaHoc++;
};
});
```



#
### 4.1.2 Thư mục pages:

Chứa các file html hiển thị của phần mềm:

* **home.html: **Phần hiển thị ở trang chủ.

Hiển thị:

![](http://i.imgur.com/fIqEqnT.png)

```
Hình 4.1.1-Phần hiển thị của trang chủ.
```

Code:

```html
<h3>Cấp độ 1</h3>
<div id="text">
<p>{{ soTuDaHoc }}/100 từ</p>
</div>
<div class="progress">
<div class="progress-bar progress-bar-success" style="width: {{ soTuDaHoc }}%;"></div>
</div>
<div class="col-md-3">
<a href="#/on-lai" class="btn btn-primary btn-info disabled"><span class="glyphicon glyphicon-eye-open"></span> Ôn lại các từ đã học</a>
</div >
<div class="col-md-3" >
<a href="" class="btn btn-primary btn-warning" ng-click="hoc_lai()"><span class="glyphicon glyphicon-repeat"></span> Học lại từ đầu</a>
</div>
<div class="col-md-6">
<a href="#/tu-moi" class="btn btn-primary btn-success pull-right">Học từ mới <span class="glyphicon glyphicon-circle-arrow-right"></span></a>
</div>
</div><!-- class body-1-->

<div class="body-2 r">
<br>
<br>
<table class="table table-hover">
<thead>
<tr>
<th>Từ</th>
<th>Nghĩa</th>
</tr>
</thead>
<tbody>
<tr>
<td>abandon</td>
<td>bỏ, từ bỏ</td>
</tr>
<tr>
<td>ababdoned</td>
<td>bị từ rơi</td>
</tr>
<tr>
<td>.......</td>
<td>.......</td>
</tr>
<tr>
<td>........</td>
<td>........</td>
</tr>
<tr>
<td>........</td>
<td>........</td>
</tr>
</tbody>
</table><!--class table-->
<h3>Cấp độ</h3>
<ul class="pagination">
<li class="disabled"><a href="#/">&laquo;</a></li>
<li class="active"><a href="#/">1</a></li>
<li class="disabled"><a href="#">2</a></li>
<li class="disabled"><a href="#/">3</a></li>
<li class="disabled"><a href="#/">4</a></li>
<li class="disabled"><a href="#/">...</a></li>
<li class="disabled"><a href="#/">28</a></li>
<li class="disabled"><a href="#/">29</a></li>
<li class="disabled"><a href="#/">30</a></li>

<li class="disabled"><a href="#/">&raquo;</a></li>
</ul>
```

* **tu-moi.html** : Hiển thị từ mới gồm từ, nghĩa, loại từ, phát âm

Hiển thị:

![](http://i.imgur.com/PqaHg57.png)

```
Hình 4.1.2-Phần hiển thị từ mới
```

Code: Được lưu trên [github](https://github.com/quita2004/Nhom-LSE/blob/master/src/public/JS/pages/tu-moi.html).

* **trac-nghiem.html: **

Hiển thị:

![](http://i.imgur.com/LzEuZs6.png)

```
Hình 4.1.3-Phần hiển thị bài thi trắc nghiệm
```

Code: Được lưu trên [github.](https://github.com/quita2004/Nhom-LSE/blob/master/src/public/JS/pages/trac-nghiem.html)

* **dien-tu.html: **Hiển thị phần bài diền từ

Hiển thị:

![](http://i.imgur.com/2jt5R2p.png)

```
Hình 4.1.4-Phần hiển thị bài thi điền từ
```

Code: Xem code trên [github](https://github.com/quita2004/Nhom-LSE/blob/master/src/public/JS/pages/dien-tu.html).

#
## 4.1.3 Thư mục service:

Nơi tạo các service AngularJs mới phục vụ việc lấy dữ liệu từ server. Thư mục gồm các file:

* **svSoTuDaHoc.js: **Sử dụng $http để lấy và cập nhật dữ liệu.

Code:

```js
var myapp = angular.module('myapp');

myapp.factory("svSTDH", ["$http", function ($http){

return {
get: function(){
return $http.get("/api/sotudahocs");
},
update: function (sotudahocData) {
return $http.put("/api/sotudahoc", sotudahocData);
}
}
}]);
```

* **svTuMoi.js: **Cài đặt từ mới cho ứng dụng.

Code được lưu trên [gtihub](https://github.com/quita2004/Nhom-LSE/blob/master/src/public/JS/service/svTuMoi.js) .

.

###



#
## 4.1.4 File app.js

Khai báo ứng dụng AngularJs và các component: Router, Resource. Điều hướng cho phần hiển thị ng-view.

Code:

```js
var myapp = angular.module('myapp', ['ngRoute', 'ngResource']);

myapp.config(function ($routeProvider) {
$routeProvider.when('/', {
templateUrl: 'assets/JS/pages/home.html',
controller: 'homeController'
})
.when('/home', {
templateUrl: 'assets/JS/pages/home.html',
controller: 'tuMoiController'
})
.when('/tu-moi', {
templateUrl: 'assets/JS/pages/tu-moi.html',
controller: 'tuMoiController'
})
.when('/trac-nghiem', {
templateUrl: 'assets/JS/pages/trac-nghiem.html',
controller: 'tracNghiemController'
})
.when('/dien-tu', {
templateUrl: 'assets/JS/pages/dien-tu.html',
controller: 'dienTuController'
})
.when('/on-lai', {
templateUrl: 'assets/JS/pages/tu-moi.html',
controller: 'onLaiController'
})
})
```



#
## 4.2 Cài đặt back-end:

Toàn bộ code phần back-end của ứng dụng được đặt trong các thư mục [src ](https://github.com/quita2004/Nhom-LSE/tree/master/src)\(trừ thư mục public\). Server của ứng dụng sử dụng công nghệ **NodeJs **để liên kết với cơ sở dữ liệu. Sử dụng thêm framework _Express _để tạo các api một cách nhanh chóng và dễ dàng quản lý.

Cấu trúc thư mục gồm:

| Thư mục | Giải thích |
| :--- | :--- |
| api | Cài đặt các api |
| config | Cài đặt kết nối với database |
| node\_modules | Các thư viện của ứng dụng NodeJS |
| views | Phần hiển thị của NodeJS |
| File appNode.js | File chính của ứng dụng NodeJS |
| File package.json | Lưu trữ các thông tin của ứng dụng NodeJS |

Các api chính:

| Đường dẫn | Phương thức | Giải thích |
| :--- | :--- | :--- |
| /api/sotudahocs | GET | Trả về số từ đã học |
| /api/sotudahoc | PUT | Cập nhật số từ đã học |



#
## 4.3 Cơ sở dữ liệu:

**MongooDB **là một mã nguồn mở và là một tập tài liệu dùng cơ chế NoSQL để truy vấn, nó được viết bởi ngôn ngữ C++. Chính vì được viết bởi C++ nên nó có khả năng tính toán với tốc độ cao chứ không giống như các hệ quản trị CSDL hiện nay. MongoDB cũng có cấu trúc lưu trữ tương tự _Json_, chính vì thế nó có hiệu suất cao, tương tác nhanh và khả năng mở rộng tốt, nó hoạt động trên khái niệm _collection và document_.

![](/assets/CSDL.png)

```
Hình 4.3.1 Dữ liệu mẫu cho collection số từ đã học
```

![](http://i.imgur.com/OgeZD5J.png)

Hình 4.3.2-Dữ liệu mẫu cho collection từ mới

#
# 4.4 Kiểm thử

Để kiểm thử tự động ứng dụng,nhóm đã sử dụng công cụ **Karma **cùng với framework \_Jasmine. Karma là công cụ đơn giản cho phép các đoạn mã JavaScrip\_t thực thi trên trình duyệt thực tế. Jasmine giúp cho kiểm thử dựa trên hành vi, \_Jasmine \_không yêu cầu DOM, có cú pháp rõ ràng và đơn giản trong kiểm thử.

Nhóm đã tạo ra 9 ca kiểm thử cơ bản cho tất cả các component. Ví dụ, 2 ca kiểm thử với trang học từ mới:

```js
describe("Học từ mới", function () {

beforeEach(angular.mock.module("myapp"));

var controller,
$controller,
mockScope;

beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
mockScope = $rootScope.$new();
$controller = _$controller_;
controller = $controller('tuMoiController', { $scope: mockScope });
}));

it('Xem từ tiếp theo', function () {

mockScope.click();
expect(mockScope.tu).toEqual("abandoned");
});

it('Làm bài kiểm tra trắc nghiệm', function () {

mockScope.soTuDaHoc = 2;
mockScope.click();

expect(mockScope.tu).toEqual("ability");
});
});
```

Kết quả chạy 9 ca kiểm thử đều đã đạt, cụ thể

![](http://i.imgur.com/zqij8Wk.png)

```
Hình 4.4.1-Kết quả chạy các ca kiểm thử
```

Code: Được lưu trên [github](https://github.com/quita2004/Nhom-LSE/tree/master/test).

#
# 5. Triển khai và đánh giá sản phẩm

Ứng dụng đã được chạy trên máy chủ **heroku **thực tế tại [địa chỉ ](https://basic-english-3000-word.herokuapp.com/), một số hình ảnh về sản phẩm:

* Trang chủ

![](/assets/1.png)Hình 5.1-Trang chủ

* Học từ mới:

![](http://i.imgur.com/WFbevof.png)Hình 5.2-Trang học từ mới

* Làm bài trắc nghiệm:

![](http://i.imgur.com/UCZKehm.png)Hình 5.3-Trang làm bài trắc nghiệm



Sau một thời gian triển khai, ứng dụng đã thu được một số phản hồi tích cực từ người dùng:

![](http://i.imgur.com/lD3R8F4.png)

```
Hình 5.4-Phản hồi từ người dùng
```

Ngoài ra, số lượng người truy cập vào trang web khá tốt, thể hiện qua chỉ số Google Analytics:

![](/assets/nsd2.png)

```
Hình 5.5-Thể hiện số lượt truy cập trên trang web
```



#
# 6. Tổng kết

Ứng dụng "3000 từ vựng tiếng Anh cơ bản" đã hoàn thành các chức năng cốt lõi. Người dùng có thê truy cập trực tuyến vào mọi thời điểm để sử dụng. Ứng dụng đã đáp ứng được các yêu cầu phi chức năng được đặt ra ngay từ đầu như đơn giản, dễ sử dụng, tốc độ xử lý cao. Ứng dụng giúp người xử dụng có thể dễ dàng học từ mới và thông qua các bài kiểm tra giúp nhớ từ lâu hơn.

Trong tương lai, ứng dụng có thể được phát triển và hoàn thiện hơn về chức năng và giao diện, giúp người dùng có những trải nghiệm tốt hơn trong việc học từ vựng tiếng Anh.

Thông qua dự án này, nhóm đã tích luỹ thêm được nhiều kiến thức chuyên môn, về các xu hướng ứng dụng công nghệ hiện đại như AngularJs hay NodeJs. Nó cũng giúp các thành viên trong nhóm gắn kết với nhau hơn qua các buổi gặp mặt bàn bạc kế hoạch cho dự án.Ngoài ra, nó còn giúp cho mọi người hiểu được quy trình phát triển ra một phần mềm từ lúc bắt đầu ý tưởng đến khi hoàn thành. 

Cuối cùng chúng em xin cảm ơn thầy Trương Anh Hoàng trong quá trình nhóm phát triển đã tận tình giúp đỡ, truyền đạt những kiến thức bổ ích và đưa ra những lời khuyên vô cùng quý báu để giúp ứng dụng của bọn em hoàn thiện cách tốt nhất.

#
# 7. Phụ lục

Thống kê đóng góp:

* [Tạ Ngoc Quí](https://www.facebook.com/ta.ngocqui) : Tham gia thiết kế giao diện ban đầu cho sản phẩm, viết phần [front-end và back-end](https://github.com/quita2004/Nhom-LSE/commit/00e34148b55929c6ee805c62d3b08784f59cc28a) cho sản pẩm, đưa ứng dụng lên [heroku, ](http://i.imgur.com/UlBVnmS.png)viết báo các cho ứng dụng trên gitbook.

* [Bùi Hùng Tráng](https://www.facebook.com/profile.php?id=100010519391189&fref=ts): Tham gia thiết kế giao diện ban đầu cho sản phẩm, nghiên cứu và viết test case cho ứng dụng, viết các [feature ](https://github.com/quita2004/Nhom-LSE/commit/7e305a8df0d2e15645459d844d322d2c9c3f96f3)cho ứng dụng

* [Đỗ Đức Linh](https://www.facebook.com/le.duclinh.1?fref=ts): Tham gia thiết kế giao diện ban đầu cho sản phẩm, thiết kế và khởi tạo cơ sở dữ liệu cho ứng dụng, hoàn thiện trang giới thiệu, hướng dẫn sử dụng, thu hút người dùng.

* [Bùi Trọng Đài](https://www.facebook.com/trongdai.bui.33?fref=ts): Tham gia thiết kế giao diện ban đầu cho sản phẩm, tích hợp Google Analytics và phần bình lận Facebook vào trang web.
* Đỗ Xuân Toàn: Tham gia thiết kế giao diện ban đầu cho sản phẩm, nghiên cứu và viết test case cho ứng dụng, viết các [feature ](https://github.com/quita2004/Nhom-LSE/commit/7e305a8df0d2e15645459d844d322d2c9c3f96f3)cho ứng dụng

Thể hiện qua graphs github:

![](http://i.imgur.com/HmPpJSB.png)

Hình 7.1-Đồ thị commit github của thành viên Tạ Ngọc Quí

![](http://i.imgur.com/Fk76mIf.png)

Hình 7.2-Đồ thị commit github của thành viên Bùi Hùng Tráng

![](http://i.imgur.com/9z4D4Yt.png)

Hình 7.3-Đồ thị commit github của thành viên Lê Đức Linh

![](http://i.imgur.com/1FnNpis.png)

Hình 7.4-Đồ thị commit github của thành viên Bùi Trọng Đài

Tuy nhiên, đồ thị trên chỉ thể hiện 1 phần đóng góp của các thành viên trong nhóm, còn rất nhiều đóng góp khác không được thể hiện qua github.




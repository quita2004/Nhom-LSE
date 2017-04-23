describe("Truy cập các chức năng từ trang chủ", function () {

    beforeEach(angular.mock.module("myapp"));

    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it('Tôi chọn mục Học lại từ đầu', function () {
      var $scope = {};
      var controller = $controller('homeController', { $scope: $scope });
      $scope.soTuDaHoc = 3;
      $scope.hoc_lai();
      expect($scope.soTuDaHoc).toBe(0);
    });
});
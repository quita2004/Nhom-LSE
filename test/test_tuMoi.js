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
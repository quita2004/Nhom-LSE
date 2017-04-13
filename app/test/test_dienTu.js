describe("Điền từ vào chỗ trống", function () {

  beforeEach(angular.mock.module("myapp"));

  var  controller, 
       $controller,
       mockScope;

  beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
    mockScope = $rootScope.$new();
    $controller = _$controller_;
    controller = $controller('dienTuController', { $scope: mockScope });
  }));

  it('Tôi điền đúng', function () {

    mockScope.dien = "abandon";
    if (mockScope.dien === mockScope.tu){
      mockScope.dung = true;
    }

    expect(mockScope.dung).toBeTruthy();
    expect(mockScope.tu_moi[mockScope.soTuDaHoc].nghia).toEqual("bị bỏ rơi, bị ruồng bỏ");
  });

 it('Tôi điền sai', function () {

    mockScope.dien = "abandn";
    if (mockScope.dien === mockScope.tu){
      mockScope.dung = true;
    }

    expect(mockScope.dung).toBeFalsy();
  });

 it('Tôi điền đúng từ cuối cùng', function () {

    mockScope.dien = "ability";
    if (mockScope.dien === mockScope.tu){
      mockScope.dung = true;
    }

    expect(mockScope.dung).toBeFalsy();
    expect(mockScope.soTuDaHoc % 3 - 1).toEqual(0);
  });
});
describe("Làm bài trắc nghiệm", function () {

  beforeEach(angular.mock.module("myapp"));

  var  controller, 
       $controller,
       mockScope;

  beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
    mockScope = $rootScope.$new();
    $controller = _$controller_;
    controller = $controller('tracNghiemController', { $scope: mockScope });
  }));

  it('Chọn đúng', function () {

    mockScope.chon_dap_an_2();
    expect(mockScope.dung).toBeTruthy();
    expect(mockScope.sai).toBeFalsy();
  });

  it('Chọn sai', function () {
  
    mockScope.chon_dap_an_1();
    expect(mockScope.sai).toBeTruthy();
    expect(mockScope.dung).toBeFalsy();
  });

  it('Chuyển sang bài điền từ', function () {

    mockScope.soTuDaHoc = 2;

    mockScope.chon_dap_an_3();

    expect(mockScope.sai).toBeTruthy();
    expect(mockScope.dung).toBeFalsy();
    expect(mockScope.tu_moi[mockScope.soTuDaHoc].tu).toEqual("ability");
  });
});
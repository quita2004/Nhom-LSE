var myapp = angular.module('myapp');

myapp.controller('onLaiController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

	$scope.soTuDaHoc = 0;

	$scope.tu_moi = svTuMoi.tu_moi;

	$scope.soTuDaHoc++;
	$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
	$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc - 1].nghia;
	$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc - 1].loai_tu;
	$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;

	$scope.click = function () {
		if ($scope.soTuDaHoc % 3 !== 0){
			$scope.soTuDaHoc++;
		}
		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc - 1].nghia;
		$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc - 1].loai_tu;
		$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;
	};


}]);
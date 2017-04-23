var myapp = angular.module('myapp');

myapp.controller('dienTuController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

	svSTDH.get().success(function (data) {
		$scope.soTuDaHoc = data[0].sotudahoc;


		$scope.tu_moi = svTuMoi.tu_moi;

		if ($scope.soTuDaHoc > 2){
			$scope.soTuDaHoc = $scope.soTuDaHoc - 3;
		}

		$scope.dung = false;

		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
		$scope.soTuDaHoc++;

		$scope.$watch('dien', function(){
			
			if ($scope.dien === $scope.tu){
				$scope.dung = true;
			} else {
				$scope.dung = false;
			}
		});


		$scope.click = function(){
			
			$scope.dien = "";
			$scope.dung = false;
			$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
			$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
			$scope.soTuDaHoc++;
		};
	});
}]);
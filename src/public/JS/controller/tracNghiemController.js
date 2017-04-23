var myapp = angular.module('myapp');

myapp.controller('tracNghiemController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

	svSTDH.get().success(function (data) {
		$scope.soTuDaHoc = data[0].sotudahoc;


		$scope.tu_moi = svTuMoi.tu_moi;

		if ($scope.soTuDaHoc > 2){
			$scope.soTuDaHoc = $scope.soTuDaHoc - 3;
		}

		$scope.a = 0;
		$scope.b = 0;
		$scope.c = 0;
		$scope.d = 0;
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

		$scope.sai = false;
		$scope.dung = false;

		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

		$scope.rand();
		// console.log($scope.a + "," + $scope.b + "," +$scope.c + ","+$scope.d + ",");
		$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + $scope.a].nghia;
		$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + $scope.b].nghia;
		$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + $scope.c].nghia;
		$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + $scope.d].nghia;
		$scope.soTuDaHoc++;


		$scope.click = function () {

			$scope.dung = false;
			$scope.sai = false;

			
			$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
			$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

			$scope.rand();
			// console.log($scope.a + "," + $scope.b + "," +$scope.c + ","+$scope.d + ",");
			$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + $scope.a].nghia;
			$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + $scope.b].nghia;
			$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + $scope.c].nghia;
			$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + $scope.d].nghia;
			$scope.soTuDaHoc++;

		};


		$scope.chon_dap_an_1 = function(){
			if ($scope.nghia1 === $scope.nghia){
				$scope.dung = true;
				$scope.sai = false;
			} else {
				$scope.sai = true;
				$scope.dung = false;
			}
		};
		$scope.chon_dap_an_2 = function(){
			if ($scope.nghia2 === $scope.nghia){
				$scope.dung = true;
				$scope.sai = false;
			} else {
				$scope.sai = true;
				$scope.dung = false;
			}
		};
		$scope.chon_dap_an_3 = function(){
			if ($scope.nghia3 === $scope.nghia){
				$scope.dung = true;
				$scope.sai = false;
			} else {
				$scope.sai = true;
				$scope.dung = false;
			}
		};
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
}]);
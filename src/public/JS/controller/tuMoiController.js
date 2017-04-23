var myapp = angular.module('myapp');

myapp.controller('tuMoiController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

	svSTDH.get().success(function (data) {
		$scope.soTuDaHoc = data[0].sotudahoc;
		

		$scope.tu_moi = svTuMoi.tu_moi;

		$scope.soTuDaHoc++;

		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc - 1].nghia;
		$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc -1].loai_tu;
		$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;


		//update data
		data[0].sotudahoc = $scope.soTuDaHoc;
		svSTDH.update(data[0])

		$scope.click = function () {

			$scope.loading = true;
			$scope.soTuDaHoc++;
			
			$scope.tu = $scope.tu_moi[$scope.soTuDaHoc - 1].tu;
			$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc -1 ].nghia;
			$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc - 1].loai_tu;
			$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc - 1].phat_am;

			data[0].sotudahoc = $scope.soTuDaHoc;
			svSTDH.update(data[0]);
		};
	});

}]);
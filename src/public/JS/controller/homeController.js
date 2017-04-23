var myapp = angular.module('myapp');

myapp.controller('homeController', ['$scope', 'svTuMoi', 'svSTDH', function ($scope, svTuMoi, svSTDH) {

	svSTDH.get().success(function (data) {
		$scope.soTuDaHoc = data[0].sotudahoc;

		if ($scope.soTuDaHoc > 2){
			$scope.hien = true;
		}

		$scope.hoc_lai = function(){
			$scope.soTuDaHoc = 0;
			data[0].sotudahoc = $scope.soTuDaHoc;

			svSTDH.update(data[0]);
		};
		
	});
}]);
var myapp = angular.module('myapp', ['ngRoute', 'ngResource']);

myapp.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/home', {
		templateUrl: 'pages/home.html',
		controller: 'tuMoiController'
	})
	.when('/tu-moi', {
		templateUrl: 'pages/tu-moi.html',
		controller: 'tuMoiController'
	})
	.when('/trac-nghiem', {
		templateUrl: 'pages/trac-nghiem.html',
		controller: 'tracNghiemController'
	})
	.when('/dien-tu', {
		templateUrl: 'pages/dien-tu.html',
		controller: 'dienTuController'
	})
	.when('/on-lai', {
		templateUrl: 'pages/tu-moi.html',
		controller: 'onLaiController'
	})
})

myapp.service('controll', function () {
	this.soTuDaHoc = 0;

	this.tu_moi = [
	{
		tu: "abandon",
		nghia: "bỏ, từ bỏ",
		loai_tu: "(v)",
		phat_am: "əbændən"
	},
	{
		tu: "abandoned",
		nghia: "bị bỏ rơi, bị ruồng bỏ",
		loai_tu: "(adj)",
		phat_am: "ə'bændənd"
	},
	{
		tu: "ability",
		nghia: "khả năng, năng lực",
		loai_tu: "(n)",
		phat_am: "ə'biliti"
	},
	{
		tu: "able",
		nghia: "có năng lực, có tài",
		loai_tu: "(adj)",
		phat_am: "eibl"
	},
	{
		tu: "unable",
		nghia: "không có năng lực, không có tài",
		loai_tu: "(adj)",
		phat_am: "'ʌn'eibl"
	},
	{
		tu: "about",
		nghia: "khoảng, về",
		loai_tu: "(adv)",
		phat_am: "ə'baut"
	},
	{
		tu: "above",
		nghia: "ở trên, lên trên",
		loai_tu: "(adv)",
		phat_am: "ə'bʌv"
	}

	];

});

myapp.controller('homeController', ['$scope', 'controll', function ($scope, controll) {

	$scope.soTuDaHoc = controll.soTuDaHoc;
	if ($scope.soTuDaHoc > 2){
		$scope.hien = true;
	}

	$scope.hoc_lai = function(){
		controll.soTuDaHoc = 0;
		$scope.soTuDaHoc = 0;
		console.log(controll.soTuDaHoc);
	};
	
}]);

myapp.controller('tuMoiController', ['$scope', 'controll', function ($scope, controll) {

	$scope.soTuDaHoc = controll.soTuDaHoc;
	$scope.tu_moi = controll.tu_moi;

	$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
	$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
	$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc].loai_tu;
	$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc].phat_am;
	$scope.soTuDaHoc++;
	
	$scope.click = function () {
		
		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
		$scope.loai_tu = $scope.tu_moi[$scope.soTuDaHoc].loai_tu;
		$scope.phat_am = $scope.tu_moi[$scope.soTuDaHoc ].phat_am;
		if ($scope.soTuDaHoc % 3 !== 0){
			$scope.soTuDaHoc++;
		}
		controll.soTuDaHoc = $scope.soTuDaHoc;
	};

	// $scope.$watch('soTuDaHoc', function () {
	// 	controll.soTuDaHoc = $scope.soTuDaHoc;
	// });


}]);

myapp.controller('tracNghiemController', ['$scope', 'controll', function ($scope, controll) {
	$scope.soTuDaHoc = 0;
	if (controll.soTuDaHoc > 2){
		$scope.soTuDaHoc = controll.soTuDaHoc - 3;
	}
	$scope.tu_moi = controll.tu_moi;

	// $scope.soTuDaHoc = controll.soTuDaHoc;
	$scope.sai = false;
	$scope.dung = false;
	
	$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
	$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

	$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + 2].nghia;
	$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + 0].nghia;
	$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + 1].nghia;
	$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + 3].nghia;
	$scope.soTuDaHoc++;

	$scope.click = function () {
		$scope.dung = false;
		$scope.sai = false;

		//$scope.da_hoc = $scope.soTuDaHoc - 3;
		
		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;

		$scope.nghia1 = $scope.tu_moi[$scope.soTuDaHoc + 2].nghia;
		$scope.nghia2 = $scope.tu_moi[$scope.soTuDaHoc + 1].nghia;
		$scope.nghia3 = $scope.tu_moi[$scope.soTuDaHoc + 0].nghia;
		$scope.nghia4 = $scope.tu_moi[$scope.soTuDaHoc + 3].nghia;

		if ($scope.soTuDaHoc % 3 !== 0){
			$scope.soTuDaHoc++;
		}
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

}]);

myapp.controller('dienTuController', ['$scope', 'controll', function ($scope, controll) {

	$scope.tu_moi = controll.tu_moi;
	$scope.soTuDaHoc = 0;
	if (controll.soTuDaHoc > 2){
		$scope.soTuDaHoc = controll.soTuDaHoc - 3;
	}

	$scope.dung = false;

	$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
	$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
	$scope.soTuDaHoc++;
		
	$scope.$watch('dien', function(){
		if ($scope.dien === $scope.tu){
			$scope.dung = true;
		}
	});
	

	$scope.click = function(){
		$scope.dien = "";
		$scope.dung = false;
		$scope.nghia = $scope.tu_moi[$scope.soTuDaHoc].nghia;
		$scope.tu = $scope.tu_moi[$scope.soTuDaHoc].tu;
		if ($scope.soTuDaHoc % 3 !== 0){
			$scope.soTuDaHoc++;
		}
	};
}]);

myapp.controller('onLaiController', ['$scope', 'controll', function ($scope, controll) {

	$scope.soTuDaHoc1 = controll.soTuDaHoc;
	$scope.tu_moi = controll.tu_moi;
	$scope.soTuDaHoc = 0;

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
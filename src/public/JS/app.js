var myapp = angular.module('myapp', ['ngRoute', 'ngResource']);

myapp.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/JS/pages/home.html',
		controller: 'homeController'
	})
	.when('/home', {
		templateUrl: 'assets/JS/pages/home.html',
		controller: 'tuMoiController'
	})
	.when('/tu-moi', {
		templateUrl: 'assets/JS/pages/tu-moi.html',
		controller: 'tuMoiController'
	})
	.when('/trac-nghiem', {
		templateUrl: 'assets/JS/pages/trac-nghiem.html',
		controller: 'tracNghiemController'
	})
	.when('/dien-tu', {
		templateUrl: 'assets/JS/pages/dien-tu.html',
		controller: 'dienTuController'
	})
	.when('/on-lai', {
		templateUrl: 'assets/JS/pages/tu-moi.html',
		controller: 'onLaiController'
	})
})

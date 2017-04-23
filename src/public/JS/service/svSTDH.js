var myapp = angular.module('myapp');

myapp.factory("svSTDH", ["$http", function ($http){

	return {
		get: function(){
			return $http.get("/api/sotudahocs");
		},
		update: function (sotudahocData) {
            return $http.put("/api/sotudahoc", sotudahocData);
        }
	}
}]);
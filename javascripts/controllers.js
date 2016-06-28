// controllers
weatherApp.controller('homeController',['$scope', 'cityService', 
	function($scope, cityService){

		$scope.city = cityService.city;

		$scope.$watch('city', function(){
			cityService.city = $scope.city;
		});
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 
	function($scope, $resource, $routeParams ,cityService){

		$scope.city = cityService.city;

		$scope.days = $routeParams.days || '2';

		$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=badc3f034ccede241bc3747aa9ca69ee", {
			callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }});

			$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

			// console.log($scope.weatherResult);
			$scope.convertToFahrenheit = function(degK){

				return Math.round((1.8 * (degK - 273)) + 32);
			}

			$scope.convertToDate = function(dt){

				return new Date(dt * 1000);
			};
		 

}]);
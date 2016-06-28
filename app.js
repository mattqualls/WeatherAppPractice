// // module
// var weatherApp = angular.module('weatherApp',['ngRoute', 'ngResource']);


// ROUTES
// weatherApp.config(function ($routeProvider){

// 	$routeProvider

// 	.when('/', {
// 		templateUrl: 'pages/home.html',
// 		controller: 'homeController'
// 	})

// 	.when('/forecast',{
// 		templateUrl: 'pages/forecast.html',
// 		controller: 'forecastController'
// 	})

// 	.when('/forecast/:days', {
// 		templateUrl: 'pages/forecast.html',
// 		controller: 'forecastController'
// 	})

// });

// SERVICES- custom services
// weatherApp.service('cityService', function(){

// 	this.city = "Nashville, TN";
// });


// controllers
// weatherApp.controller('homeController',['$scope', 'cityService', 
// 	function($scope, cityService){

// 		$scope.city = cityService.city;

// 		$scope.$watch('city', function(){
// 			cityService.city = $scope.city;
// 		});
// }]);

// weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 
// 	function($scope, $resource, $routeParams ,cityService){

// 		$scope.city = cityService.city;

// 		$scope.days = $routeParams.days || '2';

// 		$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=badc3f034ccede241bc3747aa9ca69ee", {
// 			callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }});

// 			$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

// 			// console.log($scope.weatherResult);
// 			$scope.convertToFahrenheit = function(degK){

// 				return Math.round((1.8 * (degK - 273)) + 32);
// 			}

// 			$scope.convertToDate = function(dt){

// 				return new Date(dt * 1000);
// 			};
		 

// }]);

// DIRECTIVES
// weatherApp.directive("weatherReport", function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'directives/weatherReport.html',
// 		replace: true,
// 		scope: {
// 			weatherDay: "=",
// 			convertToStandard: "&",
// 			convertToDate: "&",
// 			dateFormat: "@"
// 		}
// 	}
// });
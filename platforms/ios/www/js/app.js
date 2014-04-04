;(function (angular, undefined) {
	"use strict";

	// Declare app level module which depends on filters, and services
	angular
		.module("sprtidApp", [
			"ngRoute",
			"sprtidApp.filters",
			"sprtidApp.services",
			"sprtidApp.directives",
			"sprtidApp.controllers"
		])
		.config(["$routeProvider", function($routeProvider) {
			$routeProvider.when("/home", {
				templateUrl: "partials/home.html",
				controller: "HomeController",
				bodyClassname: "home-screen"
			});
			$routeProvider.when("/scan", {
				templateUrl: "partials/scan.html",
				controller: "ScanController",
				bodyClassname: "scan-screen"
			});
			$routeProvider.when("/id", {
				templateUrl: "partials/id.html",
				controller: "IdController",
				bodyClassname: "id-screen"
			});
			$routeProvider.when("/create", {
				templateUrl: "partials/create.html",
				controller: "CreateController",
				bodyClassname: "create-screen"
			});
			$routeProvider.when("/shop", {
				templateUrl: "partials/shop.html",
				controller: "ShopController",
				bodyClassname: "shop-screen"
			});
			$routeProvider.when("/settings", {
				templateUrl: "partials/settings.html",
				controller: "SettingsController",
				bodyClassname: "settings-screen"
			});
			$routeProvider.otherwise({redirectTo: "/home"});
		}])
		.run(['$location', '$rootScope', function ($location, $rootScope) {
			$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
				if (current && current.$$route) {
					$rootScope.bodyClassname = current.$$route.bodyClassname;
				}
			});
		}]);
})(angular);

;(function (angular, undefined) {
	"use strict";

	// Declare app level module which depends on filters, and services
	angular
		.module("sprtidApp", [
			"ngRoute",
			"sprtidApp.factories",
			"sprtidApp.filters",
			"sprtidApp.services",
			"sprtidApp.directives",
			"sprtidApp.controllers"
		])
		.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true).hashPrefix('!');

			$routeProvider.when("/home", {
				templateUrl: "/partials/home.html",
				controller: "HomeController",
				bodyClassname: "home-screen"
			});
			$routeProvider.when("/scan", {
				templateUrl: "/partials/scan.html",
				controller: "ScanController",
				bodyClassname: "scan-screen"
			});
			$routeProvider.when("/id/:id", {
				templateUrl: "/partials/id.html",
				controller: "IdController",
				bodyClassname: "identity-screen"
			});
			$routeProvider.when("/create", {
				templateUrl: "/partials/create.html",
				controller: "CreateController",
				bodyClassname: "create-screen"
			});
			$routeProvider.when("/shop", {
				templateUrl: "/partials/shop.html",
				controller: "ShopController",
				bodyClassname: "shop-screen"
			});
			$routeProvider.when("/settings", {
				templateUrl: "/partials/settings.html",
				controller: "SettingsController",
				bodyClassname: "settings-screen"
			});
			$routeProvider.otherwise({
				redirectTo: "/home"
			});
		}])
		.run(["$location", "$rootScope", "$log", function ($location, $rootScope, $log) {
			$rootScope.$on("$locationChangeStart", function () {
				$log.debug("$locationChangeStart", arguments);
			});

			$rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
				if (current && current.$$route) {
					$rootScope.bodyClassname = current.$$route.bodyClassname;
				} else {
					$rootScope.bodyClassname = "";
				}
			});

			$rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
				$log.debug("failed to change routes", arguments);
			});
		}]);
})(angular);

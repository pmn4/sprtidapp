;(function (angular, undefined) {
	"use strict";

	angular.module("sprtidApp.controllers", [])
		.controller("HomeController", ["$scope", "$log", function($scope, $log) {
			$log.info("HomeController", arguments);
		}])
		.controller("ScanController", ["$scope", "$log", function($scope, $log) {
			$log.info("ScanController", arguments);
		}])
		.controller("IdController", ["$scope", "$log", function($scope, $log) {
			$log.info("IdController", arguments);
		}])
		.controller("CreateController", ["$scope", "$log", function($scope, $log) {
			$log.info("CreateController", arguments);
		}])
		.controller("ShopController", ["$scope", "$log", function($scope, $log) {
			$log.info("ShopController", arguments);
		}])
		.controller("SettingsController", ["$scope", "$log", function($scope, $log) {
			$log.info("SettingsController", arguments);
		}]);
})(angular);

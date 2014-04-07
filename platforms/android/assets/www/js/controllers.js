;(function (angular, undefined) {
	"use strict";

	angular.module("sprtidApp.controllers", [])
		.controller("HomeController", ["$scope", "$log", function($scope, $log) {
			$log.info("HomeController", arguments);
		}])
		.controller("ScanController", ["$scope", "$log", "$location", function($scope, $log, $location) {
			$log.info("ScanController", arguments);

			$scope.title = "Scanning";
			$scope.response = "";

			$scope.onSuccess = function (scanRespose) {
				$log.info("ScanController :: ~ctor (success)", scanRespose);

				if (scanRespose) {
					$scope.$apply(function() {
						$scope.title = "Success";
						$scope.response = JSON.stringify(scanRespose);

						$location.path(scanRespose.text.replace(/^https?:\/\/[^\/]+([^?#]*)/i, "$1")).replace();
					});
				} else {
					// todo: handle error
				}
			};

			$scope.onError = function (scanRespose) {
				$log.info("ScanController :: ~ctor (error)", scanRespose);

				$scope.$apply(function() {
					$scope.title = "Failure";
					$scope.response = JSON.stringify(scanRespose);
				});
			};
		}])
		.controller("IdController", ["$scope", "$log", "$routeParams", function ($scope, $log, $routeParams) {
			$log.info("IdController", arguments);
		}])
		.controller("CreateController", ["$scope", "$log", function ($scope, $log) {
			$log.info("CreateController", arguments);
		}])
		.controller("ShopController", ["$scope", "$log", function ($scope, $log) {
			$log.info("ShopController", arguments);
		}])
		.controller("SettingsController", ["$scope", "$log", function ($scope, $log) {
			$log.info("SettingsController", arguments);
		}])
		;
})(angular);

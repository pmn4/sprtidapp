;(function (angular, undefined) {
	"use strict";

	angular.module("sprtidApp.controllers", [])
		.controller("HomeController", ["$scope", "$log", function($scope, $log) {
			$log.info("HomeController", arguments);
		}])
		.controller("ScanController", ["$scope", "$log", function($scope, $log) {
			$log.info("ScanController", arguments);

			$scope.title = "Scanning";
			$scope.response = "";

			$scope.onSuccess = function (results) {
				$log.info("ScanController :: ~ctor (success)", results);

				$scope.$apply(function() {
					$scope.title = "Success";
					$scope.response = JSON.stringify(results);
				});
			};

			$scope.onError = function (results) {
				$log.info("ScanController :: ~ctor (error)", results);

				$scope.$apply(function() {
					$scope.title = "Failure";
					$scope.response = JSON.stringify(results);
				});
			};
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

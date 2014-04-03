;(function (angular, BarcodeScanner, undefined) {
	'use strict';

	/* Directives */

	angular.module('sprtidApp.directives', [])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
			};
		}])
		.directive('scanner', ['$log', BarcodeScanner])
	;
})(angular, BarcodeScanner);

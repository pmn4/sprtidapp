;(function (angular, ScannerClass, undefined) {
	'use strict';

	/* Directives */

	angular.module('sprtidApp.directives', [])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
			};
		}])
		.directive('cordovaBarcodeScanner', ['$log', ScannerClass])
	;
})(angular, AngularCordova.Plugins.BarcodeScanner);

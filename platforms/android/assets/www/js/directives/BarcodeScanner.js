/*jshint smarttabs:true */

var AngularCordova = AngularCordova || {};
AngularCordova.Plugins = AngularCordova.Plugins || {};

AngularCordova.Plugins.BarcodeScanner = (function (document, cordova, undefined) {
	'use strict';

	return function ($log) {
		return {
			template: '<div class="barcode-scanner" ng-transclude></div>',
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				onSuccess: '&',
				onError: '&'
			},
			link: function (scope, $element) {
				$log.info("BarcodeScanner#link", arguments);

				// called when camera stream is loaded
				var fnOnSuccess = function (results) {
					$log.log("BarcodeScanner :: link (success)", results);

					/* Call custom callback */
					if (scope.onSuccess) {
						scope.onSuccess({results: results});
					}
				};

				// called when any error happens
				var fnOnError = function (results) {
					$log.log("BarcodeScanner :: link (error)", results);

					/* Call custom callback */
					if (scope.onError) {
						scope.onError({results: results});
					}

					return;
				};

				var startScan = function () {
					cordova.plugins.barcodeScanner.scan(fnOnSuccess, fnOnError);
				};

				document.addEventListener("deviceready", function () {
					// $element[0].addEventListener("touchend", startScan, false);
					startScan();
				}, false);
			},
			controller: function ($scope, $element) {
				$log.info("BarcodeScanner#controller", arguments);

				var fnError = $scope.onError;
				$scope.handleError = function () {
					$log.info("BarcodeScanner :: controller (error)", arguments);

					if(typeof(fnError) === 'function') {
						fnError.call($scope, arguments);
					}
				};

				var fnSuccess = $scope.onSuccess;
				$scope.handleSuccess = function () {
					$log.info("BarcodeScanner :: controller (success)", arguments);

					if(typeof(fnSuccess) === 'function') {
						fnSuccess.call($scope, arguments);
					}
				};
			}
		};
	};
})(document, cordova);

// var resultDiv;

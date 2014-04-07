/*jshint smarttabs:true */
/*jshint eqnull:true */

var AngularCordova = AngularCordova || {};
AngularCordova.Plugins = AngularCordova.Plugins || {};

function BarcodeScannerResponse (text, format, cancelled) {
	this.text = text || "";
	this.format = format || BarcodeScannerResponse.Types.TEXT_TYPE;
	this.cancelled = !!cancelled;
}

BarcodeScannerResponse.create = function (obj) {
	if(!obj || typeof(obj.text) === "undefined" && typeof(obj.format) === "undefined" && typeof(obj.cancelled) === "undefined") {
		return null;
	}

	return new BarcodeScannerResponse(obj.text, obj.format, obj.cancelled);
};

BarcodeScannerResponse.Types = {
	TEXT_TYPE: "TEXT_TYPE",
	EMAIL_TYPE: "EMAIL_TYPE",
	PHONE_TYPE: "PHONE_TYPE",
	SMS_TYPE: "SMS_TYPE"
};

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
				var fnOnSuccess = function (result) {
					$log.log("BarcodeScanner :: link (success)", result);

					/* Call custom callback */
					if (scope.onSuccess) {
						scope.onSuccess({
							results: BarcodeScannerResponse.create(result)
						});
					}
				};

				// called when any error happens
				var fnOnError = function (result) {
					$log.log("BarcodeScanner :: link (error)", result);

					/* Call custom callback */
					if (scope.onError) {
						scope.onError({
							results: BarcodeScannerResponse.create(result)
						});
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

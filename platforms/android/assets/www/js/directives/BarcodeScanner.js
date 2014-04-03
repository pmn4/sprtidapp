/*jshint smarttabs:true */

var BarcodeScanner = (function (document, undefined) {
	'use strict';

	return function ($log) {
		return {
			template: '<div class="webcam" ng-transclude ng-click="toggle()" ng-dbclick="multiToggle()"></div>',
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				onError: '&',
				onStream: '&',
				onStreaming: '&'
			},
			link: function ($scope, element) {
				$log.info("BarcodeScanner#link", arguments);
			},
			controller: function ($scope, $element) {
				$log.info("BarcodeScanner#controller", arguments);
			}
		};
	};
})(document);

// var resultDiv;

// function init() {
// 	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
// 	resultDiv = document.querySelector("#results");
// }
// document.addEventListener("deviceready", init, false);

// function startScan() {

// 	cordova.plugins.barcodeScanner.scan(
// 		function (result) {
// 			var s = "Result: " + result.text + "<br/>" +
// 			"Format: " + result.format + "<br/>" +
// 			"Cancelled: " + result.cancelled;
// 			resultDiv.innerHTML = s;
// 		},
// 		function (error) {
// 			alert("Scanning failed: " + error);
// 		}
// 	);

// }

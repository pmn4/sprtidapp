/*jshint smarttabs:true */

;(function (angular, undefined) {
	"use strict";

	angular.module("sprtidApp.factories", [])
		.factory("$identityProvider", ["$http", "$log", function($http, $log) {
			var URL_TOKEN_ID = "#{id}",
			    APP_ID_URL_PATTERN = "/app/id/" + URL_TOKEN_ID;

			return {
				fetch: fetch
			};

			function fetch(id, fnCallback) {
				var url = APP_ID_URL_PATTERN.replace(URL_TOKEN_ID, id);

				return $http.get(url).success(function(data) {
					if(typeof(fnCallback) === 'function') fnCallback(data);

					$log.log("identityProvider response: ", data);
				});
			}
		}])
		;
})(angular);

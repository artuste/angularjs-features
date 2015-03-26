(function () {
    'use strict';

    angular
        .module('app.promises')
        .controller('Promises', Promises)
        .factory('DataService', DataService);

    Promises.$inject = ['DataService'];

    function Promises(DataService) {
        /*jshint validthis: true */
        var vm = this;

        vm.timeoutDataData = "Wait ...";

        DataService.getTimeoutData()
            .then(function (response) {
               vm.timeoutDataData = response;
            });

        DataService.getHttpData()
            .then(function (response) {
                vm.httpData = response;
            });

        DataService.getCallbackData(function(response) {
            vm.callbackData = response;
        });

    }

    function DataService($http, $q, $timeout) {
        return {
            getTimeoutData: getTimeoutData,
            getHttpData: getHttpData,
            getCallbackData: getCallbackData
        };

        function _data() {
            return {
                name: "Albert",
                age: 21
            };
        }


        ////////////////

        function getHttpData() {
            return $http.get('app/modules/promises/data.json')
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }

        function getTimeoutData() {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(_data());
            }, 3000);

            return deferred.promise;
        }

        function getCallbackData(callback) {
            $timeout(function() {
                callback(_data());
            }, 2000);
        }
    }
})();

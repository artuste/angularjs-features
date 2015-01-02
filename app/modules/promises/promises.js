(function () {
    'use strict';

    angular
        .module('app.promises')
        .controller('Promises', Promises)
        .factory('DataService', DataService);

    Promises.$inject = ['common', 'DataService'];

    function Promises(common, DataService) {
        /*jshint validthis: true */
        var vm = this;

        vm.timeoutPromiseData = "Wait ...";

        DataService.timeoutPromise()
            .then(function (response) {
               vm.timeoutPromiseData = response;
            });

        DataService.getData()
            .then(function (response) {
                vm.data = response;
            });

    }

    function DataService($http, $q, $timeout) {
        return {
            timeoutPromise: timeoutPromise,
            getData: getData
        };


        ////////////////

        function timeoutPromise() {
            var deferred = $q.defer();

            //deferred.promise.then(function () {
            //    return 'Promise - resolved!';
            //});

            $timeout(function () {
                var data = {
                    name: "Albert",
                    age: 21
                };

                deferred.resolve(data);
            }, 3000);

            return deferred.promise;
        }

        function getData() {
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
    }
})();

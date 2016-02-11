(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        return {
            get: function () {
                return $http.get('app/modules/lazyLoad/data.json');
            }
        }
    }

})();

(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        return {
            get: function (offsetStart, offsetEnd) {
                return $http.get('app/modules/lazyLoad/data.json?offsetStart=' + offsetStart + '&offsetEnd=' + offsetEnd);
            }
        }
    }

})();

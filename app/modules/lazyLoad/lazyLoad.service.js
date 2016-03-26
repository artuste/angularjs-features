(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .factory('LazyLoadService', LazyLoadService);

    LazyLoadService.$inject = ['$http'];

    function LazyLoadService($http) {
        return {
            get: function (offsetStart, offsetEnd) {
                return $http.get('app/modules/lazyLoad/data.json?offsetStart=' + offsetStart + '&offsetEnd=' + offsetEnd);
            }
        }
    }

})();

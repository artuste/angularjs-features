(function () {
    'use strict';

    angular.module('app')
        .config(['$urlRouterProvider', config]);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    }

})();
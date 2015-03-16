(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', config]);

    var appPath = 'app/modules';

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: appPath + '/home/home.tpl.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('widgets', {
                url: '/widgets',
                templateUrl: appPath + '/widgets/widgets.tpl.html',
                controller: 'Widgets',
                controllerAs: 'vm'
            })
            .state('promises', {
                url: '/promises',
                templateUrl: appPath + '/promises/promises.tpl.html',
                controller: 'Promises',
                controllerAs: 'vm'
            })
            .state('patterns', {
                url: '/patterns',
                templateUrl: appPath + '/patterns/patterns.tpl.html',
                controller: 'Patterns',
                controllerAs: 'vm'
            });

    }

})();
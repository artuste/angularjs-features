'use strict';

var appPath = 'app/modules';

angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: appPath + '/home/home.tpl.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .when('/widgets', {
                templateUrl: appPath + '/widgets/widgets.tpl.html',
                controller: 'Widgets',
                controllerAs: 'vm'
            })
            .when('/promises', {
                templateUrl: appPath + '/promises/promises.tpl.html',
                controller: 'Promises',
                controllerAs: 'vm'
            })
            .when('/patterns', {
                templateUrl: appPath + '/patterns/patterns.tpl.html',
                controller: 'Patterns',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home',
                controllerAs: 'vm'
            });
    });
'use strict';

var appPath = 'app/modules';

angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: appPath + '/home/home.tpl.html',
                controller: 'Home'
            })
            .when('/widgets', {
                templateUrl: appPath + '/widgets/widgets.tpl.html',
                controller: 'Widgets',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
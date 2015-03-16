(function () {
    'use strict';

    angular.module('app')
        .config(['$urlRouterProvider', config]);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        //$stateProvider
        //    .state('home', {
        //        url: '/home',
        //        templateUrl: 'app/modules/home/home.tpl.html',
        //        controller: 'Home',
        //        controllerAs: 'vm',
        //        resolve: {
        //            loadModule: ['$ocLazyLoad', function($ocLazyLoad) {
        //                return $ocLazyLoad.load([
        //                    'app/modules/home/home.module.js',
        //                    'app/modules/home/home.js'
        //                ])
        //            }]
        //        }
        //    });
            //.state('widgets', {
            //    url: '/widgets',
            //    templateUrl: appPath + '/widgets/widgets.tpl.html',
            //    controller: 'Widgets',
            //    controllerAs: 'vm'
            //})
            //.state('promises', {
            //    url: '/promises',
            //    templateUrl: appPath + '/promises/promises.tpl.html',
            //    controller: 'Promises',
            //    controllerAs: 'vm'
            //})
            //.state('patterns', {
            //    url: '/patterns',
            //    templateUrl: appPath + '/patterns/patterns.tpl.html',
            //    controller: 'Patterns',
            //    controllerAs: 'vm'
            //});

    }

})();
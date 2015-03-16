(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/modules/home/home.tpl.html',
                controller: 'Home',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.home',
                            files: [
                                'app/modules/home/home.module.js',
                                'app/modules/home/home.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

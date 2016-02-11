(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('lazyLoad', {
                url: '/lazyLoad',
                templateUrl: 'app/modules/lazyLoad/lazyLoad.tpl.html',
                controller: 'LazyLoad',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.lazyLoad',
                            files: [
                                'app/modules/lazyLoad/lazyLoad.module.js',
                                'app/modules/lazyLoad/lazyLoad.js',
                                'app/modules/lazyLoad/lazyLoad.service.js',
                                'app/modules/lazyLoad/components/lazyLoadComponent.js'
                            ]
                        });
                    }]
                }
            });
    }
})();
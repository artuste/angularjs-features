(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('reactive', {
                url: '/reactive',
                templateUrl: 'app/modules/reactive/reactive.tpl.html',
                controller: 'Reactive',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.reactive',
                            files: [
                                'app/modules/reactive/reactive.module.js',
                                'app/modules/reactive/reactive.js'
                            ]
                        });
                    }]
                }
            });
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('scopes', {
                url: '/scopes',
                templateUrl: 'app/modules/scopes/scopes.tpl.html',
                controller: 'Scopes',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.scopes',
                            files: [
                                'app/modules/scopes/scopes.module.js',
                                'app/modules/scopes/scopes.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

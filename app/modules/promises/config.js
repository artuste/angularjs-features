(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('promises', {
                url: '/promises',
                templateUrl: 'app/modules/promises/promises.tpl.html',
                controller: 'Promises',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.promises',
                            files: [
                                'app/modules/promises/promises.module.js',
                                'app/modules/promises/promises.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

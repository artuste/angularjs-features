(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('patterns', {
                url: '/patterns',
                templateUrl: 'app/modules/patterns/patterns.tpl.html',
                controller: 'Patterns',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.patterns',
                            files: [
                                'app/modules/patterns/patterns.module.js',
                                'app/modules/patterns/patterns.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('architecturalPatterns', {
                url: '/architecturalPatterns',
                templateUrl: 'app/modules/architecturalPatterns/architecturalPatterns.tpl.html',
                controller: 'ArchitecturalPatterns',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.architecturalPatterns',
                            files: [
                                'app/modules/architecturalPatterns/architecturalPatterns.module.js',
                                'app/modules/architecturalPatterns/architecturalPatterns.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

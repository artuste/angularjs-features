(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('animations', {
                url: '/animations',
                templateUrl: 'app/modules/animations/animations.tpl.html',
                controller: 'Animations',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.animations',
                            files: [
                                'app/modules/animations/animations.module.js',
                                'app/modules/animations/animations.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('interpolation', {
                url: '/interpolation',
                templateUrl: 'app/modules/interpolation/interpolation.tpl.html',
                controller: 'Interpolation',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.interpolation',
                            files: [
                                'app/modules/interpolation/interpolation.module.js',
                                'app/modules/interpolation/interpolation.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

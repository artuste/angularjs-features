(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('widgets', {
                url: '/widgets',
                templateUrl: 'app/modules/widgets/widgets.tpl.html',
                controller: 'Widgets',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.widgets',
                            files: [
                                'app/modules/widgets/widgets.module.js',
                                'app/modules/widgets/widgets.js',
                                'app/modules/widgets/myAge/myAge.js',
                                'app/modules/widgets/tooltips/tooltips.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

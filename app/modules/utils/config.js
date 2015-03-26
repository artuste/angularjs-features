(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('utils', {
                url: '/utils',
                templateUrl: 'app/modules/utils/utils.tpl.html',
                controller: 'Utils',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.utils',
                            files: [
                                'app/modules/utils/utils.module.js',
                                'app/modules/utils/utils.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

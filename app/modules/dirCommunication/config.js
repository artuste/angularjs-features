(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('dirCommunication', {
                url: '/dirCommunication',
                templateUrl: 'app/modules/dirCommunication/dirCommunication.tpl.html',
                controller: 'DirCommunication',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.dirCommunication',
                            files: [
                                'app/modules/dirCommunication/dirCommunication.module.js',
                                'app/modules/dirCommunication/dirCommunication.js',
                                'app/modules/dirCommunication/directives/outer.js',
                                'app/modules/dirCommunication/directives/inner.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

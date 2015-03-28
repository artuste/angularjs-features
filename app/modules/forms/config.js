(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('forms', {
                url: '/forms',
                templateUrl: 'app/modules/forms/forms.tpl.html',
                controller: 'Forms',
                controllerAs: 'vm',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.forms',
                            files: [
                                'app/modules/forms/forms.module.js',
                                'app/modules/forms/forms.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

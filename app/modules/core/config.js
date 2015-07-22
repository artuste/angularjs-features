(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$locationProvider', 'toastrConfig', config]);

    function config($stateProvider, $locationProvider, toastrConfig) {
        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise("/home");

        //$stateProvider
        //    .state('scopes', {
        //        url: '/scopes',
        //        templateUrl: 'app/modules/scopes/scopes.tpl.html',
        //        controller: 'Scopes',
        //        controllerAs: 'vm',
        //        resolve: {
        //            loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
        //                return $ocLazyLoad.load({
        //                    name: 'app.scopes',
        //                    files: [
        //                        'app/modules/scopes/scopes.module.js',
        //                        'app/modules/scopes/scopes.js'
        //                    ]
        //                });
        //            }]
        //        }
        //    });

        angular.extend(toastrConfig, {
            allowHtml: true,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            tapToDismiss: true,
            target: 'body',
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    }

})();
(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', config]);

    function config($stateProvider) {

        $stateProvider
            .state('seatReservation', {
                url: '/seatReservation',
                templateUrl: 'app/modules/seatReservation/seatReservation.tpl.html',
                controller: 'SeatReservation',
                resolve: {
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app.seatReservation',
                            files: [
                                'app/modules/seatReservation/seatReservation.module.js',
                                'app/modules/seatReservation/seatReservation.js'
                            ]
                        });
                    }]
                }
            });
    }

})();

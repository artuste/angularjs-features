(function() {
    'use strict';

    angular
        .module('app.widgets')
        .controller('Calendar', Calendar);

    Calendar.$inject = ['$log'];

    function Calendar($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.eventSources = {};

        vm.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: vm.alertEventOnClick,
                eventDrop: vm.alertOnDrop,
                eventResize: vm.alertOnResize
            }
        };

        vm.alertEventOnClick = function () {
            $log('alertEventOnClick');
        };

        vm.alertOnDrop = function () {
            $log('alertOnDrop');
        };

        vm.alertOnResize = function () {
            $log('alertOnResize');
        };

    }

})();
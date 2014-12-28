(function() {
    'use strict';

    angular
        .module('app.widgets')
        .controller('wiCalendarController', wiCalendarController)
        .directive('wiCalendar', wiCalendar);

    function wiCalendar() {
        var directive = {
            link: link,
            templateUrl: 'app/modules/widgets/calendar/calendar.tpl.html',
            restrict: 'EA',
            scope: {
                min: '='
            },
            controller: 'wiCalendarController',
            controllerAs: 'vm'
        };
        return directive;


        function link(scope, element, attrs) {

        }
    }

    wiCalendarController.$inject = ['$scope'];

    function wiCalendarController($scope) {
        var vm = this;

        vm.min = $scope.min;
        vm.max = 100;
    }

})();
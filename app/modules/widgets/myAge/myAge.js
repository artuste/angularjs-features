(function () {
    'use strict';

    angular
        .module('app.widgets')
        .controller('wiMyAge', wiMyAgeController)
        .directive('wiMyAge', wiMyAge)
        .filter('setYears', setYears);

    function wiMyAge() {
        var directive = {
            link: link,
            templateUrl: 'app/modules/widgets/myAge/myAge.tpl.html',
            restrict: 'EA',
            scope: {
                min: '='
            },
            controller: 'wiMyAge',
            controllerAs: 'vm'
        };
        return directive;


        function link(scope, element, attrs) {

        }
    }

    wiMyAgeController.$inject = ['$scope'];

    function wiMyAgeController($scope) {
        var vm = this;

        active();

        function active() {

        }

        vm.getAge = function () {
            vm.age = new moment().diff(vm.birthdate, 'years');
        };

        vm.reset = function () {
            vm.birthdate = null;
            vm.age = null;
        };
    }


    function setYears() {
        return function (years) {
            if(years === 1) {
                return years + ' year old';
            } else {
                return years + ' years old';
            }
        };
    }

})();
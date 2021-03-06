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
        /* jshint validthis: true */
        var vm = this;

        active();

        function active() {
            actionButtons();
            checkDate();
        }

        function checkDate() {
            vm.hideActionButtons = false;

            $scope.$watch('vm.birthdate', function(current, original) {
                if(current !== original) {
                    var age = moment().diff(vm.birthdate, 'years');

                    vm.hideActionButtons = false;
                    if(age <= 0) {
                        vm.hideActionButtons = true;
                    }
                }
            });
        }

        function actionButtons() {
            vm.getAge = function () {
                vm.age = moment().diff(vm.birthdate, 'years');
            };

            vm.reset = function () {
                vm.birthdate = null;
                vm.age = null;
            };
        }
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
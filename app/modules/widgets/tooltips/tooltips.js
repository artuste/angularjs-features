(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('componentTooltip', componentTooltip);

    function componentTooltip() {
        return {
            restrict: 'AE',
            scope: {
                message: '@',
                placement: '@?'
            },
            templateUrl: 'app/modules/widgets/tooltips/tooltips.html',
            controller: componentTooltipCtrl
        };
    }

    function componentTooltipCtrl($scope) {
        $scope.infix = 'M.V.B.';
    }
})();

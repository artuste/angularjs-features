(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('formTemplateData', formTemplateData);

    function formTemplateData() {
        return {
            restrict: 'AE',
            scope: {
                url: '@'
            },
            link: link,
            controller: formTemplateDataCtrl
        };
    }

    function formTemplateDataCtrl($scope, $http) {
        $scope.getJson = function () {
            return $http.get($scope.url);
        };
    }

    function link(scope, element, attrs, ctrl, transclude) {
        scope.getJson()
            .then(function (res) {
                scope.$parent.vm.formTemplate = res.data;
            });
    }
})();

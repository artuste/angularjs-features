(function () {
    'use strict';

    angular
        .module('ui.components')
        .directive('componentPortlet', componentPortlet)
        .factory('componentPortletData', componentPortletData);

    function componentPortlet() {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
                vmModel: '@',
                basicMode: '@',

                schema: '@',
                formDefinition: '@',

                name: '@',
                header: '@',
                className: '@',
                footerText: '@'
            },
            link: link,
            controller: componentPortletCtrl,
            templateUrl: 'app/modules/components/portlet/portlet.tpl.html'
        };
    }


    function componentPortletCtrl($scope, componentPortletData) {
        $scope.getFormSettings = function () {
            return !$scope.basicMode ? componentPortletData.getFormSettings($scope.schema, $scope.formDefinition) : true;
        };
    }

    function link(scope) {
        if (!scope.basicMode) {
            scope.getFormSettings()
                .then(function (response) {
                    scope.$parent.vm[scope.vmModel][scope.name] = {
                        schema: response[0].data,
                        formDefinition: response[1].data
                    };
                });
        }
    }

    function componentPortletData($q, $http) {
        return {
            getFormSettings: getFormSettings
        };

        function _getJsonData(url) {
            return $http.get(url);
        }

        function getFormSettings(schema, formDefinition) {
            var promises = [
                _getJsonData(schema),
                _getJsonData(formDefinition)
            ];

            return $q.all(promises);
        }
    }
})();

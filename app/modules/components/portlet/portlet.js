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
                name: '@',
                header: '@',
                className: '@',
                footerText: '@',

                vmModel: '@',

                schema: '@',
                formDefinition: '@'
            },
            link: link,
            controller: componentPortletCtrl,
            templateUrl: 'app/modules/components/portlet/portlet.tpl.html'
        };
    }

    function componentPortletCtrl($scope, componentPortletData) {
        $scope.getFormSettings = function () {
            return componentPortletData.getFormSettings($scope.schema, $scope.formDefinition);
        }
    }

    function link(scope, element, attrs, ctrl, transclude) {
        scope.getFormSettings()
            .then(function (response) {
                scope.$parent.vm[scope.vmModel][scope.name] = {
                    schema: response[0].data,
                    formDefinition: response[1].data
                };
            });
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

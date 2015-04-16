(function () {
    'use strict';

    angular.module('tools', [])
        .directive('countWatchers', function () {
            return {
                scope: {},
                template: '<button ng-click="doCountWatchers()" class="btn btn-xs btn-success pull-right">Count Watchers <span ng-show="wathers">: {{wathers}}</span></button>',
                controller: function ($scope) {

                    function countWatchers() {
                        var root = angular.element(document.getElementsByTagName('body'));

                        var watchers = [];

                        var f = function (element) {
                            angular.forEach(['$scope', '$isolateScope'], function (scopeProperty) {
                                if (element.data() && element.data().hasOwnProperty(scopeProperty)) {
                                    angular.forEach(element.data()[scopeProperty].$$watchers, function (watcher) {
                                        watchers.push(watcher);
                                    });
                                }
                            });

                            angular.forEach(element.children(), function (childElement) {
                                f(angular.element(childElement));
                            });
                        };

                        f(root);

                        // Remove duplicate watchers
                        var watchersWithoutDuplicates = [];
                        angular.forEach(watchers, function (item) {
                            if (watchersWithoutDuplicates.indexOf(item) < 0) {
                                watchersWithoutDuplicates.push(item);
                            }
                        });

                        return watchersWithoutDuplicates.length;
                    };

                    $scope.doCountWatchers = function () {
                        $scope.wathers = countWatchers();
                    };

                }
            }
        });

})();
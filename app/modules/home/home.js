'use strict';

angular.module('app.home', [])

    .controller('Home', function ($scope) {
        this.content = 'Some text';
    })
    .controller('MenuCtrl', function ($scope, $location) {
        $scope.getPath = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        }
    });
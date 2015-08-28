(function(){
    'use strict';

    angular.module('app.dirCommunication')
        .directive('inner', inner);

    function inner() {
        return {
            restrict: 'EA',
            require: "^outer",
            templateUrl: 'app/modules/dirCommunication/directives/inner.html',
            link: function($scope, $elem, $attrs, serverCtrl) {
                $scope.innerTest = serverCtrl.test;
                serverCtrl.log("Hello, this is the inner!");
            }
        };
    }
})();
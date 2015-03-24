(function () {
    "use strict";

    angular.module('app.home')
        .controller('Home', Home);

    Home.$inject = ['$scope'];

    function Home($scope) {
        $scope.content = null;

        $scope.setContent = function (value) {
            $scope.content = value;
        };

        $scope.getContent = function () {
            return true;
        };
    }

})();
(function () {
    "use strict";

    angular.module('app.animations')
        .controller('Animations', Animations);

    Animations.$inject = ['$scope'];

    function Animations($scope) {
        $scope.collection = ['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi'];

    }

})();
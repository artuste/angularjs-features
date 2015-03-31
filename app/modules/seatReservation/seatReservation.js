(function () {
    "use strict";

    angular.module('app.seatReservation')
        .controller('SeatReservation', SeatReservation)
        .factory('SeatReservationSvc', SeatReservationSvc);

    SeatReservation.$inject = ['$scope', 'SeatReservationSvc', 'logger'];
    SeatReservationSvc.$inject = ['common'];

    function SeatReservation($scope, SeatReservationSvc, logger) {
        $scope.moduleUrl = 'app/modules/seatReservation/';

        $scope.selected = [];
        $scope.reserved = ['A2', 'A3', 'C5', 'C6', 'C7', 'C8', 'J1', 'J2', 'J3', 'J4'];

        $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];

        // seat onClick
        $scope.seatClicked = function(seatPos) {
            var index = $scope.selected.indexOf(seatPos);
            if(index !== -1) {
                // seat already selected, remove
                $scope.selected.splice(index, 1);
            } else {
                // new seat, push
                $scope.selected.push(seatPos);
            }
        };

        // get seat status
        $scope.getStatus = function(seatPos) {
            if($scope.reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if($scope.selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        };

        // clear selected
        $scope.clearSelected = function() {
            $scope.selected = [];
        };

        // show selected
        $scope.register = function() {
            SeatReservationSvc.register()
                .then(function () {
                    logger.success('Ok!');
                });
        };
    }

    function SeatReservationSvc(common) {
        return {
            register: register
        };

        function register() {
            var deferred = common.$q.defer();

            deferred.resolve();

            return deferred.promise;
        }

    }
})();
describe('Seat reservation', function () {
    var scope,
        common,
        SeatReservationSvc,
        logger,
        reserved = ['A2', 'A3', 'C5', 'C6', 'C7', 'C8', 'J1', 'J2', 'J3', 'J4'],
        selected = [];

    beforeEach(module('app.seatReservation'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('SeatReservation', {
            $scope: scope,
            common: common,
            SeatReservationSvc: SeatReservationSvc,
            logger: logger
        });
    }));

    it('should be defined rows', function () {
        expect(scope.rows).toBeDefined();
    });

    it('should be defined cols', function () {
        expect(scope.cols).toBeDefined();
    });

    it("should clicked seat", function () {
        var index = -1;
        selected.splice(index, 1);

        spyOn(scope, 'seatClicked');
        scope.seatClicked('I4');

        expect(scope.seatClicked).toHaveBeenCalled();
        expect(index).toEqual(-1);
    });

    it("should get status", function () {
        spyOn(scope, 'getStatus');
        scope.getStatus();

        expect(scope.getStatus).toHaveBeenCalled();
    });

    it("should get clearSelected", function () {
        spyOn(scope, 'clearSelected').and.callFake(function () {
            scope.selected = ['I5'];
        });
        scope.clearSelected();

        expect(scope.clearSelected).toHaveBeenCalled();
        expect(scope.selected).toEqual(['I5']);
    });
});
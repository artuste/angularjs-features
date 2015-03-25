describe('Seat reservation', function () {
   var scope;

    beforeEach(module('app.seatReservation'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('SeatReservation', {
            $scope: scope
        });

        spyOn(scope, 'seatClicked');
        scope.seatClicked();

        spyOn(scope, 'getStatus');
        scope.getStatus();
    }));

    it('should be defined rows', function () {
        expect(scope.rows).toBeDefined();
    });

    it('should be defined cols', function () {
        expect(scope.cols).toBeDefined();
    });

    it("should clicked seat", function () {
        expect(scope.seatClicked).toHaveBeenCalled();
    });

    it("should get status", function () {
        expect(scope.getStatus).toHaveBeenCalled();
    });

});
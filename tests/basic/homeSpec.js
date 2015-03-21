describe('Home Controller', function () {

    var scope;

    beforeEach(module('app.home'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('Home', {
            $scope: scope
        });
    }));

    it('should equals to ...', function () {
        expect(scope.content).toBeDefined();
    });

});
describe('Home Controller', function () {

    var scope,
        content;

    beforeEach(module('app.home'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('Home', {
            $scope: scope
        });

        scope.content = {};

        spyOn(scope, 'setContent');
        scope.setContent('OK');

        spyOn(scope, 'getContent');
        scope.getContent();
    }));

    it('should equals to ...', function () {
        expect(scope.content).toBeDefined();
    });

    it("should set content", function () {
        expect(scope.setContent).toHaveBeenCalled();
    });

    it("should get content", function () {
        expect(scope.getContent).toHaveBeenCalled();
    });
});


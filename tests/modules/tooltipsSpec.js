describe('Tooltips/directive', function () {

    var element,
        $scope,
        $compile,
        $httpBackend;

    beforeEach(module('app.widgets'));
    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;

        $httpBackend.when("GET", "app/modules/widgets/tooltips/tooltips.html").respond({});
    }));

    it('should render directive', function () {
        element = '<component-tooltip></component-tooltip>';
        $compile(element)($scope);

        $scope.message = 'test mesg';

        $httpBackend.flush();
        $scope.$digest();
    });
});
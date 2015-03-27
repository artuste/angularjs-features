describe('Tooltips/directive', function () {

    var $scope,
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
        $compile('<component-tooltip></component-tooltip>');

        $scope.message = 'test mesg';

        $scope.$digest();
    });
});
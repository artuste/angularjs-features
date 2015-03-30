describe('UI.Components', function () {
    var element,
        $scope,
        componentPortletData,
        $compile,
        $httpBackend;

    beforeEach(module('ui.components'));
    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _componentPortletData_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        componentPortletData = _componentPortletData_;

        $httpBackend.when("GET", "app/modules/components/portlet/portlet.tpl.html").respond({});
    }));


    it('should render directive', function () {
        element = '<component-portlet></component-portlet>';
        $compile(element)($scope);

        //$httpBackend.flush();
        $scope.$digest();
    });
});
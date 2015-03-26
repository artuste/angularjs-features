describe('Interpolation Controller', function () {

    var scope,
        $interpolate,
        InterpolationSvc;

    beforeEach(module('app.interpolation'));
    beforeEach(inject(function ($controller, $rootScope, _$interpolate_, _InterpolationSvc_) {
        scope = $rootScope.$new();
        $interpolate = _$interpolate_;
        InterpolationSvc = _InterpolationSvc_;
        $controller('Interpolation', {
            $scope: scope
        });
    }));

    it('should interpolate', function () {
        var url,
            options = {
            url: '/api2/name/{{name}}',
            params: {
                name: 'John'
            }
        };

        scope.options = options;
        expect(scope.options.url).toEqual('/api2/name/{{name}}');
        expect(scope.options.params.name).toEqual('John');


        spyOn(InterpolationSvc, 'interpolateUrl').and.callFake(function (url, params) {
            return $interpolate(url)(params);
        });

        url = InterpolationSvc.interpolateUrl(options.url, options.params);

        expect(url).toEqual('/api2/name/John');
    });
});


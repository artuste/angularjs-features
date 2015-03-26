describe('Promises', function() {
    var deferred,
        $rootScope,
        $httpBackend,
        Promises,
        DataService;

    beforeEach(module('app.promises'));
    beforeEach(inject(function($controller, _$rootScope_, $q, _DataService_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        DataService = _DataService_;
        Promises = $controller('Promises', {});

        $httpBackend.when("GET", "app/modules/promises/data.json").respond({});

        deferred = $q.defer();
        deferred.resolve({
            code: 101
        });

        spyOn(DataService, 'getHttpData').and.returnValue(deferred.promise);
    }));

    it('should promises to be defined', function () {
        expect(Promises).toBeDefined();
    });

    it('should timeoutDataData to be defined', function () {
        Promises.timeoutDataData = 'test 2';
        expect(Promises.timeoutDataData).toEqual('test 2');
    });

    it('should getHttpData', function () {
        var result;
        DataService.getHttpData()
            .then(function (response) {
                result = response;
            });

        $rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle
        expect(result).toEqual({
            code: 101
        });
    });
});
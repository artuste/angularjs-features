(function () {
    "use strict";

    angular.module('app.interpolation')
        .controller('Interpolation', Interpolation)
        .factory('InterpolationSvc', InterpolationSvc);

    Interpolation.$inject = ['$scope', 'InterpolationSvc'];
    InterpolationSvc.$inject = ['$interpolate'];

    function Interpolation($scope, InterpolationSvc) {
        var options = {
            url: '/api/id/{{id}}',
            params: {
                id: 200
            }
        };

        $scope.options = options;

        $scope.interpolatedUrl = InterpolationSvc.interpolateUrl(options.url, options.params);
    }

    function InterpolationSvc($interpolate) {
        return {
            interpolateUrl: interpolateUrl
        };

        function interpolateUrl(url, params) {
            return $interpolate(url)(params);
        }
    }

})();
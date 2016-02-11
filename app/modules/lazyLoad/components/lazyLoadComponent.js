(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .directive('lazyLoadComponent', lazyLoadComponent);

    function lazyLoadComponent() {
        return {
            restrict: 'EA',
            templateUrl: 'app/modules/lazyLoad/components/lazyLoadComponent.tpl.html',
            scope: {
              data: '='
            },
            controller: function($scope) {
                $scope.test = 'Lazy!!!';
            },
            link: function(scope, element, attr) {
                scrollBottom(function () {
                    alert("bottom!");
                });

                function scrollBottom(fnc) {
                    $(window).scroll(function() {
                        if($(window).scrollTop() + $(window).height() == $(document).height()) {
                            fnc();
                        }
                    });
                }
            }
        };
    }

})();

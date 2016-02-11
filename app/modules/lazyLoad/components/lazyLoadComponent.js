(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .directive('lazyLoadComponent', lazyLoadComponent);

    lazyLoadComponent.$inject = ['DataService'];

    function lazyLoadComponent(DataService) {
        return {
            restrict: 'EA',
            templateUrl: 'app/modules/lazyLoad/components/lazyLoadComponent.tpl.html',
            controller: function ($scope) {
            },
            link: function (scope, element, attr) {
                scope.data = [];

                getData(0,20);
                scrollBottom(function () {
                    getData(21,40);
                    console.log('bottom');
                });

                function getData(offsetStart, offsetEnd) {
                    DataService.get(offsetStart, offsetEnd)
                        .then(function (response) {
                            scope.data.push(response.data);
                        });
                }

                function scrollBottom(fnc) {
                    $(window).scroll(function () {
                        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                            fnc();
                        }
                    });
                }
            }
        };
    }

})();

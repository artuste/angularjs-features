(function () {
    'use strict';

    angular.module('app.reactive')
        .controller('Reactive', Reactive);

    function Reactive() {
        var vm = this;
        vm.test = Math.random(10);

        // RxJS "$watch"
        Rx.Observable.$watch = function (scope, watchExpression, objectEquality) {
            return Rx.Observable.create(function (observer) {
                // Create function to handle old and new Value
                function listener (newValue, oldValue) {
                    observer.onNext({ oldValue: oldValue, newValue: newValue });
                }

                // Returns function which disconnects the $watch expression
                return scope.$watch(watchExpression, listener, objectEquality);
            });
        };

    }

})();

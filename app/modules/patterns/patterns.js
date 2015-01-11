(function () {
    'use strict';

    angular
        .module('app.patterns')
        .controller('Patterns', Patterns)
        .factory('Svc', Svc);

    Patterns.$inject = ['common', 'Svc'];

    function Patterns(common, Svc) {
        /*jshint validthis: true */
        var vm = this;

        // Constructor Invocation Pattern
        var constructorInvocation = Svc.constructorInvocation(100, 'MA');

        vm.constructorInvocation = constructorInvocation.getProperties();


        // Observer Pattern
        var _observer = Svc.observer();

        var observer = new _observer;

        observer.add({
           id: 200,
            text: "I'm observer"
        });

        observer.add({
            id: 300,
            text: "I'm batman!"
        });

        vm.observer = observer.get();


    }

    function Svc() {
        return {
            constructorInvocation: constructorInvocation,
            observer: observer
        };


        function constructorInvocation(id, name) {
            var Apple = function (id, name) {
                this.id = id;
                this.name = name;
            };

            Apple.prototype.getProperties = function() {
                return {
                    id: this.id,
                    name: this.name
                }
            };

            return new Apple(id, name);
        }

        function observer() {
            function ObserverList() {
                this.observerList = [];
            }

            ObserverList.prototype.add = function (property) {
                return this.observerList.push(property);
            };

            ObserverList.prototype.get = function () {
                return this.observerList;
            };

            return ObserverList;
        }

    }
})();

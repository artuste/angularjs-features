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

        var constructorInvocation = Svc.constructorInvocation(100, 'MA');

        vm.constructorInvocation = constructorInvocation.getProperties();


    }

    function Svc() {
        return {
            constructorInvocation: constructorInvocation
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

    }
})();

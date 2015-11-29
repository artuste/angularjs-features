(function () {
    'use strict';

    angular
        .module('app.architecturalPatterns')
        .controller('ArchitecturalPatterns', Patterns)
        .factory('Svc', Svc);

    Patterns.$inject = ['common', 'Svc'];

    function Patterns(common, Svc) {
        /*jshint validthis: true */
        var vm = this;
    }

    function Svc() {
        return {};
    }
})();

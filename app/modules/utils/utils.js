(function () {
    "use strict";

    angular.module('app.utils')
        .controller('Utils', Utils);

    Utils.$inject = ['logger'];

    function Utils(logger) {
        /* jshint validthis: true */
        var vm = this;

        vm.blurCallback = function (e) {
            logger.info('Ok!', '', 'Blur callback');
        }
    }

})();
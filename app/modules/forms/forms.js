(function () {
    "use strict";

    angular.module('app.forms')
        .controller('Forms', Forms);


    function Forms() {
        /*jshint validthis: true */
        var vm = this;

        vm.formData = {};

        vm.processForm = function () {
            /* Handle the form submission... */
        };
    }

})();
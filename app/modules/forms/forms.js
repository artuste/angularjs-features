(function () {
    "use strict";

    angular.module('app.forms')
        .controller('Forms', Forms)

    function Forms() {
        /*jshint validthis: true */
        var vm = this;

        //Schema Form
        vm.model1 = {};
        vm.model2 = {};

        vm.formSettings = {
            form1: {},
            form2: {}
        };
    }

})();
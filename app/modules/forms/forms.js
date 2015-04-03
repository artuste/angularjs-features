(function () {
    "use strict";

    angular.module('app.forms')
        .controller('Forms', Forms);

    Forms.$inject = ['$filter'];

    function Forms($filter) {
        /*jshint validthis: true */
        var vm = this;

        vm.tableListModelOptions = {
            updateOn: 'blur'
        };

        vm.tableList = [
            { text: 'Item 1'},
            { text: 'Item 2'}
        ];

        vm.addWithValue = function () {
            vm.tableList.push({text: vm.text});
            vm.text = '';
        };

        vm.addEmpty = function () {
            vm.tableList.push({text: ''});
        };

        vm.remove = function (index) {
            vm.tableList.splice(index, 1);
        };


        //Schema Form
        vm.model1 = {};
        vm.model2 = {};

        vm.formSettings = {
            form1: {},
            form2: {}
        };
    }

})();
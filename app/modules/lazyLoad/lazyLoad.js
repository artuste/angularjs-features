(function () {
    'use strict';

    angular.module('app.lazyLoad')
        .controller('LazyLoad', LazyLoad);

    //LazyLoad.$inject = ['DataService'];

    function LazyLoad() {
        var vm = this;

        //DataService.get()
        //    .then(function (response) {
        //        vm.data = response.data;
        //    });
    }

})();

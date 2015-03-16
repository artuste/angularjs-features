(function () {
    "use strict";

    angular.module('app.home')
        .controller('Home', Home);

    function Home() {
        /*jshint validthis: true */
        var vm = this;

        vm.content = 'Some text';
    }

})();
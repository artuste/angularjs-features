(function () {
    "use strict";

    angular.module('app.home')
        .controller('Home', Home)
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$location'];

    function Home() {
        /*jshint validthis: true */
        var vm = this;

        vm.content = 'Some text';
    }

    function MenuCtrl($location) {
        /*jshint validthis: true */
        var vm = this;

        vm.getPath = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        }
    }

})();
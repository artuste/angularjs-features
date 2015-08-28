(function(){
    'use strict';

    angular.module('app.dirCommunication')
        .directive('outer', outer);

    function outer() {
        return {
            restrict: 'EA',
            controller: function() {
                this.test = 'Outer data!';
                this.log = function(message) {
                    console.log(message);
                };
            }
        };
    }
})();
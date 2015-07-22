(function () {
    "use strict";

    angular.module('app.scopes')
        .config(['initializeProvider', config])
        .controller('Scopes', Scopes)
        .controller('Popup', Popup)
        .factory('ScopesService', ScopesService)
        .provider('initialize', initialize);

    Scopes.$inject = ['$modal', 'initialize'];
    Popup.$inject = ['$modalInstance', 'scopesModelData', 'ScopesService'];


    function config(initializeProvider) {
        initializeProvider.text = "Yo!";
    }



    function Scopes($modal, initialize) {
        var vm = this,
            modalInstance;

        vm.model = {
            id: 101,
            firstName: 'Edgar',
            lastName: 'Wilson'
        };

        console.log('prov', initialize.hello());

        vm.showPopup = function () {
            modalInstance = $modal.open({
                templateUrl: 'app/modules/scopes/popup.tpl.html',
                controller: 'Popup',
                controllerAs: 'popup',
                size: 'sm',
                resolve: {
                    scopesModelData: function () {
                        return vm.model;
                    }
                }
            });
        };
    }

    function Popup($modalInstance, scopesModelData, ScopesService) {
        var popup = this;

        ScopesService.setModel(scopesModelData);
        popup.popupModel = angular.copy(ScopesService.getModel());


        popup.save = function () {
            ScopesService.setEachFormData(popup.popupModel);
            $modalInstance.close();
        };

        popup.cancel = function () {
            $modalInstance.close();
        };
    }

    function ScopesService() {
        var _model = {};

        return {
            setModel: setModel,
            getModel: getModel,
            setEachFormData: setEachFormData
        };


        function setModel(model) {
            _model = model;
        }

        function getModel() {
            return _model;
        }

        function setFormDataProperty(name, value) {
            _model[name] = value;
        }

        function setEachFormData(data) {
            _.each(data, function (val, key) {
                setFormDataProperty(key, val);
            });
        }
    }

    function initialize() {
        var self = this;
        self.text = "Hello world";

        this.$get = function () {
            return {
                hello: function () {
                    return self.text;
                }
            }
        };
    }

})();
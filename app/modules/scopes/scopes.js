(function () {
    "use strict";

    angular.module('app.scopes')
        .controller('Scopes', Scopes)
        .controller('Popup', Popup)
        .factory('ScopesService', ScopesService);

    Scopes.$inject = ['$modal'];
    Popup.$inject = ['$modalInstance', 'scopesModelData', 'ScopesService'];


    function Scopes($modal) {
        var vm = this,
            modalInstance;

        vm.model = {
            id: 101,
            firstName: 'Edgar',
            lastName: 'Wilson'
        };

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

})();
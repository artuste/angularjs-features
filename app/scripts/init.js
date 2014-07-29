// Internet Explorer <= 8 support
if (head.browser.ie && head.browser.version < 9) {
    head.load(
        { html5shiv: 'bower_components/html5shiv/dist/html5shiv.min.js' },
        { respond: 'bower_components/respond/dest/respond.min.js' }
    );
}

head.load(
    // jQuery libraries
    { jquery: 'bower_components/jquery/dist/jquery.js' },
    { jqueryUi: 'bower_components/jquery-ui/jquery-ui.js' },
    { jqueryBlockUI: 'app/assets/theme/global/plugins/jquery.blockui.min.js' },
    { jqueryCookie: 'app/assets/theme/global/plugins/jquery.cokie.min.js' },
    { jqueryUniform: 'app/assets/theme/global/plugins/uniform/jquery.uniform.min.js' },
    { jqueryPulsate: 'app/assets/theme/global/plugins/jquery.pulsate.min.js' },
    { jqueryBootpag: 'app/assets/theme/global/plugins/jquery-bootpag/jquery.bootpag.min.js'},

    // Bootstrap Twitter
    { bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.js' },
    { bootstrapSwitch: 'bower_components/bootstrap-switch/dist/js/bootstrap-switch.js' },
    { bootstrapHoverDropDown: 'app/assets/theme/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js' },

    // AngularJS
    { angular: 'bower_components/angular/angular.js' },
    { angularRoute: 'bower_components/angular-route/angular-route.js' },
    { angularMocks: 'bower_components/angular-mocks/angular-mocks.js' },
    { angularResource: 'bower_components/angular-resource/angular-resource.js' },
    { angularLocalStorage: 'bower_components/angular-local-storage/angular-local-storage.js' },
    { angularUiRouter: 'bower_components/angular-ui-router/release/angular-ui-router.js' },
    { angularCookies: 'bower_components/angular-cookies/angular-cookies.js' },
    { angularTemplate: 'bower_components/angular-translate/angular-translate.js' },
    { angularTranslateLoaderUrl: 'bower_components/angular-translate-loader-url/angular-translate-loader-url.js' },
    { angularTranslateLoaderStatic: 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js' },
    { slimScroll: 'app/assets/theme/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js' },
    { holder: 'app/assets/theme/global/plugins/holder.js' },

    // Metronic init
    { metronicInit: 'app/assets/theme/global/scripts/metronic.js' },
    { metronicLayout: 'app/assets/theme/admin/layout/scripts/layout.js' },
    { metronicSidebar: 'app/assets/theme/admin/layout/scripts/quick-sidebar.js' },
    { metronicUiGeneral: 'app/assets/theme/admin/pages/scripts/ui-general.js' },

    // Apllication
    { application: 'app/modules/admin/app.js' },
    { applicationHomeCtrl: 'app/modules/admin/home/controllers/controllers.home.js' }
);

head.ready('metronicUiGeneral', function () {
    Metronic.init();
    Layout.init();
    UIGeneral.init();
});
System.register(['angular2/platform/browser', './google-maps-app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, google_maps_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (google_maps_app_component_1_1) {
                google_maps_app_component_1 = google_maps_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(google_maps_app_component_1.GoogleMapsAppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map
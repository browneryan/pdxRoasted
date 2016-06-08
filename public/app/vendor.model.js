System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Vendor;
    return {
        setters:[],
        execute: function() {
            Vendor = (function () {
                function Vendor(name, url, logoUrl) {
                    this.name = name;
                    this.url = url;
                    this.logoUrl = logoUrl;
                }
                return Vendor;
            }());
            exports_1("Vendor", Vendor);
        }
    }
});
//# sourceMappingURL=vendor.model.js.map
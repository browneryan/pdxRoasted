System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Flavor;
    return {
        setters:[],
        execute: function() {
            Flavor = (function () {
                function Flavor(name, roasts) {
                    this.name = name;
                    this.roasts = roasts;
                }
                return Flavor;
            }());
            exports_1("Flavor", Flavor);
        }
    }
});
//# sourceMappingURL=flavor.model.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Roast;
    return {
        setters:[],
        execute: function() {
            Roast = (function () {
                function Roast(name, vendor, flavors, description, img, url, process, varietal, species) {
                    this.name = name;
                    this.vendor = vendor;
                    this.flavors = flavors;
                    this.description = description;
                    this.img = img;
                    this.url = url;
                    this.process = process;
                    this.varietal = varietal;
                    this.species = species;
                }
                return Roast;
            }());
            exports_1("Roast", Roast);
        }
    }
});
//# sourceMappingURL=roast.model.js.map
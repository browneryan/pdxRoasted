System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UtilsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UtilsService = (function () {
                function UtilsService() {
                }
                UtilsService.prototype.setSeeAll = function (val) {
                    this.see_all = val;
                };
                UtilsService.prototype.getSeeAll = function () {
                    return this.see_all;
                };
                UtilsService.prototype.setFilterBy = function (val) {
                    this.filter_by = val;
                };
                UtilsService.prototype.getFilterBy = function () {
                    return this.filter_by;
                };
                UtilsService.prototype.filterUnique = function (a) {
                    var seen = {};
                    var out = [];
                    var len = a.length;
                    var j = 0;
                    for (var i = 0; i < len; i++) {
                        var item = a[i];
                        if (seen[item] !== 1) {
                            seen[item] = 1;
                            out[j++] = item;
                        }
                    }
                    return out;
                };
                UtilsService.prototype.formatFlavor = function (flavor) {
                    console.log("The Utility formatFlavor has been called on: " + flavor);
                    var flav_no_space = flavor.replace(/[\s-]+/g, ''); // remove all whitespace
                    var flav_lwr = flav_no_space.toLowerCase();
                    console.log("The flavor formatted: " + flav_lwr);
                    return flav_lwr;
                };
                UtilsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_1("UtilsService", UtilsService);
        }
    }
});
//# sourceMappingURL=utils.service.js.map
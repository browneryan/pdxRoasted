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
    var PaletteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaletteService = (function () {
                function PaletteService() {
                    this.palette = [];
                }
                PaletteService.prototype.getPalette = function () {
                    return this.palette;
                };
                PaletteService.prototype.isPaletteEmpty = function () {
                    console.log("isPaletteEmpty called on Palette Service!");
                    var answer;
                    this.palette.length === 0 ? answer = true : answer = false;
                    console.log("The answer is: " + answer);
                    return answer;
                };
                PaletteService.prototype.updatePalette = function (palette) {
                    console.log("updatePalette on Palette Service called!");
                    this.palette = palette;
                };
                PaletteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PaletteService);
                return PaletteService;
            }());
            exports_1("PaletteService", PaletteService);
        }
    }
});
//# sourceMappingURL=palette.service.js.map
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
    var FlavorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlavorService = (function () {
                function FlavorService() {
                    this.ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');
                    this.flavors = [];
                }
                FlavorService.prototype.isFlavorsEmpty = function () {
                    console.log("isFlavorsEmpty called on Flavor Service!");
                    var answer;
                    this.flavors.length === 0 ? answer = true : answer = false;
                    console.log("The answer is: " + answer);
                    return answer;
                };
                FlavorService.prototype.updateFlavors = function (flavors) {
                    console.log("updateFlavors on Flavor Service called!");
                    this.flavors = flavors;
                    console.log(this.flavors);
                };
                FlavorService.prototype.getFlavors = function () {
                    return this.flavors;
                };
                FlavorService.prototype.getAllFlavors = function () {
                    return this.ref.once('value').then(function (snapshot) {
                        return snapshot.val();
                    });
                };
                FlavorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FlavorService);
                return FlavorService;
            }());
            exports_1("FlavorService", FlavorService);
        }
    }
});
//# sourceMappingURL=flavor.service.js.map
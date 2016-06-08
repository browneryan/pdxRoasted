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
    var RoastService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RoastService = (function () {
                function RoastService() {
                    this.ref = new Firebase('https://pdxroasted.firebaseio.com/roasts');
                    this.roasts = [];
                }
                RoastService.prototype.getAllRoasts = function () {
                    return this.ref.once('value').then(function (snapshot) {
                        return snapshot.val();
                    });
                };
                RoastService.prototype.isRoastsEmpty = function () {
                    console.log("isRoastsEmpty called on Roast Service!");
                    var answer;
                    this.roasts.length === 0 ? answer = true : answer = false;
                    console.log("The answer is: " + answer);
                    return answer;
                };
                RoastService.prototype.updateRoasts = function (roasts) {
                    console.log("updateRoasts on Roast Service called!");
                    this.roasts = roasts;
                    console.log(this.roasts);
                };
                RoastService.prototype.getRoasts = function () {
                    console.log("getRoasts on Roast Service called!");
                    return this.roasts;
                };
                RoastService.prototype.filterRoasts = function (flavors) {
                    var that = this;
                    var flav1 = flavors[0];
                    var flav2 = flavors[1];
                    var flav3 = flavors[2];
                    var allRoasts = [];
                    switch (flavors.length) {
                        case 1:
                            return this.ref.orderByChild("flavors/" + flav1).equalTo(true).once('value').then(function (roasts) {
                                roasts.forEach(function (roast) {
                                    allRoasts.push(roast.val());
                                });
                                return allRoasts;
                            });
                        case 2:
                            return this.ref.orderByChild("flavors/" + flav1).equalTo(true).once('value').then(function (roasts) {
                                roasts.forEach(function (roast) {
                                    if (roast.child("flavors").child(flav2).exists()) {
                                        allRoasts.push(roast.val());
                                    }
                                });
                                return allRoasts;
                            });
                        case 3:
                            return this.ref.orderByChild("flavors/" + flav1).equalTo(true).once('value').then(function (roasts) {
                                roasts.forEach(function (roast) {
                                    if (roast.child("flavors").child(flav2).exists() && roast.child("flavors").child(flav3).exists()) {
                                        allRoasts.push(roast.val());
                                    }
                                });
                                return allRoasts;
                            });
                    }
                };
                RoastService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RoastService);
                return RoastService;
            }());
            exports_1("RoastService", RoastService);
        }
    }
});
//# sourceMappingURL=roast.service.js.map
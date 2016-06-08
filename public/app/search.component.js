System.register(['angular2/core', './roast.service', './palette.service', './flavor.service', './utils.service', './search-result-list.component'], function(exports_1, context_1) {
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
    var core_1, roast_service_1, palette_service_1, flavor_service_1, utils_service_1, search_result_list_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (roast_service_1_1) {
                roast_service_1 = roast_service_1_1;
            },
            function (palette_service_1_1) {
                palette_service_1 = palette_service_1_1;
            },
            function (flavor_service_1_1) {
                flavor_service_1 = flavor_service_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (search_result_list_component_1_1) {
                search_result_list_component_1 = search_result_list_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_roastService, _paletteService, _flavorService, _utilsService) {
                    this._roastService = _roastService;
                    this._paletteService = _paletteService;
                    this._flavorService = _flavorService;
                    this._utilsService = _utilsService;
                    this.see_all = false;
                    this.filter_by = false;
                    this.flavors = [];
                    this.palette = [];
                    this.roasts = [];
                    this.flavor = "Choose a flavor";
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.see_all = this._utilsService.getSeeAll();
                    this.filter_by = this._utilsService.getFilterBy();
                    if (this._paletteService.isPaletteEmpty()) {
                        console.log("Palette was empty!");
                    }
                    else {
                        this.palette = this._paletteService.getPalette();
                        console.log("Palette being set to: " + this.palette);
                    }
                    if (this._flavorService.isFlavorsEmpty()) {
                        console.log("Flavors was empty!");
                        this.getAllFlavors();
                    }
                    else {
                        this.flavors = this._flavorService.getFlavors();
                        console.log("Flavors being set to: " + this.flavors);
                    }
                    if (!this._roastService.isRoastsEmpty()) {
                        console.log("Roasts being set to: " + this.roasts);
                        this.roasts = this._roastService.getRoasts();
                    }
                };
                SearchComponent.prototype.ngOnDestroy = function () {
                    this._paletteService.updatePalette(this.palette);
                    this._roastService.updateRoasts(this.roasts);
                    this._flavorService.updateFlavors(this.flavors);
                    this._utilsService.setSeeAll(this.see_all);
                    this._utilsService.setFilterBy(this.filter_by);
                };
                SearchComponent.prototype.getAllFlavors = function () {
                    console.log("getAllFlavors on Search Component called!");
                    var that = this;
                    that._flavorService.getAllFlavors().then(function (data) {
                        that.flavors = Object.keys(data).map(function (key) { return data[key].name; });
                    });
                };
                SearchComponent.prototype.getAllRoasts = function () {
                    console.log("getAllRoasts on Search Component called!");
                    var that = this;
                    that._roastService.getAllRoasts().then(function (data) {
                        that.roasts = Object.keys(data).map(function (key) { return data[key]; });
                    });
                };
                SearchComponent.prototype.filterRoasts = function () {
                    console.log("filterRoasts on Search Component called!");
                    if (this.palette.length === 0) {
                        this.roasts = [];
                        this.getAllFlavors();
                        return;
                    }
                    var that = this;
                    var palette = this.palette.map(this._utilsService.formatFlavor);
                    console.log("Your Palette: " + palette);
                    this._roastService.filterRoasts(palette).then(function (data) {
                        that.roasts = data;
                        that.updateFlavorList();
                    });
                };
                SearchComponent.prototype.updateFlavorList = function () {
                    console.log("updateFlavorList on Search Component called!");
                    var that = this;
                    var roast_flavors = [];
                    var flavor_list = [];
                    if (this.roasts.length === 0) {
                        this.getAllFlavors();
                        return;
                    }
                    for (var _i = 0, _a = this.roasts; _i < _a.length; _i++) {
                        var roast = _a[_i];
                        for (var flavor in roast.flavors) {
                            roast_flavors.push(flavor);
                        }
                    }
                    this._flavorService.getAllFlavors().then(function (flavor_data) {
                        roast_flavors.forEach(function (flavor) {
                            if (flavor_list.indexOf(flavor_data[flavor]) === -1) {
                                console.log("THIS IS THE NAME >>>>>>>>" + flavor);
                                flavor_list.push(flavor_data[flavor].name);
                            }
                        });
                        return flavor_list;
                    }).then(function (flavor_list) {
                        console.log("Flavors before stripping out unique: " + flavor_list);
                        var unique = that._utilsService.filterUnique(flavor_list);
                        console.log("Unique flavor list: " + unique);
                        var no_pal = that.stripPaletteFlavors(unique);
                        console.log("No Palette Flavors in list: " + no_pal);
                        that.flavors = no_pal;
                        that.flavor = "Choose a flavor";
                    });
                };
                SearchComponent.prototype.addToPalette = function () {
                    console.log("addToPalette on Search Component called!");
                    if (this.flavor === 'Choose a flavor') {
                        return;
                    }
                    console.log("Falvor added: " + this.flavor);
                    this.palette.push(this.flavor);
                    this.filterRoasts();
                };
                SearchComponent.prototype.removeFromPalette = function (flavToRemove) {
                    console.log("removeFromPalette on Search Component called!");
                    var i = this.palette.indexOf(flavToRemove);
                    this.palette.splice(i, 1);
                    this.flavor = "Choose a flavor";
                    this.filterRoasts();
                    if (this.roasts.length === 0) {
                        console.log("no more roasts!");
                    }
                };
                SearchComponent.prototype.seeAllRoasts = function () {
                    this.getAllRoasts();
                    this.palette = [];
                    this.filter_by = false;
                    this.see_all = true;
                };
                SearchComponent.prototype.filterByFlavor = function () {
                    this.roasts = [];
                    this.palette = [];
                    this.getAllFlavors();
                    this.see_all = false;
                    this.filter_by = true;
                };
                SearchComponent.prototype.stripPaletteFlavors = function (a) {
                    console.log("stripPaletteFlavors on Search Component called!");
                    var that = this;
                    var stripped = [];
                    a.forEach(function (flavor) {
                        if (that.palette.indexOf(flavor) === -1) {
                            stripped.push(flavor);
                        }
                    });
                    return stripped;
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        templateUrl: 'app/search.component.html',
                        directives: [search_result_list_component_1.SearchResultListComponent]
                    }), 
                    __metadata('design:paramtypes', [roast_service_1.RoastService, palette_service_1.PaletteService, flavor_service_1.FlavorService, utils_service_1.UtilsService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map
System.register(['angular2/core', 'angular2/router', './roast.service', './palette.service', './flavor.service', './utils.service', './home.component', './about.component', './contact.component', './search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, roast_service_1, palette_service_1, flavor_service_1, utils_service_1, home_component_1, about_component_1, contact_component_1, search_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.site_id = "PDX Roasted";
                    this.tag_line = "Find the best Portland roasted coffee for you";
                    location.go('/');
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            roast_service_1.RoastService,
                            palette_service_1.PaletteService,
                            flavor_service_1.FlavorService,
                            utils_service_1.UtilsService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/find_coffee',
                            name: 'Search',
                            component: search_component_1.SearchComponent,
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: about_component_1.AboutComponent
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: contact_component_1.ContactComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
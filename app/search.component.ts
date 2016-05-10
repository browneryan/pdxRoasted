import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';

import { RoastService } from './roast.service';
import { PaletteService } from './palette.service';
import { FlavorService } from './flavor.service';
import { UtilsService } from './utils.service';

import { Roast } from './roast.model';
import { Flavor } from './flavor.model';

import { SearchResultListComponent } from './search-result-list.component';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html',
  directives: [SearchResultListComponent]
})
export class SearchComponent implements OnInit, OnDestroy {
  flavors: string[];
  flavor: string;
  roasts: any[];
  palette: string[];
  flavor_list: any[];

  constructor(
    private _roastService: RoastService,
    private _paletteService: PaletteService,
    private _flavorService: FlavorService,
    private _utilsService: UtilsService) {
      this.flavors = [];
      this.palette = [];
      this.roasts = [];
      this.flavor = "Choose a flavor";
    }

  ngOnInit() {
    if(this._paletteService.isPaletteEmpty()) {
      console.log("Palette was empty!");
    } else {
      this.palette = this._paletteService.getPalette();
      console.log("Palette being set to: " + this.palette);
    }

    if(this._flavorService.isFlavorsEmpty()) {
      console.log("Flavors was empty!");
      this.getAllFlavors();
    } else {
      this.flavors = this._flavorService.getFlavors();
      console.log("Flavors being set to: " + this.flavors);
    }

    if(this._roastService.isRoastsEmpty()) {
      console.log("Roasts was empty!");
      this.getAllRoasts();
    } else {
      this.roasts = this._roastService.getRoasts();
      console.log("Roasts being set to: " + this.roasts);
    }

  }

  ngOnDestroy() {
    this._paletteService.updatePalette(this.palette);
    this._roastService.updateRoasts(this.roasts);
    this._flavorService.updateFlavors(this.flavors);
  }

  getAllFlavors() {
    console.log("getAllFlavors on Search Component called!");
    let that = this;
    that._flavorService.getAllFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key].name});
    });
  }

  getAllRoasts() {
    console.log("getAllRoasts on Search Component called!");
    let that = this;
    that._roastService.getAllRoasts().then(function(data){
      that.roasts = Object.keys(data).map(key => {return data[key]});
    });
  }

  filterRoasts() {
    console.log("filterRoasts on Search Component called!");
    if(this.palette.length === 0) { // If no roasts exist, get all of them
      this.roasts = [];
      this.getAllFlavors();
      return;
    }

    let that = this;
    let palette = this.palette.map(this._utilsService.formatFlavor);
    console.log(palette);
      this._roastService.filterRoasts(palette).then(function(data) {
        that.roasts = data;
        that.updateFlavorList();
    });
  }

  updateFlavorList() {
    console.log("updateFlavorList on Search Component called!");
    let that = this;
    let roast_flavors = [];
    let flavor_list = [];
    if(this.roasts.length === 0) {
      this.getAllFlavors();
      return;
    }
    for (let roast of this.roasts) {
      for (let flavor in roast.flavors) {
          roast_flavors.push(flavor);
      }
    }
    this._flavorService.getAllFlavors().then(function(flavor_data){
      roast_flavors.forEach(function(flavor) {
        if(flavor_list.indexOf(flavor_data[flavor]) === -1) {
          flavor_list.push(flavor_data[flavor].name);
        }
      })
      return flavor_list;
    }).then(function(flavor_list) {
      let unique = that._utilsService.filterUnique(flavor_list);
      let no_pal = that.stripPaletteFlavors(unique);
      that.flavors = no_pal;
      that.flavor = "Choose a flavor";
    });
  }

  stripPaletteFlavors(a) {
    console.log("stripPaletteFlavors on Search Component called!");
    let that = this;
    let stripped = [];
    a.forEach(function(flavor) {
      if(that.palette.indexOf(flavor.toLowerCase()) === -1 ) {
        stripped.push(flavor)
      }
    });
    return stripped;
  }

  removeFromPalette(flavToRemove) {
    console.log("removeFromPalette on Search Component called!");
    let i = this.palette.indexOf(flavToRemove);
    this.palette.splice(i, 1);
    this.flavor = "Choose a flavor";
    this.filterRoasts();

    if(this.roasts.length === 0 ) {
      this.getAllRoasts();
    }
  }

  addToPalette() {
    console.log("addToPalette on Search Component called!");
    if (this.flavor === 'Choose a flavor') {
      return;
    }
    console.log("Falvor added: " + this.flavor);
    this.palette.push(this.flavor);
    this.filterRoasts();
  }



}

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { Observable } from 'rxjs/Observable';

import { Roast } from './roast.model';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html'
})
export class SearchComponent implements OnInit {
  roasts: Roast[];
  flavors: string[];

  constructor(private _roastService: RoastService) {}

  ngOnInit() {
    this.getRoasts();
  }

  getRoasts() {
    this._roastService.getRoasts()
                      .subscribe(
                      roasts => this.roasts = roasts,
                      error => console.log(error));
  }

  getFlavors() {
    this._roastService.getAllFlavors()
                      .subscribe(
                        roasts => this.flavors = roasts,
                        error => console.log(error));

  }


}

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { Observable } from 'rxjs/Observable';

//        (>'-')>  Components  <('-'<)
import { SearchComponent } from './search.component';

@Component({
  selector: 'home',
  templateUrl: 'app/home.component.html',
  directives: [SearchComponent]
})
export class HomeComponent {
  constructor(private _roastService: RoastService) {}

}

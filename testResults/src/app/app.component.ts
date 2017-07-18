import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public results: any;

  constructor() {

  }
}

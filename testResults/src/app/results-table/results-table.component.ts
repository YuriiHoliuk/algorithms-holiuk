import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  public data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  ngOnInit() {
    this.http.get('../../data/sorts-performance1000.json')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        this.data.timerNames = [];
        for (let timer in this.data.timers) {
          this.data.timerNames.push(timer);
        }
      });
  }
}

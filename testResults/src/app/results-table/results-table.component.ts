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
  private dataLengths: number[];

  constructor(private http: Http) {
    this.dataLengths = [10, 100, 1000, 10000];
    this.data = {};
  }

  ngOnInit() {
    this.dataLengths.forEach(dataLength => {
      this.http.get(`../../data/sorts-performance${dataLength}.json`)
        .map(res => res.json())
        .subscribe(dataSet => {
          this.data[dataLength] = dataSet;
          console.log(this.data);
        });
    });
  }
}

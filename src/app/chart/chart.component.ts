import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { ChartService } from './chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  week: Array<any>;

  // getWeekCommitsRep(){
  //   this.chartService.getWeekCommitsRep()
  //   .subscribe(res=> { this.week = res });
  // }
  ngOnInit() {
    //this.getWeekCommitsRep();
    //console.log(this.week);
    this.chartService.getWeekCommitsRep().subscribe(res=> {this.week = res} );
  }

}

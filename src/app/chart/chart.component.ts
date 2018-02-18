import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent implements OnInit {

  constructor() {
    setInterval(function(){ this.chart.series[0].addPoint(Math.random()*10)} , 1000);
  }
  type: any;
  data: any;
  options:any;
  chart: Object;
  commitsData =[];

  checkChartData(){
      if(localStorage.getItem('chartData')===null){
        this.commitsData= [0,0,0,0,0,0,0];
      }else{
        this.commitsData= localStorage.getItem('chartData').split(',');

      }
  }

  ngOnInit() {
    this.checkChartData();


      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Commits of week'
        },
        credits: {
          enabled: false
        },
        series: [{

          data: this.commitsData,
          name: 'Count commits'
        }]
      });




  }
}

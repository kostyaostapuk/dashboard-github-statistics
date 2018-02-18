import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  type: any;
  data: any;
  options:any;
  constructor() { }
  commitsData = localStorage.getItem('chartData').split(',');
  ngOnInit() {
    this.type = 'line';
    this.data = {
      labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday',],
      datasets: [
        {
          label: "Count commits in this day",
          data: this.commitsData
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }
}

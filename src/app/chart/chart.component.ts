import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit }    from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { ChartModule }            from 'angular2-highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent implements OnInit {

  data: any;
  options: any;
  chart: any;
  commitsData = [];
  mess: string;

  constructor() {
    this.options = {
          chart: { type: 'spline' },
          title: { text : 'Commits of this week'},
          series: [{}],
          xAxis: {
            categories: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ] }
        };
        setInterval(() => {
          this.chart.series[0].setData(this.getChartData());
        }, 1000);
  }

  getChartData(){
    var chartData = localStorage.getItem('chartData');
    if(chartData===null){
      this.mess="This repos don't have commits on this week";
    }else{
      this.mess="";
      let list=[];
      this.commitsData=chartData.split(',');
      this.commitsData.forEach((res)=>{
        list.push(parseInt(res));
      })
      this.commitsData.slice(0, 8);
      return list;
    }
  }
  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

  ngOnInit() {

  }
}

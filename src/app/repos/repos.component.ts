import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos/repos.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor( private reposService: ReposService) { }

  reposList: Array<any>;
  chartData: Array<any>;

  getNameRep(val: string ) {
    let value = this.reposService.getNameRep(val).subscribe(res=>{ this.chartData = res;
      console.log(this.chartData);
      localStorage.setItem('chartData', this.chartData[this.chartData.length-2].days);
    });

  }
  ngOnInit() {
     this.reposService.getRepos().subscribe(res=>{
       this.reposList=res;
       this.getNameRep(this.reposList[0].name);
       console.log(res);
     });;


  }

}

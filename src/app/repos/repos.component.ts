import { Component, OnInit, ViewChild } from '@angular/core';
import { ReposService } from '../repos/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  constructor( private reposService: ReposService) { }

  reposList: Array<any>;

  getNameRep(val: string ) {
    let value = this.reposService.getNameRep(val).subscribe(res=>{
      if(res==null) {
        localStorage.setItem('chartData', "");
      }else{
        localStorage.setItem('chartData', res[res.length-2].days);
      }

    });

  }
  ngOnInit() {
     this.reposService.getRepos().subscribe(res=>{
       this.reposList=res;
       this.getNameRep(this.reposList[0].name);
     });;


  }

}

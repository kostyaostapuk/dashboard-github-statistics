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

  getNameRep(val: string ) {
    let value = this.reposService.getNameRep(val);
    console.log(value);
  }
  ngOnInit() {
     this.reposService.getRepos().subscribe(res=>{
       this.reposList=res;
       console.log(res);
     });;
  }

}

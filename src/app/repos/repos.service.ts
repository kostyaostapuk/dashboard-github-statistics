import { Injectable } from '@angular/core';
import { GithubService } from '../data/github.service';
//import { ChartService } from '../chart/chart.service';

@Injectable()
export class ReposService {
  constructor(private githubService: GithubService,
    //private chartService: ChartService
  ) { }

  getRepos(){
    let url = 'https://api.github.com/user/repos';
    return this.githubService.reqGet(url).map( res => res.json());
  }
  getNameRep(val: string){
    localStorage.setItem('nameRep', val);
    //this.chartService.getWeekCommitsRep();
    console.log(val);
    return this.getWeekCommitsRep();
  }
  // getDataRep(){
  //   return this.chartService.getWeekCommitsRep();
  // }

  getWeekCommitsRep(){
    let owner = localStorage.getItem('user');
    let nameRep= localStorage.getItem('nameRep');

    let url = `https://api.github.com/repos/${owner}/${nameRep}/stats/commit_activity`;
    console.log(url);
    return this.githubService.reqGet(url).map(res=>res.json());
  }
}

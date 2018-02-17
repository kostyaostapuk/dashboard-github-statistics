import { Injectable } from '@angular/core';
import { GithubService } from '../data/github.service';
import { ChartService } from '../chart/chart.service';

@Injectable()
export class ReposService {
  constructor(private githubService: GithubService, private chartService: ChartService) { }

  getRepos(){
    let url = 'https://api.github.com/user/repos';
    return this.githubService.reqGet(url).map( res => res.json());
  }
  getNameRep(val: string){
    localStorage.setItem('nameRep', val);
    this.chartService.getWeekCommitsRep();
    console.log(val);
  }
  getDataRep(){
    return this.chartService.getWeekCommitsRep();
  }
}

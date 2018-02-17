import { Injectable } from '@angular/core';
import { GithubService } from '../data/github.service';
import { ReposService } from '../repos/repos.service';
@Injectable()
export class ChartService {

  constructor( private githubService: GithubService, private reposService: ReposService) { }

  getWeekCommitsRep(){
    let owner = localStorage.getItem('user');
    let nameRep= localStorage.getItem('nameRep');

    let url = `https://api.github.com/repos/${owner}/${nameRep}/stats/commit_activity`;
    return this.githubService.reqGet(url).map(res=>res.json());
  }

}

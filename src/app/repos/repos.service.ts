import { Injectable } from '@angular/core';
import { GithubService } from '../data/github.service';

@Injectable()
export class ReposService {
  constructor(private githubService: GithubService) { }

  getRepos(){
    let url = 'https://api.github.com/user/repos';
    return this.githubService.reqGet(url).map( res => res.json());
  }
  getNameRep(val: string){
    localStorage.setItem('nameRep', val);
    return this.getWeekCommitsRep();
  }

  getWeekCommitsRep(){
    let owner = localStorage.getItem('user');
    let nameRep= localStorage.getItem('nameRep');

    let url = `https://api.github.com/repos/${owner}/${nameRep}/stats/commit_activity`;
    return this.githubService.reqGet(url).map(res=>res.json());
  }
}

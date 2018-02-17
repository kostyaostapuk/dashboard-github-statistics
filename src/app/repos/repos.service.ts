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
    return val;
  }
}

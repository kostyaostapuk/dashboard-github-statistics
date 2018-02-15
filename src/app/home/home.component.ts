import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../data/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private githubService: GithubService ) { }
  userInfo: any;
  userLogin: any;
  userPhoto: any;
  userPublicRep: any;
  userFollowers: any;
  userFollowing: any;


  getUserInfo(){
    this.githubService.getUserInfo()
      .subscribe( res => {
        var body =JSON.parse(res["_body"]);
        console.log(body);
        this.userLogin = body['login'];
        this.userPhoto= body['avatar_url'];
        this.userPublicRep = body['public_repos'];
        this.userFollowers = body['followers'];
        this.userFollowing = body['following'];

      });
    console.log(this.userInfo);
  }
  ngOnInit() {
    this.getUserInfo();
    this.githubService.saveGithubCode();
  }
}

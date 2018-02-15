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
    //this.userInfo=this.githubService.getUserInfo();
    this.githubService.getUserInfo()
      .subscribe( res => {
        var body =JSON.parse(res["_body"]);
        console.log(body);
        this.userLogin = body['login'];
        this.userPhoto= body['avatar_url'];
        this.userPublicRep = body['public_repos'];
        this.userFollowers = body['followers'];
        this.userFollowing = body['following'];
        //console.log(res["_body"].map(res=>res.login));
        //res['_body'].map( res => console.log(res))
      });
    console.log(this.userInfo);
  }
  ngOnInit() {

    this.getUserInfo();

    console.log(this.userInfo);
    this.githubService.saveGithubCode();
  }
}

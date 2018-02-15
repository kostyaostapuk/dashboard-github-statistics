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
  userLogin: string;


  getUserInfo(){
    this.githubService.getUserInfo()
    .subscribe(res=>{
      this.userInfo=res['_body'];
    });
  }
  ngOnInit() {

    this.getUserInfo();

    this.userLogin=this.userInfo['login'];
    console.log(this.userInfo);
    this.githubService.saveGithubCode();
  }
}

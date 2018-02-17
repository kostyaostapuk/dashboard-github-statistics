import { Component, OnInit } from '@angular/core';
import { GithubService } from '../data/github.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  userInfo={ login: '', photo: '', pubRep: '', followers: '', following: '' }

  getUserInfo(){
    this.githubService.getUserInfo().subscribe( res => {
      var body =JSON.parse(res["_body"]);
      this.userInfo.login = body['login'],
      this.userInfo.photo=  body['avatar_url'],
      this.userInfo.pubRep=body['public_repos'],
      this.userInfo.followers=body['followers'],
      this.userInfo.following=body['following']
    });
  }
  ngOnInit() {
    this.getUserInfo();
  }

}

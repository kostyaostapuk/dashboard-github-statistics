import { Component, OnInit } from '@angular/core';
import { GithubService } from '../data/github.service';
import { DataService } from '../data/data.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private githubService: GithubService, private _data: DataService) {

  }

  post(){
    this.githubService.getToken();
    console.log(this.githubService.getToken());
  }
  auth(){
    this.githubService.auth();
  }

  ngOnInit() {
    this.githubService.getToken();
  }

}

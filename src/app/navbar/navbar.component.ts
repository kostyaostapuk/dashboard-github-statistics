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

  constructor(private githubService: GithubService, private _data: DataService) { }

  auth() { this.githubService.auth();}
  logout() { this.githubService.clearData(); this.home(); }
  home() { this.githubService.goHome(); }
  goRoom() { this.githubService.goRoom(); }


  ngOnInit() {
    this.githubService.saveGithubCode();
  }

}

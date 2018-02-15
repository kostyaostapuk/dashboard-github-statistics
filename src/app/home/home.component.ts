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
  token: any;

  ngOnInit() {
    this.token=this.githubService.getGithubToken();
    this.githubService.saveGithubCode();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../data/github.service';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private githubService: GithubService, private _data: DataService) { }

  auth(){ this.githubService.auth(); }

  ngOnInit() {
    this.githubService.getToken();
  }
}

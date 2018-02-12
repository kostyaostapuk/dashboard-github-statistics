import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authLink: string='https://github.com/login/oauth/authorize?client_id=f54825f8d3e236c4b3c2&client_secret=756ff60fe66671b9adcc1b189055c84f478d3ae1&redirect_uri=http://127.0.0.1:4200/auth/callback';
  constructor() { }
  ngOnInit() {

  }

}

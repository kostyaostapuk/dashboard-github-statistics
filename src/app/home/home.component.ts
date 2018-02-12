import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  githubCode: string;
  clientID: string = 'f54825f8d3e236c4b3c2';
  clientSecret: string ='756ff60fe66671b9adcc1b189055c84f478d3ae1';
  callback: string='http://127.0.0.1:4200/#/auth';

  authLink: string=`https://github.com/login/oauth/authorize?client_id=${this.clientID}&client_secret=${this.clientSecret}&redirect_uri=${this.callback}`;

  constructor(private route: ActivatedRoute) { }

  getCode(){
    this.route.params.subscribe(params=>{
      this.githubCode=params['code'];
      console.log(this.githubCode);
    });
  }

  ngOnInit() {
    window.location.href=this.authLink;
  }

}

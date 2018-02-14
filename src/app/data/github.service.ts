import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GithubService {
  constructor(private route: ActivatedRoute, private _http: Http) { }

  githubCode: string;
  clientID: string = 'f54825f8d3e236c4b3c2';
  clientSecret: string ='756ff60fe66671b9adcc1b189055c84f478d3ae1';
  redirectURI: string='http://localhost:4200';

  authLink: string=`https://github.com/login/oauth/authorize?client_id=`+
  `${this.clientID}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectURI}`;

  auth(){
    window.location.href=this.authLink;
  }

  getToken(){
    this.route.queryParams.subscribe(params=>{
      this.githubCode=params['code'];
      localStorage.setItem('githubCode',this.githubCode);

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var body={
        client_id: this.clientID,
        client_secret: this.clientSecret,
        code: localStorage.getItem('githubCode'),
        redirect_uri: this.redirectURI
      }


      this._http.post("http://localhost:4200/api/github/token",body, {headers: headers})
          .subscribe(res => console.log(res.json()));
    });

  }


}

import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class GithubService {
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

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append("cache-control", "no-cache");
      let body={
        client_id: this.clientID,
        client_secret: this.clientSecret,
        code: localStorage.getItem('githubCode'),
        redirect_uri: this.redirectURI
      }
      let url='https://github.com/login/oauth/access_token';
      this._http.post(url,body, {headers})
        .subscribe(res => console.log(res.json()));

      console.log(body);
    });

  }
  constructor(private route: ActivatedRoute, private _http: Http) { }

}

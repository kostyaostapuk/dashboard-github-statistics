import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private route: ActivatedRoute, private _http: Http) { }

  loginStatus: boolean = false;
  githubCode: string = localStorage.getItem('githubCode');
  clientID: string = 'f54825f8d3e236c4b3c2';
  clientSecret: string = '756ff60fe66671b9adcc1b189055c84f478d3ae1';
  redirectURI: string = 'http://localhost:4200';


  authLink: string = `https://github.com/login/oauth/authorize?client_id=` +
  `${this.clientID}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectURI}`;


  //GET REQUEST LINKS
  userInfoLink: string = 'https://api.github.com/user';

  auth() {
    window.location.href = this.authLink;
  }

  saveGithubCode() {
    this.route.queryParams.subscribe(params => {
      this.githubCode = params['code'];
      localStorage.setItem('githubCode', this.githubCode);
      this.checkGithubCode();
    });
  }
  checkGithubCode() {
    if (this.githubCode === undefined) {
      console.log("Ошибка авторизации");
      console.log(this.loginStatus);
    } else {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var body = {
        client_id: this.clientID,
        client_secret: this.clientSecret,
        code: this.githubCode,
        redirect_uri: this.redirectURI
      }

      this._http.post("http://localhost:4200/api/github/token", body, { headers: headers })
        .subscribe(res =>
          localStorage.setItem('githubToken', res.json())
        );
    }
  }

  reqGet(url: string) {
    let token = localStorage.getItem('githubToken');
    let headers = new Headers();
    headers.append('Authorization', "token " + token);
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    options.headers = headers;

    return this._http.get(url, options)
      .map(res => res);
  }

  getUserInfo() {
    console.log(this.reqGet(this.userInfoLink));
    return this.reqGet(this.userInfoLink).map( res => res);


    // .subscribe(res=>{
    //   res['_body'].map(res=>res);
    // });

    // map(
    //   res => {
    //     var user = {
    //       login: res['_body'].login,
    //       id: res['_body'].id,
    //       photo: res['_body'].avatar_url,
    //       followers: res['_body'].followers,
    //       following: res['_body'].following
    //     }
    //   }
    // );
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private route: ActivatedRoute, private router: Router, private _http: Http) { }

  isLoggedIn: boolean = false;
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
    } else {
      this.isLoggedIn=true;
      localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let body = {
        client_id: this.clientID,
        client_secret: this.clientSecret,
        code: this.githubCode,
        redirect_uri: this.redirectURI
      }

      this._http.post("http://localhost:3000/api/github/token", body, { headers: headers })
        .subscribe(res =>
          localStorage.setItem('githubToken', res.json())
        );
    }
  }
  checkLoggedIn(){
    if (this.isLoggedIn) {
        this.router.navigate(['user-room']);
    } else{
        this.router.navigate(['']);
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
    return this.reqGet(this.userInfoLink).map( res => res);
  }

  clearData(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  goHome(){
    this.router.navigate(['']);
  }
  goRoom(){
    this.router.navigate(['user-room']);
  }
}

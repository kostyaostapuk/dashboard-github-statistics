import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

//Service
import { GithubService } from './github.service';

@Injectable()
export class DataService {
  result: any;

  constructor(private _http: Http, private githubService: GithubService) { }

  getUsers(){
    return this._http.get("http://localhost:3000/api/users")
      .map(result => this.result = result.json().data);
  }
}

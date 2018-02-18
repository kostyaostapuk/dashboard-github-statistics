import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { GithubService } from '../data/github.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor ( private githubService: GithubService , private router: Router){

  }
  canActivate() {
    let code = localStorage.getItem('githubCode');
    console.log(this.githubService.isLoggedIn);
    if (code!=undefined) {
      return this.githubService.isLoggedIn;
    }else{
      alert("You don't have rights to access to User Room");
      this.router.navigate(['']);
      return this.githubService.isLoggedIn;

    }
  }
}

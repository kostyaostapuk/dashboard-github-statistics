import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { GithubService } from '../data/github.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor ( private githubService: GithubService , private route: ActivatedRoute){

  }
  isLoggedIn: boolean = false;

  canActivate() {
    // this.githubService.saveGithubCode();
    // var url:any = this.route.snapshot.params['code'];
    // var githubCode:any;
    this.route.queryParams.subscribe(params => {

      let githubCode = params['code'];
      console.log(githubCode);
      localStorage.setItem('githubCode', githubCode);
      //this.checkGithubCode();
    });


    console.log('AuthGuard#canActivate called');
    return true;
  }
}

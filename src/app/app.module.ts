import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http } from '@angular/http';
// Services //
import { DataService } from './data/data.service';
import { GithubService } from './data/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    HomeComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [DataService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

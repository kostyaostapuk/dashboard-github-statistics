import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRoomComponent } from './user-room/user-room.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartComponent } from './chart/chart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// Services //
import { DataService } from './data/data.service';
import { GithubService } from './data/github.service';
import { ReposService } from './repos/repos.service';
import { AuthGuard } from './data/auth.service';
import { ChartService } from './chart/chart.service';

import { ChartModule } from 'angular2-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    HomeComponent,
    NavbarComponent,
    UserRoomComponent,
    SidebarComponent,
    ChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [ DataService, GithubService, ReposService,ChartService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

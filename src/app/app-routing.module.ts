import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/auth.service';

import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { ReposComponent } from './repos/repos.component';
import { UserRoomComponent } from './user-room/user-room.component';
const routes: Routes=[
  { path: '', component: HomeComponent},
  { path: 'user-room',
    component: UserRoomComponent ,
    canActivate: [AuthGuard],
  },
];
//const config: ExtraOptions = { useHash: true }
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

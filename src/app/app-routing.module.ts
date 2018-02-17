import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.service';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ReposComponent } from './repos/repos.component';
import { UserRoomComponent } from './user-room/user-room.component';
const routes: Routes=[
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'room', component: UserRoomComponent},
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

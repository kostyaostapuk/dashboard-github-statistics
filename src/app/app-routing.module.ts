import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ReposComponent } from './repos/repos.component';
const routes: Routes=[
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'repos/:reposID', component: ReposComponent }
];
const config: ExtraOptions = { useHash: true }
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,config)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

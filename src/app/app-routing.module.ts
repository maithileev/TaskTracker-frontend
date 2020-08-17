import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListtasktrackerComponent } from './listtasktracker/listtasktracker.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path : '', component:LandingpageComponent},
  {path : 'login', component:LoginComponent},
  {path : 'home/:username', component:HomepageComponent, canActivate:[RouteGuardService]},
  {path : 'tasks', component : ListtasktrackerComponent,canActivate:[RouteGuardService]},
  {path : 'logout', component : LogoutComponent,canActivate:[RouteGuardService]},
  {path : '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

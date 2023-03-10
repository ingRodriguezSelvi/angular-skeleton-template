import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {GraphicOneComponent} from "./pages/graphic-one/graphic-one.component";
import {NoPageFoundComponent} from "./pages/no-page-found/no-page-found.component";
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graphic-one', component: GraphicOneComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  //{ path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path: '**', component: NoPageFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { Routes } from "@angular/router";
import { AuthGuard } from "projects/core/src/public-api";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [

  {
    path: '',

    pathMatch: 'full',

    redirectTo: '/login'
  },

  // {

  //   path: 'login',

  //   loadChildren: () => import('./login/login.module').then(module => module.LoginModule)

  // },

  {

    path: 'dashboard',

    // canLoad: [AuthGuard],

    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)

  },

  {

    path: '**',

    pathMatch: 'full',

    redirectTo: '/dashboard'

  }



]

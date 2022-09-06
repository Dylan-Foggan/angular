import { Routes } from "@angular/router";
import { AuthGuard } from "projects/core/src/public-api";

import { DashboardComponent } from "../dashboard/dashboard.component";

import { LoginComponent } from "../login/login.component";

export const sharedRoutes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent}

]

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {  RouterModule } from '@angular/router';

import { SidenavModule } from 'projects/core/src/lib/components/sidenav/sidenav.module';

import { DashboardModule } from '../dashboard/dashboard.module';

import { sharedRoutes } from './shared.routes';

@NgModule({

  declarations: [],

  imports: [

    BrowserModule,

    RouterModule.forChild(sharedRoutes),

    DashboardModule,

  ],

  exports: [

    RouterModule

  ]

})

export class SharedModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';

@NgModule({

  declarations: [

    DashboardComponent

  ],

  imports: [

    CommonModule,

    MatButtonModule,

    MatCardModule

  ],

  exports: [

    DashboardComponent

  ],

})

export class DashboardModule {}

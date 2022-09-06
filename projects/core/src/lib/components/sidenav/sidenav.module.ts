import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [SidenavComponent],

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
  ],

  exports: [SidenavComponent],
})
export class SidenavModule {}

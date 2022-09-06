import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputControlModule } from 'projects/core/src/public-api';

import { MatButtonModule } from '@angular/material/button';



@NgModule({

  declarations: [

    LoginComponent

  ],

  imports: [

    CommonModule,

    FlexLayoutModule,

    ReactiveFormsModule,

    FormsModule,

    MatButtonModule,

    MatCardModule,

    InputControlModule

  ],

  exports: [

    LoginComponent

  ]

})

export class LoginModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { InputControlComponent } from './input-control.component';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({

  declarations: [

    InputControlComponent

  ],

  imports: [

    CommonModule,

    MatInputModule,

    ReactiveFormsModule

  ],

  exports: [

    InputControlComponent

  ]

})

export class InputControlModule { }

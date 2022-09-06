import { Component, Input, OnInit, Optional, Self } from '@angular/core';

import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';

import { startWith, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { MatLabel } from '@angular/material/form-field';

@Component({

  selector: 'lib-input-control',

  templateUrl: './input-control.component.html',

  styleUrls: ['./input-control.component.scss']

})


export class InputControlComponent implements ControlValueAccessor, OnInit {

  formControlName: FormControl = new FormControl('', this.validators);

  @Input() label: MatLabel = new MatLabel();

  @Input() type: string = '';

  @Input() placeHolder: string = '';

  constructor(@Optional() @Self() private controlDir: NgControl) {

    if (this.controlDir) this.controlDir.valueAccessor = this;

  }

  ngOnInit(): void { }

  onTouched = () => { }

  registerOnChange(fn: any): void {

    this.formControlName.valueChanges.pipe(

      startWith(null),

      distinctUntilChanged(),

      debounceTime(300)

    ).subscribe((response: string | null) => {

      if (!!response) fn(response);

      return null;

    })

  }

  writeValue(obj: any): void {

    this.formControlName.setValue(obj);

  }

  registerOnTouched(fn: any): void {

  }

  private validators(): Validators {

    return [Validators.required];

  }

}

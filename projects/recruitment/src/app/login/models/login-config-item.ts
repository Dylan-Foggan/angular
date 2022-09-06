import { FormGroup } from "@angular/forms";

export class loginConfigItem {

  loginBuilder: FormGroup;

  constructor(){

    this.loginBuilder = new FormGroup({});

  }

  get isValid(): boolean {

    return this.loginBuilder.valid;

  }

}

import { FormControl } from "@angular/forms";
import { loginConfigItem } from "./login-config-item";

export class LoginConfig {

  standardLogin: loginConfigItem = new loginConfigItem();

  getLoginFormItems() {

    this.standardLogin.loginBuilder.addControl('emailAddress', new FormControl(null));

    this.standardLogin.loginBuilder.addControl('password', new FormControl(null));

  }

}

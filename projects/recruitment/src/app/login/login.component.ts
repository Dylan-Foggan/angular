import { Component, OnInit } from '@angular/core';

import { AuthService } from 'projects/core/src/public-api';

import { LoginConfig } from './models/login-config';
@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  loginConfig: LoginConfig = new LoginConfig();

  constructor(private authService: AuthService) {

    this.loginConfig.getLoginFormItems();

  }

  ngOnInit(): void { }

  loginWithAccount(event: Event) {

    if (event && this.loginConfig.standardLogin.isValid) {

      let formGroupValue = this.loginConfig.standardLogin.loginBuilder.value;

      this.authService.isUserSignIn(formGroupValue.emailAddress, formGroupValue.password);

    }

  }

}

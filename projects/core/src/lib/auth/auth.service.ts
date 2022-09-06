import { Injectable, NgZone } from "@angular/core";

import * as auth from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from "@angular/router";

import { BehaviorSubject, of } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  currentUser: BehaviorSubject<any>;

  constructor(private router: Router, public angualrFireStore: AngularFirestore, public angularFireAuth: AngularFireAuth, public ngZone: NgZone) {

    this.currentUser = new BehaviorSubject<any>(null);

    this.isUserLoggin();

  }


  isUserLoggin() {

    return this.angularFireAuth.authState.subscribe((userInfo) => {

      this.currentUser.next(userInfo);

      localStorage.setItem('CurrentUser', JSON.stringify(userInfo));

      return userInfo;

    })

  }

  isUserSignIn(email: string, password: string) {

    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then((response) => {

      this.angularFireAuth.authState.subscribe((response) => {

        if(!!response) this.router.navigate(['/dashboard']);

      });

    }).catch((error) => {

      this.currentUser.next(error);

      return of(error)

    })

  }

  get isLoggedIn(): boolean {

    const isUserLoggedIn = JSON.parse(localStorage.getItem('CurrentUser')!);

    return isUserLoggedIn !== null && isUserLoggedIn.emailVerified !== false ? true : false;

  }

}

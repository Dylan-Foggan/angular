import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AuthGuard, AuthService, SidenavModule } from 'projects/core/src/public-api';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

import { SharedModule } from './routes/shared.module';

// Angular Fire Modules

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environments/environment';



@NgModule({

  declarations: [AppComponent],

  imports: [

    BrowserModule,

    RouterModule.forRoot(appRoutes),

    SharedModule,

    SidenavModule,

    // Angular Fire Modules

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireAuthModule,

    AngularFirestoreModule,

    AngularFireStorageModule,

    AngularFireDatabaseModule,

  ],

  providers: [

    AuthService,

    AuthGuard

  ],

  bootstrap: [AppComponent]

})

export class AppModule {}

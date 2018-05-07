import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubirNoticiaComponent } from './subir-noticia/subir-noticia.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularFire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { autentificacion } from './login/services/autentificacion.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from './userMail/AuthService.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCDc8nf0hGSpWolXCK5fYqP5qz2exfIfMI",
  authDomain: "prueba-352e2.firebaseapp.com",
  databaseURL: "https://prueba-352e2.firebaseio.com",
  storageBucket: "prueba-352e2.appspot.com",
  messagingSenderId: "909901820043"
}; 

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    routingComponents,
    SubirNoticiaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [autentificacion, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

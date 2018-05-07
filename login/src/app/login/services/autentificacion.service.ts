import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class autentificacion{
    authState: any = null;
 
    constructor(private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      });
    }
    logingoogle(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    loginfacebook(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    getAuth(){
        return this.afAuth.authState.map (auth => auth);
    
      }

      get currentUserId(): string {
        return (this.authState !== null) ? this.authState.uid : ''
      }
    
      logout (){
        return this.afAuth.auth.signOut();
        
      }


    
}

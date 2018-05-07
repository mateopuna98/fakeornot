import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
 
@Injectable()
export class AuthService {
 
  authState: any = null;
 
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
 
//comprueba si no hay ningun usuario logueado
  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }
 
 
//Comprueba si un usuario con email esta logueado
  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }
 
  // metodo por el cual se contacta a firebase para crear nuevo usuario

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
 
  //metodo por el cual se contacta con firebase para comprobar que el mail y pass ingresados son correctos y permita el logueo
  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  getAuth(){
    return this.afAuth.authState.map (auth => auth);

  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

 
  //metodo para desloguear de la cuenta actual
  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
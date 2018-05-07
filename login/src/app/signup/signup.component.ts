import { Component, OnInit } from '@angular/core';
import {moveIn} from '../router.animations';
import { autentificacion } from '../login/services/autentificacion.service';
import { Router } from '@angular/router';
import { AuthService } from '../userMail/AuthService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
 
  resetPassword = false;
 
  constructor(public authService: AuthService, private router: Router) { }
 
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  // es el metodo por el cual se enviara la informacion obtenida en los cuadros de texto del html, para 
  //crear un nuevo usuario en firebase, si se logra tal proceso nos redireccionara a la parte de logueo
  onSignUp(): void {
    this.clearErrorMessage()
 
    if (this.validateForm(this.email, this.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/email'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/signup'])
        })
    }
  }


    // el metodo por el cual se realizara la validacion del ingreso de los datos para el logueo, ademas
  //que si se encuentra algun o error o faltan datos en el email o password, mostrara un mensaje de error
  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }
 
    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }
 
    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false
    }
 
    this.errorMessage = ''
 
    return true
  }

  
  ngOnInit() {
  }

}


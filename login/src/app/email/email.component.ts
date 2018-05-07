import { Component, OnInit } from '@angular/core';
import {moveIn} from '../router.animations';
import { autentificacion } from '../login/services/autentificacion.service';
import { Router } from '@angular/router';
import { AuthService } from '../userMail/AuthService.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  //Aca se menciona los distintos objetos que se usaran para los metodos
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
 
 
  constructor(public authService: AuthService, private router: Router) { }
 
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
// es el metodo por el cual se lograra realizar la conexion con firebase y comprobar si existe tal cuenta, 
// es decir si el mail y password coindicen con los usuarios de firebase, en caso que no muestra un mensaje de error
// especificando porque se produjo tal error, en caso de que pase la autenticacion, se enviara al usuario a la parte de noticias
  onLoginEmail(): void {
    this.clearErrorMessage()
 
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/home']))
        .catch(_error => {
          this.error = _error
          this.router.navigate(['/email'])
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

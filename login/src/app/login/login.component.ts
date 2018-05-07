import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {moveIn} from '../router.animations';
import { autentificacion } from './services/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
 
  constructor(private aut: autentificacion) { 
  
  }

  logingoogle(){
    this.aut.logingoogle()
    .then((data)=>{
      console.log(data);
      alert("Exito")
    })
    .catch((error)=>{
      console.log(error);
      alert("No te has conectado")
    })

  }

  loginfacebook() {
    this.aut.loginfacebook()
    .then((data) => { 
        console.log(data);
        alert("exito")
      })
    .catch((error) =>{
      console.log(error);
      alert("No te has conectado")
    }) 
  }


  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import {autentificacion} from '../../src/app/login/services/autentificacion.service';
import {AuthService} from '../../src/app/userMail/AuthService.service';
import {auth} from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
  

  constructor(
    public authService: autentificacion,
    public aService: AuthService
  ){ }

  ngOnInit(){

    this.authService.getAuth().subscribe(auth =>{
      if (auth){
       this.isLogin = true;
       this.nombreUsuario = auth.displayName; 
       this.emailUsuario = auth.email;
       this.fotoUsuario = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    });

    this.aService.getAuth().subscribe(auth =>{
      if (auth){
       this.isLogin = true;
       this.nombreUsuario = auth.displayName; 
       this.emailUsuario = auth.email;
       this.fotoUsuario = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    });

  }
  
  onClickLogout(){
    this.authService.logout();
    this.aService.signOut();
  }
}



import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Task } from '../models/task';
import {  Commentario} from '../models/comentarios';
import {TaskService} from '.././services/task.service';
import {Datos} from './noticas'
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias : Task[];
  todasLasNoticias = {noticia :'654',cuerpo :'6544',cod_imagen:''};
  comentarios = {idUsuario :'jhon rivero torrez',Cuerpo : 'esto es falso x2'};
  estado: boolean = false;
  es: string='';
  numero : number ;
  
  constructor(private storage: AngularFireStorage, private db: AngularFirestore, public taskService: TaskService) {
  console.log(Datos.todasLasNoticias.noticia);

     this.todasLasNoticias.noticia=Datos.todasLasNoticias.noticia;
     this.todasLasNoticias.cuerpo=Datos.todasLasNoticias.cuerpo;
     this.todasLasNoticias.cod_imagen=Datos.todasLasNoticias.cod_imagen;
     this.numero = Datos.todasLasNoticias.numero;
     
     
  }
  
      

 
    ngOnInit() {
      this.taskService.getTasks().subscribe(tasks => {
   
        //Obtiene todas las noticias de la base de datos con getTask (las noticias son la variable "tasks")
   
        
       
        Datos.noticias = tasks;
        this.noticias =Datos.noticias;
        console.log(Datos.noticias)
        
        
       
       });
     }

     reload()
     {
       console.log('prueba')
      this.taskService.getTasks().subscribe(tasks => {
   
        //Obtiene todas las noticias de la base de datos con getTask (las noticias son la variable "tasks")
   
        
        this.noticias =tasks;
        console.log(this.noticias);
        console.log('ter')
        
       
       });
     }

     updatecoments() {
     
     
      Datos.noticias[this.numero].comentario.push(this.comentarios);
      this.taskService.updatecomment( Datos.noticias,this.numero);
      
      console.log('enviado')
      
      
    }
}

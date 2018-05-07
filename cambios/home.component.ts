import { Component, OnInit } from '@angular/core';
import {enter} from '../router.animations';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Task } from '../models/task';
import {TaskService} from '.././services/task.service';
import {Datos} from '../noticia/noticas'
import { votosUsuario } from '../models/votos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[enter]
})
export class HomeComponent implements OnInit {
   //noticias =  AppComponent.
  todasLasNoticias :Task[]  =Datos.noticias ;
  editState: boolean = false;
  noticianueva: Task[];
  verdad: boolean = false;
  falso: boolean = false;
  votar : boolean = true;


  votos = {idUsuario: 'nuevo',votosPos: 0,votosNeg: 0};
 

  es: string='';
  
  constructor(private storage: AngularFireStorage, private db: AngularFirestore, public taskService: TaskService) {
   
  
  }

 
    ngOnInit() {

      this.taskService.getTasks().subscribe(tasks => {
   
       //Obtiene todas las noticias de la base de datos con getTask (las noticias son la variable "tasks")
  
       
       this.todasLasNoticias =tasks;
       Datos.noticias = tasks;
       this.todasLasNoticias =Datos.noticias;
       /*for (let i of this.todasLasNoticias) {
         for(let x of this.todasLasNoticias[+i].votos) {
         this.votos.votosPos = this.votos.votosPos+ this.todasLasNoticias[+i].votos[+i].votosPos;
         this.votos.votosNeg = this.votos.votosNeg+ this.todasLasNoticias[+i].votos[+i].votosNeg;
         
         
         this.votos.votosPos = 0;
         this.votos.votosNeg = 0;
         }*/
    // }
       

      
      });
     }
    
    
    
  
    updateTask(task :Task[],n: number) {
      this.taskService.updatevotes(task,n);
      
      
    }
 
  reload () {

    location.reload();
  } 
  showspan(n : number) {
   if(this.todasLasNoticias[n].veracidad== false) {

    this.falso = true;
   }
  
    this.noticianueva =this.todasLasNoticias
   
         for (var _i = 0; _i < this.todasLasNoticias[n].votos.length; _i++) {
          
          console.log(_i);
          if(this.todasLasNoticias[n].votos[_i].idUsuario ==='admin3') {
            this.votar = false;
            console.log('repetido');
            

         }
         
              

    }
    if(this.votar)

    {
     this.noticianueva[n].votosNegTotal =  this.noticianueva[n].votosNegTotal+1;
     this.votos.votosNeg= 1;
     this.votos.idUsuario = 'admin3'
     this.noticianueva[n].votos.push(this.votos);
     this.updateTask(this.noticianueva,n);
    }
   
    }
  showspan2(n : number){
    if(this.todasLasNoticias[n].veracidad) {

      this.verdad = true;
     }
    
    this.noticianueva =this.todasLasNoticias
   // this.noticianueva[n].votosPos =  this.noticianueva[n].votosPos+1;
    this.updateTask(this.noticianueva,n);
    
  }

  leerNoticia(numero : number) {

    Datos.obtenernoticias(this.todasLasNoticias[numero].Titulo,this.todasLasNoticias[numero].Cuerpo,this.todasLasNoticias[numero].cod_imagen,numero)
   
  }
 
  
  

}

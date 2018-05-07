import { Component ,OnInit} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Task } from '.././models/task';
import {TaskService} from '.././services/task.service';
import { NgModel } from '@angular/forms';
import { HomeComponent} from '../home/home.component';
import {Commentario} from '../models/comentarios';
import {votosUsuario} from '../models/votos';
import { Comment } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

//Todo lo necesario para subir información a la base de datos
  //Variables y constructor

   //Variable para subir imagen obtenida de angularfire2

   subir: AngularFireUploadTask;

   //Monitorear el progreso

   snapshot: Observable<any>;

   // Link de descarga de la imagen

   downloadURL: Observable<string>;
   link : string;

   

   veracidad : boolean; // Booleano para saber si una noticia es verdadera
   

   // State for dropzone CSS toggling

   isHovering: boolean;

    //Variables para subir el texto de la noticia (Título, descripción, cuerpo)

     todasLasNoticias: Task[];
     commentario : Commentario[]=[];
     votousuario : votosUsuario[]=[];
     // list = new List<Comment>();
     no = {idUsuario: 'admin',Cuerpo:'esta noticia es genial'};
     voto = {idUsuario : 'admin', votosPos : 1 , votosNeg: 0};
     
     // lista que se subira a la noticia
   noticia = {Titulo :'',Cuerpo :'', descripcion : '' ,cod_imagen: '',votos : this.votousuario, veracidad : true,  comentario: this.commentario,votosPosTotal : 1,votosNegTotal: 0};
  
   editState: boolean = false;
   taskToEdit: Task;
 

  
   constructor(private storage: AngularFireStorage, private db: AngularFirestore, public taskService: TaskService) {
      
    this.commentario.push(this.no);
    this.votousuario.push(this.voto);
    }

   


  //Métodos para subir imagen a Firebase Storage y obtener el link de descarga de la misma
  
   toggleHover(event: boolean) {

    this.isHovering = event;

   }

   //Método para subir la imagen
 
   subirImagen(event: FileList) {

    //El archivo obtenido al subirlo en el HTML

    const file = event.item(0)

   // Asegurarse que el archivo sea una imagen

     if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;

     }
 
    //La dirección de la imagen en Firebase Storage

     const path = `test/${new Date().getTime()}_${file.name}`;

    // La tarea principal

     this.subir = this.storage.upload(path, file,)

    //Monitorea el progreso


      this.snapshot   = this.subir.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap)
       
      })
     )

     //Obtiene el link de descarga de la imagen (de tipo Observable<string>)

      this.downloadURL= this.subir.downloadURL();

    }

    //Revisa si la transferencia aún no ha terminado

   isActive(snapshot) {

     return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes

    }

   //Obtiene el link de descarga de tipo string (listo para subir a la base de datos)

   obtenerLink(){

     this.link = document.getElementById('9').getAttribute('href');

    }

   esVerdad(){
      this.noticia.veracidad = true;
      //console.log(this.veracidad);

    }
     
   noEsVerdad(){

      this.noticia.veracidad = false;

    }

     

  
  //Sube el título, cuerpo y link de descarga de la imagen 

   ngOnInit() {

   
     this.taskService.getTasks().subscribe(tasks => {
  
      //Obtiene todas las noticias de la base de datos con getTask (las noticias son la variable "tasks")

      this.todasLasNoticias = tasks;

      console.log(this.todasLasNoticias)
      
    
     });
    }


   anadirnoticia(){

    this.obtenerLink();

    console.log(this.noticia)

    this.noticia.cod_imagen = this.link; 


    this.taskService.addTask(this.noticia);
 
    window.setTimeout(this.reiniciar,3000);
    console.log()

    

   }  
   reiniciar(){

location.reload();
   }

   

   


  
   

  

  





}


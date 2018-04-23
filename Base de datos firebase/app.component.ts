import { Component ,OnInit} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Task } from './models/task';
import {TaskService} from './services/task.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './file-upload/file-upload.component.html',
  styleUrls: ['./file-upload/file-upload.component.scss']
})
export class AppComponent implements OnInit {
  link : string;
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;


  tasks: Task[];
  taskss = {Titulo :'',Cuerpo :'',cod_imagen: ''};


  editState: boolean = false;
  taskToEdit: Task;
 

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, public taskService: TaskService) { }

  //IMPORTANTE
  //Subir imagen
  
   toggleHover(event: boolean) {
    this.isHovering = event;
  }


   startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

      
    // The main task
    this.task = this.storage.upload(path, file,)

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap)
       
      })
    )
// The file's download URL
this.downloadURL= this.task.downloadURL();

  }




  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
  obtenerLink(){
     this.link = document.getElementById('9').getAttribute('href');
    console.log(this.link);

  }

//IMPORTANTE
//Subir titulo, cuerpo y link de descarga de la imagen 

  ngOnInit() {

this.taskService.getTasks().subscribe(tasks => {
  this.tasks = tasks;
  console.log(this.tasks)
 });
  }
public anadirnoticia()
{ 
  console.log(this.taskss)
  this.taskss.cod_imagen = this.link; 

    this.taskService.addTask(this.taskss);
}

  

  
}


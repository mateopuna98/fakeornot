import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Task } from '../models/task';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

  tasksCollection: AngularFirestoreCollection<Task>;//variables de firebase
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs: AngularFirestore) {

    //obtencion de noticas
    this.tasksCollection = this.afs.collection('Noticias');
  
    this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }


  getTasks() { // obtiene noticias
    return this.tasks;   }

  addTask(task: Task) { // insertar noticias
      this.tasksCollection.add(task);
    }
  
  deleteTask(task: Task) { // borrar
      //this.taskDoc = this.afs.doc(task.id});
      this.taskDoc.delete();
    }
  
  updatevotes(task: Task[],n :number) {
   

   this.tasksCollection.doc(task[n].id).update( {votosNegTotal: task[n].votosNegTotal });
   this.tasksCollection.doc(task[n].id).update( {votosPosTotal: task[n].votosPosTotal });
   this.tasksCollection.doc(task[n].id).update( {votos: task[n].votos});
     
    }  

    updatecomment(task: Task[],n :number) {
   

      this.tasksCollection.doc(task[n].id).update( {comentario: task[n].comentario });
      
       }  
   

}

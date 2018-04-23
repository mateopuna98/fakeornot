import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {TaskService} from '../../services/task.service';
import { NgModel } from '@angular/forms';
import {} from '../../components/add-tasks.ts';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[];
  taskss = {Titulo :'',Cuerpo :'',cod_imagen: "hhpras.ima.com"};
  datos = 0;

  editState: boolean = false;
  taskToEdit: Task;
  constructor(public taskService: TaskService) {
   
   }

  ngOnInit() {

this.taskService.getTasks().subscribe(tasks => {
  this.tasks = tasks;
  console.log(this.tasks);
  
   for (var i =0;tasks.length > i;i++)
  
    {
      this.datos +=  +tasks[i].Cuerpo;

    }
     console.log(this.datos)
   
 });
  }
public anadirnoticia()
{ 
 // console.log(this.taskss)
  
   this.taskService.addTask(this.taskss);
}

  deleteTask(event, task) {
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  editTask(event, task) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }

  updateTask(task) {
    this.taskService.updateTask(task);
    this.taskToEdit = null;
    this.editState = false;
  }

}

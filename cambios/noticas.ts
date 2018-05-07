import { Task } from '../models/task';
import {TaskService} from '.././services/task.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';

export class Datos {

     static todasLasNoticias = {noticia :'',cuerpo :'',cod_imagen:'',numero : 0};
     static noticias : Task[]; 
     static obtenernoticias(titulo : string,cuerpo : string , cod : string , numero : number)
   {
     Datos.todasLasNoticias.noticia = titulo;
     Datos.todasLasNoticias.cuerpo = cuerpo;
     Datos.todasLasNoticias.cod_imagen = cod;
     Datos.todasLasNoticias.numero = numero;
   }

   
}
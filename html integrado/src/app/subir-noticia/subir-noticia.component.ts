import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-subir-noticia',
  templateUrl: './subir-noticia.component.html',
  styleUrls: ['./subir-noticia.component.css']
})
export class SubirNoticiaComponent implements OnInit {
  fuente: boolean = false;
  constructor() { }


  mostrarFuente(){
  
    this.fuente = true;
    console.log()
  }
  ocultarFuente(){
  
    this.fuente = false;
  }
  ngOnInit() {
  }

}

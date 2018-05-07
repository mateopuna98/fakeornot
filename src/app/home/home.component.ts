import { Component, OnInit } from '@angular/core';
import {enter} from '../router.animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[enter]
})
export class HomeComponent implements OnInit {
 
  estado: boolean = false;
  es: string='';
  cubrir: boolean = false;
  constructor() { }
  noticias = [1, 2, 3, 4, 5, 6, 7, 6];
  showspan(){
    this.estado = true;
    }
  showspan2(){
    this.estado = true;
  }
  ngOnInit() {
  }
  descover(){
    var noticia = document.body;
    noticia.style.overflow='auto'
    this.cubrir = false;
  }
  cover(){
    var noticia = document.body;
    noticia.style.overflow='hidden'
    this.cubrir = true;
  }

}

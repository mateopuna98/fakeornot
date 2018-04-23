import { Component, OnInit } from '@angular/core';
import {enter} from '../router.animations';
@Component({
  selector: 'app-fakest',
  templateUrl: './fakest.component.html',
  styleUrls: ['./fakest.component.css'],
  animations:[enter]
})
export class FakestComponent implements OnInit {

  constructor() { }
  estado: boolean = false;
  es: string='';
  

  showspan(){
    this.estado = true;
  }
  showspan2(){
    this.estado = true;
  }
  ngOnInit() {
  }

}

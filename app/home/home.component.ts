import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  titulo = '';
  constructor() { }

  showspan(){
    let res = document.getElementById('resultado');
    res.style.display='block';
  }
  ngOnInit() {
  }

}

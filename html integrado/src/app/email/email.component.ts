import { Component, OnInit } from '@angular/core';
import {moveIn} from '../router.animations';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

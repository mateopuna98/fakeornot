import { Component, OnInit} from '@angular/core';
import { moveIn } from '../router.animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

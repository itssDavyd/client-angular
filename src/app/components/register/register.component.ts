import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({

  selector: 'register',
  templateUrl: 'register.component.html'

})

export class RegisterComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Registrate';
  }

  ngOnInit(): void {
    console.log('register.component cargado CORRECTAMENTE');
  }
}

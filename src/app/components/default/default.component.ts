import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/User";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({

  selector: 'default',
  templateUrl: 'default.component.html',
  providers: [UserService]

})

export class DefaultComponent implements OnInit {
  title: string;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
    this.title = 'HOME';
  }

  ngOnInit(): void {
    console.log('register.component cargado CORRECTAMENTE');
  }
}

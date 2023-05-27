import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/User";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({

  selector: 'register',
  templateUrl: 'register.component.html',
  providers: [UserService]

})

export class RegisterComponent implements OnInit {
  title: string;
  registerForm = this.fb.group({
    username: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })
  isSubmitted = false;

  //user: User;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
    this.title = 'Registrate';
  }

  ngOnInit(): void {
    console.log('register.component cargado CORRECTAMENTE');
  }

  onSubmit() {
    console.log('Submitted form ', this.registerForm.value, this.registerForm.invalid);
    this.isSubmitted = true;
    console.log('Lo que devuelve el user.service: ', this._userService.testing());
  }
}

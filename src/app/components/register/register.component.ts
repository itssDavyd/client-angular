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
  status: string;
  registerForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })
  isSubmitted = false;

  //user: User;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
    this.title = 'Registrate';
    this.status = ''
  }

  ngOnInit(): void {
    console.log('register.component cargado CORRECTAMENTE');
  }

  onSubmit(registerForm: any) {
    /*console.log('Submitted form ', this.registerForm.value, this.registerForm.invalid);
    this.isSubmitted = true;
    console.log('Lo que devuelve el user.service: ', this._userService.testing());*/

    this._userService.register(this.registerForm.value).subscribe(
      response => {
        if (response.status == 'success') {
          //Vaciar el formulario
          this.status = response.status;
          registerForm.reset();

          //Al finalizar redirige a HOME para que sea dinamica la pagina.
          this._router.navigate(['login'])
        } else {
          this.status = 'error';

        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}

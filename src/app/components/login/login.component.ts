import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/User";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({

  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [UserService]

})

export class LoginComponent implements OnInit {
  title: string;
  status: string;
  isSubmitted = false;
  token: any;
  identity: any;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
    this.title = 'Identificate';
    this.status = '';
    this.token = '';
    this.identity = '';
  }

  ngOnInit(): void {
    console.log('login.component cargado CORRECTAMENTE');
    let users = this._userService.getIdentity();
    if (users != null) {
      console.log('EEEPA EL NOMBRE DEL USER: ', users.name)
    }
    this.logout();

  }

  onSubmit(loginForm: any) {

    this._userService.signup(this.loginForm.value).subscribe(
      response => {
        //Comprobamos que el inicio de session sea valido.
        if (response.status != 'error') {
          this.status = 'success';
          //Obtenemos primero el TOKEN del usuario que va a ser el que se mantenga por toda la session.
          //console.log('TOKEN=> ', response);
          this.token = response;

          //Guardado en LOCAL STORAGE.
          localStorage.setItem('token', this.token);


          //Obtenemos los datos en bloque del usuario para trabajar con ellos (name,surname etc).
          this._userService.signup(this.loginForm.value, 'true').subscribe(
            response => {
              //console.log('USER=> ', response);
              this.identity = response;

              //Guardado en LOCAL STORAGE. (TODO: Recordar que en LOCALSTORAGE solo se puede guardar texto (string) o enteros (int), por eso te castea.
              localStorage.setItem('identity', JSON.stringify(this.identity));

              //Al finalizar redirige a HOME para que sea dinamica la pagina.
              this._router.navigate(['home'])

            },
            error => {
              console.log(<any>error);
            }
          )
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  logout() {
    this._route.params.subscribe(params => {
      let logout = +params['sure'];
      if (logout == 1) {
        //Cierra la session segura.
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.token = null;
        this.identity = null;

        //Redireccion directa nada mas salir al home.
        this._router.navigate(['home']);
      }
    })
  }
}

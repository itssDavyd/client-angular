import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Car} from "../../models/Car";
import {FormBuilder, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";


@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService, CarService]
})
export class CarNewComponent implements OnInit {
  page_title: string;
  identity: any;
  token: any;
  status: string;
  crearCarForm: any;

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _carService: CarService) {
    this.page_title = 'Crear nuevo coche';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.crearCarForm = '';
    this.status = '';

  }

  ngOnInit(): void {
    if (this.identity == null) {
      //En caso de que no exista redirige a que se loguee.
      this._router.navigate(['login']);
    } else {
      //Creamos coche.
      this.crearCarForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        status: ['', Validators.required]
      })
    }
  }

  onSubmit(crearCarForm: any) {
    //console.log('Creado=> ', this.crearCarForm.value);
    //console.log('CAR_PRUEBAS=>', this._carService.testing())

    this._carService.create(this.token, this.crearCarForm.value).subscribe(
      response => {
        if (response.status == 'success') {
          //Si el estado es success asignamos este estado para sacar el mensaje y reiniciamos el formulario de CREACION.
          this.status = response.status;
          crearCarForm.reset();

          //Al finalizar redirige a HOME para que sea dinamica la pagina.
          this._router.navigate(['home'])
        }
      },
      error => {
        //En caso de que se genere algun tipo de status erroneo genera un mensaje y se mantiene en el formulario.
        console.log(<any>error);
      }
    )

  }
}

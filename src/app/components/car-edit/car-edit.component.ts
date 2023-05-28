import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {CarService} from "../../services/car.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: '../car-new/car-new.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [UserService, CarService]
})
export class CarEditComponent {
  page_title: string;
  identity: any;
  token: any;
  status: string;
  crearCarForm: any;
  car: any;

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _carService: CarService) {
    this.page_title = '';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.crearCarForm = '';
    this.status = '';
    this.car = '';

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

  //Queda comprobar este rollo, lo ideal seria crear un nuevo html como esta creasdo en car-detail.component.html tirar de el crear un form ahi validarlo, poner los datos por pantalla para editar y que haga como el de crear pero para editar los coches.

}

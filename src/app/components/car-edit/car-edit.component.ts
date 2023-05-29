import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {CarService} from "../../services/car.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [UserService, CarService]
})
export class CarEditComponent {
  page_title: string;
  identity: any;
  token: any;
  status: string;
  editarCarForm: any;
  car: any;

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _carService: CarService) {
    this.page_title = '';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.editarCarForm = '';
    this.status = '';
    this.car = '';

  }

  ngOnInit(): void {
    if (this.identity == null) {
      //En caso de que no exista redirige a que se loguee.
      this._router.navigate(['login']);
    } else {
      //Creamos coche.
      this.editarCarForm = this.fb.group({
        title: ['', Validators.min(5)],
        description: '',
        price: '',
        status: ''
      })
      this.getCar();

    }
  }

  getCar() {
    this._route.params.subscribe(params => {
      //Obtengo el id de la REQUEST por params.
      let id = +params['id'];
      //Se lo pasa y obtengo el coche.
      this._carService.getCar(id).subscribe(
        response => {
          if (response.status == 'success') {
            this.car = response.car;
            this.page_title = 'Editar coche: ' + response.car.title;
          } else {
            this._router.navigate(['home'])
          }
        }, error => {
          console.log(<any>error)
        }
      )
    })
  }

  onSubmit(editarCarForm: any) {
    this._route.params.subscribe(params => {
      //Obtengo el id de la REQUEST por params.
      let id = +params['id'];
      this._carService.update(id, this.token, this.editarCarForm.value).subscribe(
        response => {
          if (response.status == 'success') {
            //Si el estado es success asignamos este estado para sacar el mensaje y reiniciamos el formulario de CREACION.
            this.status = response.status;
            editarCarForm.reset();

            //Al finalizar redirige a HOME para que sea dinamica la pagina.
            this._router.navigate(['home'])
          }
        },
        error => {
          //En caso de que se genere algun tipo de status erroneo genera un mensaje y se mantiene en el formulario.
          console.log(<any>error);
        }
      )
    })
  }

  //Queda comprobar este rollo, lo ideal seria crear un nuevo html como esta creasdo en car-detail.component.html tirar de el crear un form ahi validarlo, poner los datos por pantalla para editar y que haga como el de crear pero para editar los coches.

}

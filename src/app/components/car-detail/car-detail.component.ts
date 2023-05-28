import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [UserService, CarService]
})
export class CarDetailComponent implements OnInit {
  title: string;
  car: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _carService: CarService) {
    this.title = 'Details'
    this.car = '';
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this._route.params.subscribe(params => {
      //Obtengo el id de la REQUEST por params.
      let id = +params['id'];
      //Se lo pasa y obtengo el coche.
      this._carService.getCar(id).subscribe(
        response => {
          if (response.status == 'success') {
            //console.log(response.car)
            this.car = response.car;
          } else {
            this._router.navigate(['home'])
          }
        }, error => {
          console.log(<any>error)
        }
      )
    })
  }

}

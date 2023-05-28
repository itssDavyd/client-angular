import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {CarService} from "../../services/car.service";

@Component({

  selector: 'default',
  templateUrl: 'default.component.html',
  providers: [UserService, CarService]

})

export class DefaultComponent implements OnInit {
  title: string;
  cars: Array<any>;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute, private _carService: CarService) {
    this.title = 'HOME';
    this.cars = [];
  }

  ngOnInit(): void {
    console.log('register.component cargado CORRECTAMENTE');
    this._carService.getCars().subscribe(
      response => {
        //console.log(response)
        if (response.status == 'success') {
          this.cars = response.cars;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}

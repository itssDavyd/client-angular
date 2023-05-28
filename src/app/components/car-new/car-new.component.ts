import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Car} from "../../models/Car";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService]
})
export class CarNewComponent implements OnInit {
  page_title: string;
  identity: any;
  token: any;
  status: string;
  crearCarForm: any;

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
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
    console.log('Creado=> ', this.crearCarForm.value);
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  identity: any;
  token: any;

  constructor(private _userService: UserService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  title = 'client-angular';

  ngOnInit(): void {
    //Ejecuta lo que tenga en el momento de carga de la pagina.
    console.log('app.component cargado')
  }

  //Realiza una comprobacion en el momento que cambia algo de nuestra pagina.
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}

import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GLOBAL} from "./global";
import {User} from "../models/User";


@Injectable()
export class UserService {
  url: string;
  identity: any;
  token: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.token = "";
    this.identity = "";
  }

  testing() {
    return 'Hello world!!';
  }

  //registro desde API
  register(user: any): Observable<any> {
    let json = JSON.stringify(user);
    //JSON con todos los datos que tiene que guardar del USUARIO.
    let params = 'json=' + json;

    //Cabecera a enviar con el formato correspondiente.
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //Devolvemos la estructura de POST a la hora de ejecutar url /register.
    return this._http.post(this.url + 'register', params, {headers: headers});
  }

  signup(user: any, getToken = 'false'): Observable<any> {
    if (getToken != 'false') {
      user.getToken = 'true';
    }
    let json = JSON.stringify(user);
    //JSON con todos los datos que tiene que guardar del USUARIO.
    let params = 'json=' + json;

    //Cabecera a enviar con el formato correspondiente.
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //Devolvemos la estructura de POST a la hora de ejecutar url /register.
    return this._http.post(this.url + 'login', params, {headers: headers});
  }

  getIdentity() {
    //Obtener la identidad del usuario registrado desde el LOCALSTORAGE para tener el control siempre de que es el usuario correcto.
    let identity = JSON.parse(<string>localStorage.getItem('identity'));

    if (identity != undefined) {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken() {
    //Obtenemos el TOKEN del usuario del LOCALSTORAGE para saber que es el mismo siempre y poder despues sacar la IDENTIDAD con getIdentity()
    let token = localStorage.getItem('token');

    if (token != undefined) {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

}

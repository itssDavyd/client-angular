import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GLOBAL} from "./global";
import {Car} from "../models/Car";


@Injectable()
export class CarService {
  url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  testing() {
    return 'Hello world!!';
  }

  create(token: any, car: Car): Observable<any> {
    let json = JSON.stringify(car);
    let params = "json=" + json;

    //Le pasamos por la cabecera los datos del POST a pasar y la autorizacion del token de usuario para confirmar que puede crearlo.
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post(this.url + 'cars', params, {headers: headers});
  }

  update(id: number, token: any, car: Car): Observable<any> {
    let json = JSON.stringify(car);
    let params = "json=" + json;

    //Le pasamos por la cabecera los datos del POST a pasar y la autorizacion del token de usuario para confirmar que puede crearlo.
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put(this.url + 'cars/' + id, params, {headers: headers});
  }

  delete(id: number, token: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.delete(this.url + 'cars/' + id, {headers: headers});
  }

  getCars(): Observable<any> {

    //Le pasamos por la cabecera los datos del POST a pasar y la autorizacion del token de usuario para confirmar que puede crearlo.
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //Peticion para sacar todos el listado de coches del concesionario.
    return this._http.get(this.url + 'cars', {headers: headers});
  }

  getCar(id: number): Observable<any> {

    //Peticion que obtienes un Coche del concesionario.
    return this._http.get(this.url + 'cars/' + id);
  }
}

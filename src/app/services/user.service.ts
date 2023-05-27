import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GLOBAL} from "./global";
import {User} from "../models/User";


@Injectable()
export class UserService {
  url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  testing() {
    return 'Hello world!!';
  }

  //registro desde API

}

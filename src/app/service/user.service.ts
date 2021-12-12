import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'} )
  };

  constructor() { }
}

import { Injectable } from '@angular/core';
import {LoginRequest} from "../model/login-request";
import {Observable} from "rxjs";
import {WebRequestService} from "./web-request.service";
import {LoginResponse} from "../model/login-response";
import {RegisterRequest} from "../model/register-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequestService: WebRequestService) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.webRequestService.postRequest('users/login', loginRequest)
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.webRequestService.postRequest('users/register', registerRequest)
  }
}

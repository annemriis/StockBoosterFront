import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// All request methods.

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  private url = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  /** GET ... from the server */
  getRequest(uri: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/stock/GOOG");
  }

  postRequest() {

  }

  // delete jne.
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, from} from "rxjs";

// All request methods.

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  private url = "http://localhost:8080/"

  constructor(
    private http: HttpClient
  ) { }

  /** GET request */
  getRequest(uri: string): Observable<any> {
    return this.http.get(this.url + uri);
  }

  getReq(uri: string) {
    return from(
      fetch(
        this.url + uri, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET',
          mode: 'no-cors'
        }
      )
    )
  }

  postRequest() {

  }

  // delete jne.
}

interface Stock {

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, from, ObservedValueOf} from "rxjs";
import {StockInterface} from "./Interface/StockInterface";

// All request methods.

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  private url = "http://localhost:8080/"

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    "Access-Control-Allow-Methods": "GET",

  } )


  getRequest(uri:string): Observable<StockInterface> {
    return this.http.get<StockInterface>(this.url + uri, {headers: this.headers})
  }


  getReq(uri: string): Observable<ObservedValueOf<Promise<Response>>> {
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

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, from, ObservedValueOf} from "rxjs";
import {StockInterface} from "../Interface/StockInterface";

// All request methods.

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    "Access-Control-Allow-Methods": "GET",

  } )


  getRequest(uri:string): Observable<StockInterface> {
    return this.http.get<StockInterface>(uri, {headers: this.headers})
  }


  // delete jne.
}

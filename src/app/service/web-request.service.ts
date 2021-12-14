import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
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
    "Access-Control-Allow-Methods": "GET, POST",

  } )


  getRequest(url:string): Observable<StockInterface> {
    return this.http.get<StockInterface>(url, {headers: this.headers})
  }

  postRequest(url: string, body: any) : Observable<any> {
    return this.http.post<any>(url, body, {headers: this.headers})
  }

  // delete jne.
}

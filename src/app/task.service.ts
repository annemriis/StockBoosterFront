import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// This is responsible for modifying data.

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private heroesUrl = 'api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  /** GET ... from the server */
  getSomething(title: String) {

  }

}

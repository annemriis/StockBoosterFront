import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }


  /** GET ... from the server */
  getStock(symbol: String) {
    return this.webRequestService.getRequest("api/stock/GOOG");
  }

}

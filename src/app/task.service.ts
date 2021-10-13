import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  /** GET stock info from the server */
  getStock(symbol: String) {
    return this.webRequestService.getRequest("api/stock/" + symbol);
  }

  /** GET stock info from the server */
  getMoralStock(symbol: String) {
    return this.webRequestService.getRequest("api/stock/" + symbol + "/boost-morale");
  }

}

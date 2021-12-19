import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  /** GET stock info from the server */
  getStock(symbol: String) {
    return this.webRequestService.getStockRequest("api/stock/" + symbol);
  }

  /** GET stock info from the server */
  getMoraleBoostStock(symbol: String) {
    return this.webRequestService.getMoraleBoostRequest("api/stock/" + symbol + "/boost-morale");
  }

}

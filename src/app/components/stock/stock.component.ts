import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebRequestService} from "../../web-request.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public http: HttpClient, private  apiService: WebRequestService) { }

  json: JSON = JSON;

  symbol: string = ""

  data: string = "data can go here"

  getStockData(symbol: string) {
    return this.apiService.getRequest(symbol);
  }

  ngOnInit(): void {
  }

}

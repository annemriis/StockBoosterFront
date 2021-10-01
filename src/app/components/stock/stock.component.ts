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
  hasSubmitted: boolean = false;

  symbol: string = ""


  getStockData(symbol: string) {
    this.hasSubmitted = true;
    console.log("api/stock/" + symbol.toUpperCase())
    this.apiService.getRequest("api/stock/" + symbol.toUpperCase())
      .subscribe(data => this.json = data.toJSON());
  }

  ngOnInit(): void {
  }

}

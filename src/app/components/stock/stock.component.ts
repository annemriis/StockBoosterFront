import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebRequestService} from "../../web-request.service";
import {TaskService} from "../../task.service";
import {StockInterface} from "../../Interface/StockInterface";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public http: HttpClient, private  apiService: WebRequestService, private taskService: TaskService) { }

  json: JSON = JSON;
  hasSubmitted: boolean = false;

  symbols: StockInterface | undefined


  getStockData(symbol: string) {
    this.hasSubmitted = true;
    console.log("api/stock/" + symbol.toUpperCase())
    /**
    this.apiService.getReq("api/stock/" + symbol.toUpperCase()).subscribe(
      async (res: Response) => this.json = await res.json()
    );
     **/
    this.taskService.getStock(symbol.toUpperCase())
      .subscribe((data) => this.symbols = data);
    if (this.symbols === undefined) {
      // Need to implement that the stock dosent exsits
    }
  }

  ngOnInit(): void {
  }


}


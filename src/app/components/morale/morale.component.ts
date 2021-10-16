import {Component, OnInit} from '@angular/core';
import {WebRequestService} from "../../web-request.service";
import {TaskService} from "../../task.service";
import {StockInterface} from "../../Interface/StockInterface";
import {StockGuiServiceService} from "../stock-graphical-interface/stock-graphical-interface/stock-gui-service.service";

@Component({
  selector: 'app-morale',
  templateUrl: './morale.component.html',
  styleUrls: ['./morale.component.css']
})
export class MoraleComponent implements OnInit {

  constructor(
    private  apiService: WebRequestService,
    private taskService: TaskService,
    public stockGUIService: StockGuiServiceService) {
  }

  hasSubmitted: boolean = false;
  stockInterface!: StockInterface
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getStockData = (symbol: string) => {
    this.taskService.getMoralBoostStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = data
      this.stockGUIService.buildStockInfoWithInterface(data, false)
      this.dataSource = this.stockGUIService.dataSource
      this.hasSubmitted = true;
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  ngOnInit(): void {
  }

}

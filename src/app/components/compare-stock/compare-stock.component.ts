import {Component, OnInit} from '@angular/core';
import {WebRequestService} from "../../service/web-request.service";
import {TaskService} from "../../service/task.service";
import {StockInterface} from "../../Interface/StockInterface";
import {StockGuiServiceService} from "../../service/stock-gui-service.service";


@Component({
  selector: 'app-compare-stock',
  templateUrl: './compare-stock.component.html',
  styleUrls: ['./compare-stock.component.css']
})
export class CompareStockComponent implements OnInit {

  constructor(private  apiService: WebRequestService, private taskService: TaskService,
              public stockGUIService: StockGuiServiceService) {
  }

  hasSubmitted: boolean = false;
  hasSubmitted2: boolean = false;
  stockInterface!: StockInterface
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getData = (symbol: string) => {
    this.taskService.getStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = data
      this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, false)
      this.dataSource = this.stockGUIService.dataSource
      this.hasSubmitted = true;
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  getStockData = (symbol: string) => {
    this.taskService.getStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = data
      this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, true)
      this.dataSource = this.stockGUIService.dataSource
      this.hasSubmitted2 = true;
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  ngOnInit(): void {
  }

}

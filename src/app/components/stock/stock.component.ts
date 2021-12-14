import {Component, OnInit} from '@angular/core';
import {WebRequestService} from "../../service/web-request.service";
import {TaskService} from "../../service/task.service";
import {StockInterface} from "../../Interface/StockInterface";
import {StockGuiServiceService} from "../../service/stock-gui-service.service";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private  apiService: WebRequestService, private taskService: TaskService,
  public stockGUIService: StockGuiServiceService) {
  }

  hasSubmitted: boolean = false;
  throwError: boolean = false;
  stockInterface!: StockInterface
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getStockData = (symbol: string) => {
    this.taskService.getStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = data
      this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, false)
      if (this.stockGUIService.gotResponse) {
        this.throwError = false;
        this.dataSource = this.stockGUIService.dataSource
        this.hasSubmitted = true;
      } else {
        this.throwError = true;
        this.hasSubmitted = true;
      }
    });
  }

  ngOnInit(): void {
  }

}

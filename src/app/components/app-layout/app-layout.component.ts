import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../../service/web-request.service";
import {TaskService} from "../../service/task.service";
import {StockGuiServiceService} from "../../service/stock-gui-service.service";
import {StockInterface} from "../../Interface/StockInterface";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  host: {
    class: "container"
  }

})

export class AppLayoutComponent implements OnInit {

  constructor(private  apiService: WebRequestService, private taskService: TaskService,
              public stockGUIService: StockGuiServiceService) {

  }

  stockGui!: StockGuiServiceService[]
  symbols = ["SPY", "DOW"]
  stockGUISPY!: StockGuiServiceService
  stockGUIDOW!: StockGuiServiceService
  hasSubmitted: boolean = false;
  stockInterface!: StockInterface
  dataSourceSPY = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];
  dataSourceDOW = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];
  dataSource = [{}];


  getData = (string: String) => {
    this.taskService.getStock(string).subscribe((data) => {
      this.stockInterface = data
      this.stockGui.push(JSON.parse(JSON.stringify(this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, false))))
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  getSPYData = () => {
    this.taskService.getStock("SPY").subscribe((data) => {
      this.stockInterface = data
      this.stockGUISPY = JSON.parse(JSON.stringify(this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, false)))
      if (this.stockGUISPY != undefined) {
        this.dataSourceSPY = this.stockGUIDOW.dataSource
        this.hasSubmitted = true;
      }
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  getDOWData = () => {
    this.taskService.getStock("NDAQ").subscribe((data) => {
      this.stockInterface = data
      this.stockGUIDOW = JSON.parse(JSON.stringify(this.stockGUIService.buildStockInfoWithInterface(this.stockInterface, false)))
      console.log(this.dataSourceDOW)
      if (this.stockGUIDOW != undefined) {
        this.dataSourceDOW = this.stockGUIDOW.dataSource
        this.hasSubmitted = true;
      }
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  ngOnInit(): void {
    for (let i in this.symbols) {
      this.getData(i)
    }
    this.getSPYData()
    this.getDOWData()
  }

}

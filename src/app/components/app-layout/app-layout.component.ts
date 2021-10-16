import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../../web-request.service";
import {TaskService} from "../../task.service";
import {StockGuiServiceService} from "../stock-graphical-interface/stock-graphical-interface/stock-gui-service.service";
import {StockInterface} from "../../Interface/StockInterface";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

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
    this.getSPYData()
    setTimeout(() => this.getDOWData, 10000)
  }

  stockGUISPY!: StockGuiServiceService
  stockGUIDOW!: StockGuiServiceService
  hasSubmitted: boolean = false;
  stockInterface!: StockInterface
  dataSourceSPY = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];
  dataSourceDOW = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getSPYData = () => {
    this.taskService.getStock("SPY").subscribe((data) => {
      this.stockInterface = data
      this.stockGUISPY = JSON.parse(JSON.stringify(this.stockGUIService.buildStockInfoWithInterface(this.stockInterface)))
      if (this.stockGUISPY != undefined) {
        this.dataSourceSPY = this.stockGUISPY.dataSource
        this.hasSubmitted = true;
      }
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  getDOWData = () => {
    this.taskService.getStock("DJI").subscribe((data) => {
      this.stockInterface = data
      this.stockGUIDOW = JSON.parse(JSON.stringify(this.stockGUIService.buildStockInfoWithInterface(this.stockInterface)))
      console.log(this.dataSourceDOW)
      if (this.stockGUIDOW != undefined) {
        this.dataSourceDOW = this.stockGUIDOW.dataSource
        this.hasSubmitted = true;
      }
    });
    // Need to implement something for the case where the given stock symbol doesn't exist
  }

  ngOnInit(): void {
  }

}

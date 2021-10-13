import {Component, OnInit, ViewChild} from '@angular/core';
import {StockGraphicalInterfaceComponent} from "../stock-graphical-interface/stock-graphical-interface/stock-graphical-interface.component";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective, Color, Label} from "ng2-charts";
import {HttpClient} from "@angular/common/http";
import {WebRequestService} from "../../web-request.service";
import {TaskService} from "../../task.service";
import {StockInterface} from "../../Interface/StockInterface";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-morale',
  templateUrl: './morale.component.html',
  styleUrls: ['./morale.component.css']
})
export class MoraleComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  @ViewChild(BaseChartDirective) canvas!: BaseChartDirective;

  constructor(public http: HttpClient, private  apiService: WebRequestService, private taskService: TaskService) {
  }

  hasSubmitted: boolean = false;
  sym: (string | number | string[] | number[])[] | undefined
  stockInformationComponent!: StockGraphicalInterfaceComponent


  stockInterface!: StockInterface
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getStockData = (symbol: string) => {
    this.hasSubmitted = true;
    console.log("api/stock/" + symbol.toUpperCase())
    this.taskService.getStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = JSON.parse(JSON.stringify(data))
      let a = this.stockInformationComponent.buildStockInfoWithInterface(this.stockInterface)
      this.lineChartData = [{
        data: this.stockInterface?.stockCloseInfo === null ? [] : this.stockInterface?.stockCloseInfo,
        label: "Stock's close info"
      }]
      this.lineChartLabels = this.stockInterface.stockDateInfo
      console.log(this.stockInterface)
      this.sym = a
      return a
    });
  }

  ngOnInit(): void {
    this.stockInformationComponent = new StockGraphicalInterfaceComponent();
  }

  public lineChartData: ChartDataSets[] = [{
      data: this.stockInterface?.stockCloseInfo === null ? [] : this.stockInterface?.stockCloseInfo,
      label: "Stock's close info" }]

    lineChartLabels: Label[] = this.stockInterface?.stockDateInfo === null ? [] : this.stockInterface?.stockDateInfo;

  public lineChartOptions: (ChartOptions) = { responsive: true};
  public lineChartColors: Color[] = [{ borderColor: 'black', backgroundColor: '#80CBC4', borderWidth: 2 }];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType
  public lineChartPlugins = [];

}

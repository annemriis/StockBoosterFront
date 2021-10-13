import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebRequestService} from "../../web-request.service";
import {TaskService} from "../../task.service";
import {StockInterface} from "../../Interface/StockInterface";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label, BaseChartDirective} from "ng2-charts";
import {ChartType} from "chart.js";
import {StockGraphicalInterfaceComponent} from "../stock-graphical-interface/stock-graphical-interface/stock-graphical-interface.component";
import {MatTable} from "@angular/material/table";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  @ViewChild(BaseChartDirective) canvas!: BaseChartDirective;

  constructor(public http: HttpClient, private  apiService: WebRequestService, private taskService: TaskService) { }

  hasSubmitted: boolean = false;

  stockInterface!: StockInterface
  stockInformationComponent!: StockGraphicalInterfaceComponent
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];


  getStockData = (symbol: string) => {
    this.hasSubmitted = true;
    console.log("api/stock/" + symbol.toUpperCase())
    this.taskService.getStock(symbol.toUpperCase()).subscribe((data) => {
      this.stockInterface = data
      this.stockInformationComponent.buildStockInfoWithInterface(this.stockInterface)
      this.dataSource = this.stockInformationComponent.dataSource
      this.lineChartData = [{
        data: this.stockInterface?.stockCloseInfo === null ? [] : this.stockInterface?.stockCloseInfo,
        label: "Stock's close info" }]
      this.lineChartLabels = this.stockInterface.stockDateInfo
      this.canvas.ngOnChanges({});
      this.myTable.renderRows()
    });

    if (this.stockInterface === undefined) {
      // Need to implement that the stock doesn't exist
    }
  }

  ngOnInit(): void {
    this.stockInformationComponent = new StockGraphicalInterfaceComponent()
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

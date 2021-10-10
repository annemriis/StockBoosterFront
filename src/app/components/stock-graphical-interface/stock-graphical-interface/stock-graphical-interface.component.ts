import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions} from "chart.js";
import {ChartsModule, Color, Label} from "ng2-charts";
import { ChartType} from "chart.js";
import {StockInterface} from "../../../Interface/StockInterface";

@Component({
  selector: 'app-stock-graphical-interface',
  templateUrl: './stock-graphical-interface.component.html',
  styleUrls: ['./stock-graphical-interface.component.css']
})
export class StockGraphicalInterfaceComponent implements OnInit {

  constructor() {
  }

  symbol: string | null = null
  open: number | null = null
  close: number | null = null
  high: number | null = null
  volume: bigint | null = null
  lastDate: string | null = null
  stockDateInfo: string[] | null = null
  stockCloseInfo: number[] | null = null
  dataSource = [{"symbol":"GOOG","open":2798.12,"close":2801.12,"high":2806.34,"volume":946421,"lastDate":"2021-10-08"}];


  ngOnInit(): void {
  }

  public lineChartData: ChartDataSets[] = [
    { data: [2801.12,2783.71,2747.08,2723.54,2675.3,2729.25,2665.31,2690.42,2723.68,2830.02,2852.66,2836.53,
        2818.77,2792.93,2780.34,2829.27,2887.47,2904.12,2868.12,2869.3,2838.42,2898.27], label: 'Stock close price' }
    //{ data: this.stockCloseInfo === null ? [] : this.stockCloseInfo, label: this.symbol === null ? "" : this.symbol}
  ]

  lineChartLabels: Label[] = ["2021-10-08","2021-10-07","2021-10-06","2021-10-05","2021-10-04","2021-10-01","2021-09-30",
    "2021-09-29","2021-09-28","2021-09-27","2021-09-24","2021-09-23","2021-09-22","2021-09-21","2021-09-20",
    "2021-09-17","2021-09-16","2021-09-15","2021-09-14","2021-09-13","2021-09-10","2021-09-09"];
    //this.stockDateInfo === null ? [] : this.stockDateInfo;

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#80CBC4',
      borderWidth: 2,
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType
  public lineChartPlugins = [];


  buildStockInfoWithInterface(stockInterface: StockInterface | undefined) {
    this.setSymbol(stockInterface === undefined ? null : stockInterface.symbol)
    this.setOpen(stockInterface === undefined ? null : stockInterface.open)
    this.setClose(stockInterface === undefined ? null : stockInterface.close)
    this.setHigh(stockInterface === undefined ? null : stockInterface.high)
    this.setVolume(stockInterface === undefined ? null : stockInterface.volume)
    this.setLastDate(stockInterface === undefined ? null : stockInterface.lastDate)
    this.setStockCloseInfo(stockInterface === undefined ? null : stockInterface.stockCloseInfo)
    this.setStockDateInfo(stockInterface === undefined ? null : stockInterface.stockDateInfo)
    //this.dataSource = [{"symbol":"GOOG","open":2798.12,"close":2801.12,"high":2806.34,"volume":946421,"lastDate":"2021-10-08"}];
  }


  public setSymbol(symbol: null | string) {
    this.symbol = symbol
  }
  public setOpen(open: null | number) {
    this.open = open
  }
  public setClose(close: null | number) {
    this.close = close
  }
  public setHigh(high: null | number) {
    this.high = high
  }
  public setVolume(volume: null | bigint) {
    this.volume = volume
  }
  public setLastDate(lastDate: null | string) {
    this.lastDate = lastDate
  }
  public setStockDateInfo(stockDateInfo: null | string[]) {
    this.stockDateInfo = stockDateInfo
  }
  public setStockCloseInfo(stockCloseInfo: null | number[]) {
    this.stockCloseInfo = stockCloseInfo
  }

}

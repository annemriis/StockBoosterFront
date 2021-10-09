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


  ngOnInit(): void {
  }

  public lineChartData: ChartDataSets[] = [
    { data: this.stockCloseInfo === null ? [] : this.stockCloseInfo, label: this.symbol === null ? "" : this.symbol}
  ]

  lineChartLabels: Label[] = this.stockDateInfo === null ? [] : this.stockDateInfo;

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
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

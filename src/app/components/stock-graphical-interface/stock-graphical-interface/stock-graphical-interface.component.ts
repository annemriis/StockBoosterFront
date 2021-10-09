import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions} from "chart.js";
import {ChartsModule, Color, Label} from "ng2-charts";
import { ChartType} from "chart.js";

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


  public setSymbol(symbol: string) {
    this.symbol = symbol
  }
  public setOpen(open: number) {
    this.open = open
  }
  public setClose(close: number) {
    this.close = close
  }
  public setHigh(high: number) {
    this.high = high
  }
  public setVolume(volume: bigint) {
    this.volume = volume
  }
  public setLastDate(lastDate: string) {
    this.lastDate = lastDate
  }
  public setStockDateInfo(stockDateInfo: string[],) {
    this.stockDateInfo = stockDateInfo
  }
  public setStockCloseInfo(stockCloseInfo: number[]) {
    this.stockCloseInfo = stockCloseInfo
  }

}

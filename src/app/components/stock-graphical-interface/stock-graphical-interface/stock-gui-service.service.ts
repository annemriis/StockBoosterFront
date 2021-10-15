import {Injectable} from '@angular/core';
import {StockInterface} from "../../../Interface/StockInterface";

@Injectable({
  providedIn: 'root'
})

export class StockGuiServiceService {

  symbol: string
  open: number
  close: number
  high: number
  volume: number
  lastDate: string
  stockDateInfo: string[]
  stockCloseInfo: number[]
  dataSource = [{"symbol": "", "open": 0, "close": 0, "high": 0, "volume": 0, "lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}];
  lineChartData: [{data: number[], label: string}]
  lineChartLabels: string[]


  constructor() {
    this.symbol = ''
    this.open = 1
    this.close = 1
    this.high = 1
    this.volume = 1
    this.lastDate = ""
    this.stockDateInfo = []
    this.stockCloseInfo = []
    this.dataSource = []
    this.lineChartData = [{data: [0], label: "Stock's close info" }]
    this.lineChartLabels = []
  }

  buildStockInfoWithInterface(stockInterface: StockInterface) {
    this.setSymbol(stockInterface.symbol)
    this.setOpen(stockInterface.open)
    this.setClose(stockInterface.close)
    this.setHigh(stockInterface.high)
    this.setVolume(stockInterface.volume)
    this.setLastDate(stockInterface.lastDate)
    this.setStockCloseInfo(stockInterface.stockCloseInfo)
    this.setStockDateInfo(stockInterface.stockDateInfo)
    this.dataSource = [{
      "symbol": this.symbol ? this.symbol : "",
      "open": this.open ? this.open : 0,
      "close": this.close ? this.close : 0,
      "high": this.high ? this.high : 0,
      "volume": this.volume ? this.volume : 0,
      "lastDate": this.lastDate ? this.lastDate : "",
      "stockDateInfo": this.stockDateInfo ? this.stockDateInfo : [],
      "stockCloseInfo": this.stockCloseInfo ? this.stockCloseInfo : [],
    }];
    this.lineChartData = [{data: this.stockCloseInfo, label: "Stock's close info" }]
    this.lineChartLabels = this.stockDateInfo
    this.isBuilding();
    return this;
  }

  isBuilding() {
    return this;
  }

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

  public setVolume(volume: number) {
    this.volume = volume
  }

  public setLastDate(lastDate: string) {
    this.lastDate = lastDate
  }

  public setStockDateInfo(stockDateInfo: string[]) {
    this.stockDateInfo = stockDateInfo
  }

  public setStockCloseInfo(stockCloseInfo: number[]) {
    this.stockCloseInfo = stockCloseInfo
  }

}

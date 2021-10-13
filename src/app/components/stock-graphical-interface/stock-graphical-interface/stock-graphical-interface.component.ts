import {Component, OnInit} from '@angular/core';
import {StockInterface} from "../../../Interface/StockInterface";


@Component({
  selector: 'app-stock-graphical-interface',
  templateUrl: './stock-graphical-interface.component.html',
  styleUrls: ['./stock-graphical-interface.component.css']
})
export class StockGraphicalInterfaceComponent implements OnInit {

  constructor() { }

  symbol: string | null = null
  open: number | null = null
  close: number | null = null
  high: number | null = null
  volume: number | null = null
  lastDate: string | null = null
  stockDateInfo: string[] | null = null
  stockCloseInfo: number[] | null = null
  dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""], "stockCloseInfo": [0]}];

  ngOnInit(): void {

  }

  buildStockInfoWithInterface(stockInterface: StockInterface | undefined) {
    this.setSymbol(stockInterface === undefined ? null : stockInterface.symbol)
    this.setOpen(stockInterface === undefined ? null : stockInterface.open)
    this.setClose(stockInterface === undefined ? null : stockInterface.close)
    this.setHigh(stockInterface === undefined ? null : stockInterface.high)
    this.setVolume(stockInterface === undefined ? null : stockInterface.volume)
    this.setLastDate(stockInterface === undefined ? null : stockInterface.lastDate)
    this.setStockCloseInfo(stockInterface === undefined ? null : stockInterface.stockCloseInfo)
    this.setStockDateInfo(stockInterface === undefined ? null : stockInterface.stockDateInfo)
    this.dataSource = [{
      "symbol": this.symbol ? this.symbol: "",
      "open": this.open ? this.open: 0,
      "close": this.close ? this.close: 0,
      "high": this.high ? this.high: 0,
      "volume": this.volume ? this.volume: 0,
      "lastDate": this.lastDate ? this.lastDate: "",
      "stockDateInfo": this.stockDateInfo ? this.stockDateInfo: [],
      "stockCloseInfo": this.stockCloseInfo ? this.stockCloseInfo: [],
    }];
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
  public setVolume(volume: null | number) {
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

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {StockInterface} from "../../../Interface/StockInterface";


@Component({
  selector: 'app-stock-graphical-interface',
  templateUrl: './stock-graphical-interface.component.html',
  styleUrls: ['./stock-graphical-interface.component.css']
})
export class StockGraphicalInterfaceComponent implements OnInit, OnChanges {

  @Input() symbol: string
  @Input() open: number
  @Input() close: number
  @Input() high: number
  @Input() volume: number
  @Input() lastDate: string
  @Input() stockDateInfo: string[]
  @Input() stockCloseInfo: number[]
  @Input() dataSource = [{"symbol": "", "open": 0, "close": 0,"high": 0,"volume": 0,"lastDate": "", "stockDateInfo": [""], "stockCloseInfo": [0]}];


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
  }


  ngOnChanges(changes: SimpleChanges) {
     // here you will get the data from parent once the input param is change
    console.log(this.symbol)
  }

  ngOnInit(): void {

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
      "symbol": this.symbol ? this.symbol: "",
      "open": this.open ? this.open: 0,
      "close": this.close ? this.close: 0,
      "high": this.high ? this.high: 0,
      "volume": this.volume ? this.volume: 0,
      "lastDate": this.lastDate ? this.lastDate: "",
      "stockDateInfo": this.stockDateInfo ? this.stockDateInfo: [],
      "stockCloseInfo": this.stockCloseInfo ? this.stockCloseInfo: [],
    }];
    return [
      this.symbol,
      this.open,
      this.close,
      this.high,
      this.volume,
      this.lastDate,
      this.stockDateInfo,
      this.stockCloseInfo,
    ]
  }

  public setSymbol(symbol: string) {
    this.symbol = symbol
  }
  public setOpen(open:  number) {
    this.open = open
  }
  public setClose(close:  number) {
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

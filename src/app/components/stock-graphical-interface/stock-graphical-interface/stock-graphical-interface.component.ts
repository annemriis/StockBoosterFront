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
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import {StockGuiServiceService} from "./stock-gui-service.service";


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
  @Input() dataSource = [{
    "symbol": "",
    "open": 0,
    "close": 0,
    "high": 0,
    "volume": 0,
    "lastDate": "",
    "stockDateInfo": [""],
    "stockCloseInfo": [0]
  }];


  constructor(private changer: ChangeDetectorRef, private guiService: StockGuiServiceService) {
    this.symbol = ''
    this.open = 1
    this.close = 1
    this.high = 1
    this.volume = 1
    this.lastDate = ""
    this.stockDateInfo = []
    this.stockCloseInfo = []
    this.dataSource = []
    setInterval(() => {
      this.changer.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {

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

  ngOnChanges(changes: SimpleChanges): void {
  }

}

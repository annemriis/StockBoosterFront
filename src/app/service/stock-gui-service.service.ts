import {Injectable} from '@angular/core';
import {StockInterface} from "../Interface/StockInterface";

@Injectable({
  providedIn: 'root'
})

export class StockGuiServiceService {

  symbol: string; symbol2: string
  open: number; open2: number
  close: number; close2: number
  high: number; high2: number
  volume: number; volume2: number
  lastDate: string; lastDate2: string
  stockDateInfo: string[]; stockDateInfo2: string[]
  stockCloseInfo: number[]; stockCloseInfo2: number[]
  averagePriceMonthly: number
  averageVolumeMonthly: number
  dailyPercentageChange: number
  dailyPriceChange: number
  dataSource = [{"symbol": "", "open": 0, "close": 0, "high": 0, "volume": 0, "lastDate": "", "stockDateInfo": [""],
    "stockCloseInfo": [0]}]; dataSource2 = [{}]
  lineChartData: [{data: number[], label: string}]; lineChartData2: [{data: number[], label: string}]
  lineChartLabels: string[]; lineChartLabels2: string[]
  secondValue: boolean;
  gotResponse: boolean = true; gotResponse2: boolean = true;


  constructor() {
    this.symbol = ''; this.symbol2 = ''
    this.open = 1; this.open2 = 1
    this.close = 1; this.close2 = 1
    this.high = 1; this.high2 = 1
    this.volume = 1; this.volume2 = 1
    this.lastDate = ""; this.lastDate2 = ""
    this.stockDateInfo = []; this.stockDateInfo2 = []
    this.stockCloseInfo = []; this.stockCloseInfo2 = []
    this.dataSource = []; this.dataSource2 = []
    this.lineChartData = [{data: [0], label: "Stock's close info" }]; this.lineChartData2 = [{data: [0], label: "Stock's close info" }]
    this.lineChartLabels = []; this.lineChartLabels2 = []
    this.averagePriceMonthly = 0
    this.averageVolumeMonthly = 0
    this.dailyPercentageChange = 0
    this.dailyPriceChange = 0
    this.secondValue = false
  }

  buildStockInfoWithInterface(stockInterface: StockInterface, secondValue: boolean) {
    if (stockInterface.symbol != null) {
      if (!secondValue) {
        this.gotResponse = true;
      } else {
        this.gotResponse2 = true;
      }
      this.secondValue = secondValue;
      this.setSymbol(stockInterface.symbol)
      this.setOpen(stockInterface.open)
      this.setClose(stockInterface.close)
      this.setHigh(stockInterface.high)
      this.setVolume(stockInterface.volume)
      this.setLastDate(stockInterface.lastDate)
      this.setStockCloseInfo(stockInterface.stockCloseInfo)
      this.setStockDateInfo(stockInterface.stockDateInfo)
      this.setAveragePriceMonthly(stockInterface.averagePriceMonthly)
      this.setAverageVolumeMonthly(stockInterface.averageVolumeMonthly)
      this.setDailyPercentageChange(stockInterface.dailyPercentageChange)
      this.setDailyPriceChange(stockInterface.dailyPriceChange)
      this.setLineChartData(stockInterface.stockCloseInfo.reverse(), stockInterface.stockDateInfo.reverse())
      this.dataSource = [{"symbol": this.symbol ? this.symbol : "", "open": this.open ? this.open : 0,
        "close": this.close ? this.close : 0, "high": this.high ? this.high : 0, "volume": this.volume ? this.volume : 0,
        "lastDate": this.lastDate ? this.lastDate : "", "stockDateInfo": this.stockDateInfo ? this.stockDateInfo : [],
        "stockCloseInfo": this.stockCloseInfo ? this.stockCloseInfo : [],}];
      this.isBuilding();
    } else {
      if (!secondValue) {
        this.gotResponse = false;
      } else {
        this.gotResponse2 = false;
      }
      this.isBuilding()
    }
  }

  isBuilding() {
    return this;
  }

  public setSymbol(symbol: string) {
    if (this.secondValue) {
      this.symbol2 = symbol
    }
    else {
      this.symbol = symbol
    }
  }

  public setOpen(open: number) {
    if (this.secondValue) {
      this.open2 = open
    }
    else {
      this.open = open
    }
  }

  public setClose(close: number) {
    if (this.secondValue) {
      this.close2 = close
    }
    else {
      this.close = close
    }
  }

  public setHigh(high: number) {
    if (this.secondValue) {
      this.high2 = high
    }
    else {
      this.high = high
    }
  }

  public setVolume(volume: number) {
    if (this.secondValue) {
      this.volume2 = volume
    }
    else {
      this.volume = volume
    }
  }

  public setLastDate(lastDate: string) {
    if (this.secondValue) {
      this.lastDate2 = lastDate
    }
    else {
      this.lastDate = lastDate
    }
  }

  public setStockDateInfo(stockDateInfo: string[]) {
    if (this.secondValue) {
      this.stockDateInfo2 = stockDateInfo
    }
    else {
      this.stockDateInfo = stockDateInfo
    }
  }

  public setStockCloseInfo(closeInfo: number[]) {
    if (this.secondValue) {
      this.stockCloseInfo2 = closeInfo
    }
    else {
      this.stockCloseInfo = closeInfo
    }
  }

  public setLineChartData(chartData: number[], dateInfo: string[]) {
    if (this.secondValue) {
      this.lineChartData2 = [{data: chartData, label: "Stock's close info" }]
      this.lineChartLabels2 = dateInfo
    }
    else {
      this.lineChartData = [{data: chartData, label: "Stock's close info" }]
      this.lineChartLabels = dateInfo
    }
  }

  public setAveragePriceMonthly(averagePriceMonthly: number) {
    this.averagePriceMonthly = averagePriceMonthly
  }
  public setAverageVolumeMonthly(averageVolumeMonthly: number) {
    this.averageVolumeMonthly = averageVolumeMonthly
  }
  public setDailyPercentageChange(dailyPercentageChange: number) {
    this.dailyPercentageChange = dailyPercentageChange
  }
  public setDailyPriceChange(dailyPriceChange: number) {
    this.dailyPriceChange = dailyPriceChange
  }

}

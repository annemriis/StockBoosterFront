
export interface StockInterface {
  symbol: string,
  open: number,
  close: number,
  high: number,
  volume: number,
  lastDate: string,
  stockDateInfo: string[],
  stockCloseInfo: number[],
  averagePriceMonthly: number,
  averageVolumeMonthly: number,
  dailyPercentageChange: number,
  dailyPriceChange: number

}

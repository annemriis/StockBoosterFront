export interface StockInterface {
  symbol: string,
  open: number,
  close: number,
  high: number,
  volume: bigint,
  lastDate: string,
  stockDateInfo: string[],
  stockCloseInfo: number[]
}

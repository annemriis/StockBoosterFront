import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective, Color, Label} from "ng2-charts";
import {StockGuiServiceService} from "./stock-gui-service.service";


@Component({
  selector: 'app-stock-graphical-interface',
  templateUrl: './stock-graphical-interface.component.html',
  styleUrls: ['./stock-graphical-interface.component.css']
})
export class StockGraphicalInterfaceComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective) canvas!: BaseChartDirective
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
    this.lineChartData = [{
      data: this.guiService.stockCloseInfo === null ? [] : this.guiService.stockCloseInfo,
      label: "Stock's close info" }]
    this.lineChartLabels = this.guiService.stockDateInfo
    setInterval(() => {
      this.changer.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  public lineChartData: ChartDataSets[] = [{
    data: this.guiService.stockCloseInfo === null ? [] : this.guiService.stockCloseInfo,
    label: "Stock's close info" }]

  lineChartLabels: Label[] = this.guiService.stockDateInfo === null ? [] : this.guiService.stockDateInfo;

  public lineChartOptions: (ChartOptions) = { responsive: true};
  public lineChartColors: Color[] = [{ borderColor: 'black', backgroundColor: '#80CBC4', borderWidth: 2 }];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType
  public lineChartPlugins = [];

}

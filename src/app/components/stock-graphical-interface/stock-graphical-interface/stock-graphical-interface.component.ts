import { Component, OnInit } from '@angular/core';
import {StockInterface} from "../../../Interface/StockInterface";
import {ChartDataset, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";

@Component({
  selector: 'app-stock-graphical-interface',
  templateUrl: './stock-graphical-interface.component.html',
  styleUrls: ['./stock-graphical-interface.component.css']
})
export class StockGraphicalInterfaceComponent implements OnInit {

  constructor(public stockInterface: StockInterface) { }

  ngOnInit(): void {
  }

  public lineChartData: ChartDataset[] = [
    { data: this.stockInterface.stockCloseInfo, label: this.stockInterface.symbol}
  ]

  lineChartLabels: Label[] = this.stockInterface.stockDateInfo;

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
  public lineChartType = 'line';
  public lineChartPlugins = [];



}

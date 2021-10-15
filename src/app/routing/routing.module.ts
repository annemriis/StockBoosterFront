import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from '../components/app-layout/app-layout.component';
import {StockComponent} from "../components/stock/stock.component";
import {MoraleComponent} from "../components/morale/morale.component";
import {AboutUsComponent} from "../components/about-us/about-us.component";
import {CompareStockComponent} from "../components/compare-stock/compare-stock.component";

const routes: Routes = [
  { path: '', redirectTo: '/app-layout', pathMatch: 'full' },
  { path: 'app-layout', component: AppLayoutComponent},
  { path: 'morale', component: MoraleComponent},
  { path: 'stock', component: StockComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'compare-stock', component: CompareStockComponent},

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

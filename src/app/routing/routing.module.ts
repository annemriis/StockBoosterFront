import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from '../components/app-layout/app-layout.component';
import {StockComponent} from "../components/stock/stock.component";
import {MoraleComponent} from "../components/morale/morale.component";

const routes: Routes = [
  { path: '', redirectTo: '/app-layout', pathMatch: 'full' },
  { path: 'app-layout', component: AppLayoutComponent},
  { path: 'morale', component: MoraleComponent},
  { path: 'stock', component: StockComponent},

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

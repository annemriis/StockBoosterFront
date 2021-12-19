import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from '../components/app-layout/app-layout.component';
import {StockComponent} from "../components/stock/stock.component";
import {MoraleComponent} from "../components/morale/morale.component";
import {AboutUsComponent} from "../components/about-us/about-us.component";
import {CompareStockComponent} from "../components/compare-stock/compare-stock.component";
import {LoginComponent} from "../components/login/login.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {AuthGuard} from "../helpers/auth.guard";
import {RegisterComponent} from "../components/register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/app-layout', pathMatch: 'full' },
  { path: 'app-layout', component: AppLayoutComponent},
  { path: 'morale', component: MoraleComponent, canActivate: [AuthGuard]},
  { path: 'stock', component: StockComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'compare-stock', component: CompareStockComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}, // add canActivate: [AuthGuard] for pages that need to be private
  { path: 'register', component: RegisterComponent}
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

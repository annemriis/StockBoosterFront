import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from '../components/app-layout/app-layout.component';
const routes: Routes = [
  { path: 'app-layout', component: AppLayoutComponent},

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

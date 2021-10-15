import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from './components/navigation/header/header.component';
import { RoutingModule } from './routing/routing.module';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import { StockComponent } from './components/stock/stock.component';
import { MoraleComponent } from './components/morale/morale.component';
import { HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './components/about-us/about-us.component';
import {FooterComponent} from "./components/footer/footer.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { ChartsModule } from 'ng2-charts';
import { StockGraphicalInterfaceComponent } from './components/stock-graphical-interface/stock-graphical-interface/stock-graphical-interface.component';




@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    StockComponent,
    MoraleComponent,
    AboutUsComponent,
    StockGraphicalInterfaceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    RoutingModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

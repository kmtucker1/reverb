import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component'; 

import { AppComponent } from './app.component';
import { CardRowOneComponent } from './card-row-one/card.row.one.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';
import { RecentViewRowComponent } from './recent-view-row/recent-view-row.component';
import { SaleBannerComponent } from './salebanner/salebanner.component';
import { AppRoutingModule } from './app-routing.module';
import { SellYourGearLayoutComponent } from './sell-your-gear-layout/sell-your-gear-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    SaleBannerComponent,
    CardRowOneComponent,
    RecentViewRowComponent,
    SellYourGearLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

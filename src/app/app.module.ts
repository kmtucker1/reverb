import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component'; 

import { AppComponent } from './app.component';
import { CardRowOneComponent } from './card-row-one/card.row.one.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';
import { RecentViewRowComponent } from './recent-view-row/recent-view-row.component';
import { SaleBannerComponent } from './salebanner/salebanner.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    SaleBannerComponent,
    CardRowOneComponent,
    RecentViewRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

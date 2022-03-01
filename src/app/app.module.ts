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
import { WatchListLayoutComponent } from './watch-list-layout/watch-list-layout.component';
import { MyFeedLayoutComponent } from './my-feed-layout/my-feed-layout.component';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';
import { HorizontalItemCardComponent } from './hotizontal-item-card/horizontal-item-card.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SellInfoCardComponent } from './sell-info-card/sell-info-card.component';
import { LearnMoreSellingComponent } from './learn-more-selling/learn-more-selling.component';
import { WatchListNavbarComponent } from './watch-list-navbar/watch-list-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    SaleBannerComponent,
    CardRowOneComponent,
    RecentViewRowComponent,
    SellYourGearLayoutComponent,
    HomeLayoutComponent,
    WatchListLayoutComponent,
    MyFeedLayoutComponent,
    CartLayoutComponent,
    HorizontalItemCardComponent,
    FooterComponent,
    SearchbarComponent,
    SellInfoCardComponent,
    LearnMoreSellingComponent,
    WatchListNavbarComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

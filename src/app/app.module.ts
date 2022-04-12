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
import {HttpClientModule} from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

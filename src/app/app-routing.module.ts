import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellYourGearLayoutComponent } from './sell-your-gear-layout/sell-your-gear-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { WatchListLayoutComponent } from './watch-list-layout/watch-list-layout.component';
import { MyFeedLayoutComponent } from './my-feed-layout/my-feed-layout.component';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


const routes:Routes = [
  {path: '' , component: HomeLayoutComponent},
  {path: 'sell-your-gear', component: SellYourGearLayoutComponent},
  {path: 'home' , component: HomeLayoutComponent},
  {path: 'watch-list', component: WatchListLayoutComponent},
  {path: 'my-feed', component: MyFeedLayoutComponent},
  {path: 'cart', component: CartLayoutComponent},
  {path: 'admin', component: AddProductComponent},
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

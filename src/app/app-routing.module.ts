import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellYourGearLayoutComponent } from './sell-your-gear-layout/sell-your-gear-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

const routes:Routes = [
  {path: '' , component: HomeLayoutComponent},
  {path: 'sell-your-gear', component: SellYourGearLayoutComponent},
  {path: 'home' , component: HomeLayoutComponent}
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

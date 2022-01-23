import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component'; 

import { AppComponent } from './app.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

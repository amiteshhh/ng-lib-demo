import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material'
import {DealModule} from 'nglibdeal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    DealModule.forRoot('DEV')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

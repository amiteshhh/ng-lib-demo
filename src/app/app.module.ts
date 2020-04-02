import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { DealModule } from 'nglibdeal';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// random commit in test 1 branch
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    var libConfigs = [DealModule.configEnv];//keep adding other modules
    libConfigs.forEach(libConfig => libConfig(environment.envCode))
  }
}

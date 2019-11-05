import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './app.bootstratp.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

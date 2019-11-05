import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './app.bootstratp.module';
import { AppHeaderModule } from 'src/modules/header.module';
import { AppListModule } from 'src/modules/list.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppHeaderModule,
    AppListModule,
    HttpClient
  ],
  exports: [
    AppHeaderModule,
    AppListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

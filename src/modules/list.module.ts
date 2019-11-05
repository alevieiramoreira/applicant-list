import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppList } from './list/components/list.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppList
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  exports: [
    AppList
  ],

  providers: [HttpClient]
})
export class AppListModule { }

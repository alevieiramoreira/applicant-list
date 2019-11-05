import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHeader } from './header/components/app.header';

@NgModule({
  declarations: [
    AppHeader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppHeader]
})
export class AppModule { }

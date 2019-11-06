import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list/components/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ListComponent
  ],

  providers: []
})
export class AppListModule { }

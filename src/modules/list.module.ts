import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { ListComponent } from './list/components/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  exports: [
    ListComponent
  ],

  providers: [HttpClientModule ]
})
export class AppListModule { }

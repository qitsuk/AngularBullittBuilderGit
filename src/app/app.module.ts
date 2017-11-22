import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1.component';
import { NotFoundComponent } from './notfound.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './notfound.component';
import { FrameComponent } from './frame.component';
import { ColorComponent } from './color.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, NotFoundComponent,
    FrameComponent, ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

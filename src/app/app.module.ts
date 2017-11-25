import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import * as $ from 'jquery';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './notfound.component';
import { FrameComponent } from './frame.component';
import { ColorComponent } from './color.component';
import { DrivetrainComponent } from './drivetrain.component';
import { CustomizeComponent } from './customize.component';
import { AccessoriesComponent } from './accessories.component';
import { ExtrasComponent } from './extras.component';
import { OverviewComponent } from './overview.component';

import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: 'AIzaSyD0CisY1liXgHsO8flQ9kH6yx9txRZjnBI',
  authDomain: 'bike-builder-db.firebaseapp.com',
  databaseURL: 'https://bike-builder-db.firebaseio.com',
  projectId: 'bike-builder-db',
  storageBucket: '',
  messagingSenderId: '1084521827089'

};

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, NotFoundComponent,
    FrameComponent, ColorComponent, DrivetrainComponent,
    CustomizeComponent, AccessoriesComponent, ExtrasComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    ReactiveFormsModule, routing, NgxCarouselModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import * as $ from 'jquery';
import { DropdownModule } from 'ngx-dropdown';
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
import { OrderFormComponent } from './order-form.component';
import { CountriesService } from './countries.service';
import { DoneComponent } from './done.component';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { BikeComponent } from './bike.component';

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
    OverviewComponent, OrderFormComponent, BikeComponent,
    DoneComponent, OrderConfirmationComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    routing, NgxCarouselModule, ReactiveFormsModule,
    DropdownModule
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [CountriesService, BikeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './notfound.component';

export const routing = RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: '**', component: NotFoundComponent }
]);

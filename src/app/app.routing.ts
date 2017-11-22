import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';
import { NotFoundComponent } from './notfound.component';

export const routing = RouterModule.forRoot([
    { path: 'Page1', component: Page1Component },
    { path: '**', component: NotFoundComponent }
]);

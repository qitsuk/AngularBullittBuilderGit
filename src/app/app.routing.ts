import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './notfound.component';
import { FrameComponent } from './frame.component';

export const routing = RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'frame', component: FrameComponent },
    { path: '**', component: NotFoundComponent }
]);

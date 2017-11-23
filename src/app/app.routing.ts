import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './notfound.component';
import { FrameComponent } from './frame.component';
import { ColorComponent } from './color.component';

export const routing = RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'frame', component: FrameComponent },
    { path: 'color', component: ColorComponent},
    { path: '**', component: NotFoundComponent }
]);

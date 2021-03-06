import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { DoneComponent } from './done.component';
import { OrderConfirmationComponent } from './order-confirmation.component';

export const routing = RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'frame', component: FrameComponent },
    { path: 'color', component: ColorComponent},
    { path: 'drivetrain', component: DrivetrainComponent },
    { path: 'customize', component: CustomizeComponent},
    { path: 'accessories', component: AccessoriesComponent },
    { path: 'extras', component: ExtrasComponent},
    { path: 'overview', component: OverviewComponent},
    { path: 'orderform', component: OrderFormComponent },
    { path: 'orderconfirmation', component: OrderConfirmationComponent},
    { path: 'done', component: DoneComponent},
    { path: '**', component: NotFoundComponent }
]);

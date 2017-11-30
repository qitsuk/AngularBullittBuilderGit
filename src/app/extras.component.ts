import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike.component';

@Component({
    selector: 'app-extras-component',
    templateUrl: 'extras.component.html',
    styleUrls: ['extras.component.css']
})

export class ExtrasComponent {
    form: FormGroup;
    bike;
    dynamo: boolean;
    reelights: boolean;
    kickstand: boolean;
    granite1: boolean;
    granite2: boolean;
    ivy: boolean;
    bordo: boolean;


    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
    }
    submit() {
        if (this.dynamo) {
            this.bike.extras.push('DYNAMO 20\" FRONT WHEEL (ALFINE/ALEX DM24)');
            this._ac.totalPrice += 166;
        }
        if (this.reelights) {
            this.bike.extras.push('REELIGHTS');
            this._ac.totalPrice += 76;
        }
        if (this.kickstand) {
            this.bike.extras.push('CROMO KICKSTAND');
            this._ac.totalPrice += 102;
        }
        if (this.granite1) {
            this.bike.extras.push('ABUS 5400 GRANITE U-LOCK');
            this._ac.totalPrice += 145;
        }
        if (this.granite2) {
            this.bike.extras.push('ABUS BORDO 6500 GRANIT X PLUS');
            this._ac.totalPrice += 131;
        }
        if (this.ivy) {
            this.bike.extras.push('ABUS 9100 IVY CHAIN LOCK');
            this._ac.totalPrice += 131;
        }
        if (this.bordo) {
            this.bike.extras.push('ABUS BORDO + DETECTO 8077 ALARM');
            this._ac.totalPrice += 319;
        }
        this._router.navigate(['overview']);
        this._ac.updateProgressBar(70);
    }
    back() {
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(50);
    }

}

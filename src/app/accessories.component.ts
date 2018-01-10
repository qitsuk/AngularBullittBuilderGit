import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGroup } from '@angular/forms/src/model';
import { BikeComponent } from './bike.component';

@Component({
    selector: 'app-accessories-component',
    templateUrl: 'accessories.component.html',
    styleUrls: ['accessories.component.css']
})

export class AccessoriesComponent {
    form: FormGroup;
    bike;
    price;
    bbx = null;
    bbxPrice;
    billboard = null;
    bbPrice;
    idx;
    bbxPrevPrice = 0;
    billboardPrevPrice = 0;

    canopy: boolean;
    damper: boolean;
    honeycomb: boolean;
    convoy: boolean;
    aluminum: boolean;
    plastic: boolean;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
    }
    submit() {
        this._router.navigate(['extras']);
        this._ac.updateProgressBar(60);
        if (this.canopy) {
            this.bike.accessories.push('Canopy');
        }
        if (this.damper) {
            this.bike.accessories.push('Damper Kit');
        }
        if (this.honeycomb) {
            this.bike.accessories.push('Honeycomb Board');
        }
        if (this.convoy) {
            this.bike.accessories.push('Convoy Box');
        }
        if (this.aluminum) {
            this.bike.accessories.push('Aluminum Box');
        }
        if (this.plastic) {
            this.bike.accessories.push('Plastic Box');
        }
    }
    back() {
        this._router.navigate(['customize']);
        this._ac.updateProgressBar(40);
    }

    canopychanged() {
        if (!this.canopy) {
            this._ac.totalPrice -= 449;
        } else {
            this._ac.totalPrice += 449;
        }
    }
    damperchanged() {
        if (!this.damper) {
            this._ac.totalPrice -= 120;
        } else {
            this._ac.totalPrice += 120;
        }
    }
    honeycombchanged() {
        if (!this.honeycomb) {
            this._ac.totalPrice -= 188;
        } else {
            this._ac.totalPrice += 188;
        }
    }
    convoychanged() {
        if (!this.convoy) {
            this._ac.totalPrice -= 833;
        } else {
            this._ac.totalPrice += 833;
        }
    }
    aluminumchanged() {
        if (!this.aluminum) {
            this._ac.totalPrice -= 341;
        } else {
            this._ac.totalPrice += 341;
        }
    }
    plasticchanged() {
        if (!this.plastic) {
            this._ac.totalPrice -= 43;
        } else {
            this._ac.totalPrice += 43;
        }
    }

    onBBXChange(bbx) {
        this._ac.totalPrice -= this.bbxPrevPrice;
        this.bbxPrevPrice = 354;
        this._ac.totalPrice += 354;
        this.bike.bbx = bbx;
    }

    onBBChange(bb) {
        this._ac.totalPrice -= this.billboardPrevPrice;
        this.billboardPrevPrice = 69;
        this._ac.totalPrice += 69;
        this.bike.bb = bb;
    }

}

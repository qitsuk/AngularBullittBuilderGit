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
    bbx;
    bbxPrice;
    billboard;
    bbPrice;
    idx;

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
            this._ac.totalPrice += 449;
        }
        if (this.damper) {
            this.bike.accessories.push('Damper Kit');
            this._ac.totalPrice += 120;
        }
        if (this.honeycomb) {
            this.bike.accessories.push('Honeycomb Board');
            this._ac.totalPrice += 188;
        }
        if (this.convoy) {
            this.bike.accessories.push('Convoy Box');
            this._ac.totalPrice += 833;
        }
        if (this.aluminum) {
            this.bike.accessories.push('Aluminum Box');
            this._ac.totalPrice += 341;
        }
        if (this.plastic) {
            this.bike.accessories.push('Plastic Box');
            this._ac.totalPrice += 43;
        }
        this.bike.accessories.push('BBX Side Panel Kit: ' + this.bbx);
        this._ac.totalPrice += this.bbxPrice;
        this.bike.accessories.push('Billboard' + this.billboard);
    }
    back() {
        this._router.navigate(['customize']);
        this._ac.updateProgressBar(40);
    }

    onBBXChange(bbx) {
        this.bbx = bbx;
        this.bbxPrice = 354;
    }

    onBBChange(bb) {
        this.billboard = bb;
        this.bbPrice = 69;
    }

}

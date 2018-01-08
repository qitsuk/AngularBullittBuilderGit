import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike.component';

@Component ({
    selector: 'app-customize-component',
    templateUrl: 'customize.component.html',
    styleUrls: ['customize.component.css']
})

export class CustomizeComponent {
    form: FormGroup;
    bike;
    price;
    riserbar: boolean;
    flatbar: boolean;
    cruiser: boolean;
    short: boolean;
    long: boolean;
    thomson: boolean;
    raceblack: boolean;
    racewhite: boolean;
    b17brown: boolean;
    b17black: boolean;
    b67brown: boolean;
    b67black: boolean;




    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
    }
    riserbarchanged() {
        if (!this.riserbar) {
            this._ac.totalPrice -= 26;
        } else {
            this._ac.totalPrice += 26;
        }
    }
    flatbarchanged() {
        if (!this.flatbar) {
            this._ac.totalPrice -= 26;
        } else {
            this._ac.totalPrice += 26;
        }
    }
    cruiserchanged() {
        if (!this.cruiser) {
            this._ac.totalPrice -= 26;
        } else {
            this._ac.totalPrice += 26;
        }
    }
    shortchanged() {
        if (!this.short) {
            this._ac.totalPrice -= 42;
        } else {
            this._ac.totalPrice += 42;
        }
    }
    longchanged() {
        if (!this.long) {
            this._ac.totalPrice -= 42;
        } else {
            this._ac.totalPrice += 42;
        }
    }
    thomsonchanged() {
        if (!this.thomson) {
            this._ac.totalPrice -= 75;
        } else {
            this._ac.totalPrice += 75;
        }
    }
    raceblackchanged() {
        if (!this.raceblack) {
            this._ac.totalPrice -= 54;
        } else {
            this._ac.totalPrice += 54;
        }
    }
    racewhitechanged() {
        if (!this.racewhite) {
            this._ac.totalPrice -= 54;
        } else {
            this._ac.totalPrice += 54;
        }
    }
    b17brownchanged() {
        if (!this.b17brown) {
            this._ac.totalPrice -= 114;
        } else {
            this._ac.totalPrice += 114;
        }
    }
    b17blackchanged() {
        if (!this.b17black) {
            this._ac.totalPrice -= 114;
        } else {
            this._ac.totalPrice += 114;
        }
    }
    b67brownchanged() {
        if (this.b67brown) {
            this._ac.totalPrice -= 125;
        } else {
            this._ac.totalPrice += 125;
        }
    }
    b67blackchanged() {
        if (!this.b67black) {
            this._ac.totalPrice -= 125;
        } else {
            this._ac.totalPrice += 125;
        }
    }
    submit() {
        if (this.riserbar) {
            this.bike.customize.push('Riserbar Handlebars');
        }
        if (this.flatbar) {
            this.bike.customize.push('Flatbar Handlebars');
        }
        if (this.cruiser) {
            this.bike.customize.push('Cruiser Handlebars');
        }
        if (this.short) {
            this.bike.customize.push('Short Seatpost');
        }
        if (this.long) {
            this.bike.customize.push('Long Seatpost');
        }
        if (this.thomson) {
            this.bike.customize.push('Thomson Elite Seatpost');
        }
        if (this.raceblack) {
            this.bike.customize.push('Race Black Saddle');
        }
        if (this.racewhite) {
            this.bike.customize.push('Race White Saddle');
        }
        if (this.b17brown) {
            this.bike.customize.push('Brooks B17, Brown Saddle');
        }
        if (this.b17black) {
            this.bike.customize.push('Brooks B17, Black Saddle');
        }
        if (this.b67brown) {
            this.bike.customize.push('Brooks B67, Brown Saddle');
        }
        if (this.b67black) {
            this.bike.customize.push('Brooks B67, Black Saddle');
        }
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(50);
    }
    back() {
        this._router.navigate(['drivetrain']);
        this._ac.updateProgressBar(30);
    }

}

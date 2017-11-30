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
    submit() {
        if (this.riserbar) {
            this.bike.customize.push('Riserbar Handlebars');
            this._ac.totalPrice += 26;
        }
        if (this.flatbar) {
            this.bike.customize.push('Flatbar Handlebars');
            this._ac.totalPrice += 26;
        }
        if (this.cruiser) {
            this.bike.customize.push('Cruiser Handlebars');
            this._ac.totalPrice += 26;
        }
        if (this.short) {
            this.bike.customize.push('Short Seatpost');
            this._ac.totalPrice += 42;
        }
        if (this.long) {
            this.bike.customize.push('Long Seatpost');
            this._ac.totalPrice += 42;
        }
        if (this.thomson) {
            this.bike.customize.push('Thomson Elite Seatpost');
            this._ac.totalPrice += 75;
        }
        if (this.raceblack) {
            this.bike.customize.push('Race Black Saddle');
            this._ac.totalPrice += 54;
        }
        if (this.racewhite) {
            this.bike.customize.push('Race White Saddle');
            this._ac.totalPrice += 54;
        }
        if (this.b17brown) {
            this.bike.customize.push('Brooks B17, Brown Saddle');
            this._ac.totalPrice += 114;
        }
        if (this.b17black) {
            this.bike.customize.push('Brooks B17, Black Saddle');
            this._ac.totalPrice += 114;
        }
        if (this.b67brown) {
            this.bike.customize.push('Brooks B67, Brown Saddle');
            this._ac.totalPrice += 125;
        }
        if (this.b67black) {
            this.bike.customize.push('Brooks B67, Black Saddle');
            this._ac.totalPrice += 125;
        }
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(50);
    }
    back() {
        this._router.navigate(['drivetrain']);
        this._ac.updateProgressBar(30);
    }

}

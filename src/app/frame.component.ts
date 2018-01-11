import { Component, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike.component';

@Component ({
    selector: 'app-frame-component',
    templateUrl: 'frame.component.html',
    styleUrls: ['frame.component.css']
})

export class FrameComponent {
    changed  = false;
    form: FormGroup;
    frame: string;
    price: number;
    bike;
    idx;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
    }

    submit() {
        if (this.changed) {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
        } else {
            alert('You must choose a frame before you can continue.');
        }
    }
    back() {
        this._router.navigate(['']);
        this._ac.updateProgressBar(0);
    }

    onSelectionChange(entry, price) {
        this.changed = true;
        this.bike.frame.type = entry;
        this.bike.frame.price = price;
        this._ac.totalPrice = this.bike.getTotalPrice();
    }
}

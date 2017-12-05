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
    form: FormGroup;
    frame: string;
    price: number;
    bike;
    idx;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({
            framekit: ['', Validators.required]
        });
        this.bike = bike;
    }

    submit() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
        this.bike.frame = this.frame;
        this._ac.totalPrice += this.price;
    }
    back() {
        this._router.navigate(['']);
        this._ac.updateProgressBar(0);
    }

    onSelectionChange(entry, price) {
        this.frame = entry;
        this.price = price;
    }
}

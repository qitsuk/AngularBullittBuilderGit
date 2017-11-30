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
    customize;
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
        console.log(this.bike.totalPrice);
    }
    submit() {
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(50);
    }
    back() {
        this._router.navigate(['drivetrain']);
        this._ac.updateProgressBar(30);
    }

}

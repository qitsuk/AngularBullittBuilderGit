import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike.component';

@Component({
    selector: 'app-drivetrain-component',
    templateUrl: 'drivetrain.component.html',
    styleUrls: ['drivetrain.component.css']
})

export class DrivetrainComponent {
    form: FormGroup;
    bike;
    drivetrain;
    price;
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
        console.log(this.bike.totalPrice);
    }
    submit() {
        this._router.navigate(['customize']);
        this._ac.updateProgressBar(40);
        this.bike.totalPrice += this.price;
        this._ac.totalPrice += this.price;
    }
    back() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
    }
    onSelectionChange(drivetrain, price) {
        this.drivetrain = drivetrain;
        this.price = price;
        console.log(price);
    }
}

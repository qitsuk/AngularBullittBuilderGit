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
    idx;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
        console.log(this.bike.totalPrice);
        console.log(this.bike.toString());
    }
    submit() {
        this._router.navigate(['customize']);
        this._ac.updateProgressBar(40);
    }
    back() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
    }
    onSelectionChange(drivetrain, price) {
        this.bike.drivetrain = drivetrain;
        this._ac.totalPrice += price;
        this.bike.totalPrice += this.price;
        this.bike.drivetrainPrice = this.price;
        console.log(price);
    }
}

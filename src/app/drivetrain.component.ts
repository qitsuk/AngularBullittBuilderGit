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
    changed = false;
    form: FormGroup;
    bike;
    idx;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
        console.log(this.bike.totalPrice);
        console.log(this.bike.toString());
    }
    submit() {
        if (this.changed) {
            this._router.navigate(['customize']);
            this._ac.updateProgressBar(40);
        } else {
            alert('You must choose a drivetrain for you bike.');
        }
    }
    back() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
    }
    onSelectionChange(drivetrain, price) {
        this.changed = true;
        this.bike.drivetrain.type = drivetrain;
        this.bike.drivetrain.price = price;
        this._ac.totalPrice = this.bike.getTotalPrice();
    }
}

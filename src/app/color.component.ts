import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BikeComponent } from './bike.component';

@Component({
    selector: 'app-color-component',
    templateUrl: 'color.component.html',
    styleUrls: ['color.component.css']
})

export class ColorComponent {
    form: FormGroup;
    bike;
    color;
    idx;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
    }
    submit() {
        this._router.navigate(['drivetrain']);
        this._ac.updateProgressBar(30);
        this.bike.color = this.color;
    }
    back() {
        this._router.navigate(['frame']);
        this._ac.updateProgressBar(10);
        this._ac.totalPrice = this._ac.totalPrice;
    }
    onSelectionChange(selection) {
        this.color = selection;
    }
}

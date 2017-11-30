import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-order-confirmation-component',
    templateUrl: 'order-confirmation.component.html',
    styleUrls: ['order-confirmation.component.css']
})

export class OrderConfirmationComponent {
    form: FormGroup;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['done']);
        this._ac.updateProgressBar(100);
    }
    back() {
        this._router.navigate(['orderform']);
        this._ac.updateProgressBar(80);
    }

}
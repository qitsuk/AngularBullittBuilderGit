import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-order-form-component',
    templateUrl: 'order-form.component.html',
    styleUrls: ['order-form.component.css']
})

export class OrderFormComponent {
    form: FormGroup;
    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent) {
        this.form = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            name: ['', Validators.required],
            address1: ['', Validators.required],
            address2: ['', Validators.required],
            city: ['', Validators.required],
            postalCode: ['', Validators.required]
        });
    }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component ({
    selector: 'app-customize-component',
    templateUrl: 'customize.component.html',
    styleUrls: ['customize.component.css']
})

export class CustomizeComponent {
    form: FormGroup;
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({});
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

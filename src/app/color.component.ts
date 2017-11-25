import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-color-component',
    templateUrl: 'color.component.html',
    styleUrls: ['color.component.css']
})

export class ColorComponent {
    form: FormGroup;

    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['drivetrain']);
        this._ac.updateProgressBar(30);
    }
    back() {
        this._router.navigate(['frame']);
        this._ac.updateProgressBar(10);
    }
}

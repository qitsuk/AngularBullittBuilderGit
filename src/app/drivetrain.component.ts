import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-drivetrain-component',
    templateUrl: 'drivetrain.component.html',
    styleUrls: ['drivetrain.component.css']
})

export class DrivetrainComponent {
    form: FormGroup;
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(40);
    }
    back() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
    }
}

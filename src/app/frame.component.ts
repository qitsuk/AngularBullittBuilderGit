import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Bike } from './bike';

@Component ({
    selector: 'app-frame-component',
    templateUrl: 'frame.component.html',
    styleUrls: ['frame.component.css']
})

export class FrameComponent {
    form: FormGroup;
    bike = new Bike();
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({
            framekit: ['', Validators.required]
        });
    }

    submit() {
        this._router.navigate(['color']);
        this._ac.updateProgressBar(20);
    }
    back() {
        this._router.navigate(['']);
        this._ac.updateProgressBar(0);
    }
}

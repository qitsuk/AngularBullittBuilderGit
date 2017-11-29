import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-extras-component',
    templateUrl: 'extras.component.html',
    styleUrls: ['extras.component.css']
})

export class ExtrasComponent {
    form: FormGroup;

    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['overview']);
        this._ac.updateProgressBar(70);
    }
    back() {
        this._router.navigate(['accessories']);
        this._ac.updateProgressBar(50);
    }

}

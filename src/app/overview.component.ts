import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-overview-component',
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class OverviewComponent {
    form; FormGroup;
    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['orderform']);
        this._ac.updateProgressBar(80);
    }
    back() {
        this._router.navigate(['extras']);
        this._ac.updateProgressBar(60);
    }
}

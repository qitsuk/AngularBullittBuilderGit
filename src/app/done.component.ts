import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';


@Component({
    selector: 'app-done-component',
    templateUrl: 'done.component.html',
    styleUrls: ['done.component.css']
})

export class DoneComponent {
    form: FormGroup;
    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent) {
        this.form = fb.group({});
    }
    back() {
        this._router.navigate(['orderconfirmation']);
        this._ac.updateProgressBar(90);
    }
}

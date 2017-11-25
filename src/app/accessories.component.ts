import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGroup } from '@angular/forms/src/model';

@Component({
    selector: 'app-accessories-component',
    templateUrl: 'accessories.component.html',
    styleUrls: ['accessories.component.css']
})

export class AccessoriesComponent {
    form: FormGroup;
    constructor(private _router: Router, private _ac: AppComponent, fb: FormBuilder) {
        this.form = fb.group({});
    }
    submit() {
        this._router.navigate(['extras']);
        this._ac.updateProgressBar(60);
    }
    back() {
        this._router.navigate(['customize']);
        this._ac.updateProgressBar(40);
    }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeComponent } from './bike.component';

@Component({
    selector: 'app-overview-component',
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class OverviewComponent {
    form; FormGroup;
    bike;
    overviewString;
    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent, bike: BikeComponent) {
        this.form = fb.group({});
        this.bike = bike;
        this.overviewString = this.bike.toString();
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

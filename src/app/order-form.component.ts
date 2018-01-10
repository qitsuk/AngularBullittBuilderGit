import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-order-form-component',
    templateUrl: 'order-form.component.html',
    styleUrls: ['order-form.component.css'],
    providers: [CountriesService]
})

export class OrderFormComponent implements OnInit {
    form: FormGroup;
    countries;
    country = 'Country';
    createUser: boolean;
    constructor(fb: FormBuilder, private _router: Router, private _ac: AppComponent, private _countriesService: CountriesService) {
        this.form = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            fullName: ['', Validators.required],
            address1: ['', Validators.required],
            address2: ['', Validators.required],
            city: ['', Validators.required],
            postalCode: ['', Validators.required]
        });
    }
    submit() {
        this._router.navigate(['orderconfirmation']);
        this._ac.updateProgressBar(90);
        alert('A payment link has been sent to the entered email address.\nPlease check your email for futher details.');
    }

    back() {
        this._router.navigate(['overview']);
        this._ac.updateProgressBar(70);
    }

    ngOnInit() {
        this.countries = this._countriesService.getCountries();
    }
    userchanged() {
        console.log(this.createUser);
    }
}

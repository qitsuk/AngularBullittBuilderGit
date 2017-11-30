import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class CountriesService {
    countries: any = null;
    constructor(private _http: Http) {
    }

    // getCountries() {
    //     return this._http.get('https://restcountries.eu/rest/v2/all')
    //     .map(res => res.json());
    //     // .subscribe(countries => {
    //     //     this.countries = countries;
    //     //     console.log(this.countries);
    //     // });
    // }

    getCountries() {
        return ['Albania', 'Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 'Hungary', 'Iceland', 'Ireland', 'Israel',
                'Italy', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'UK'];
    }
}

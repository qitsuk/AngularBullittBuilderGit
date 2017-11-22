import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-1',
    templateUrl: 'page1.component.html'
})

export class Page1Component {
    constructor(private _router: Router) {
    }
}

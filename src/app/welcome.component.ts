import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent {
    constructor(private _router: Router) {
    }
}

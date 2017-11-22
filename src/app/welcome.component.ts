import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent {
    nextDisabled = false;
    prevDisabled = true;

    constructor(private _router: Router) {
    }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  currentPage = 0;
  currentPercent = 0;
  nextDisabled = false;
  prevDisabled = true;
  loaded = false;

  constructor() {

  }
}

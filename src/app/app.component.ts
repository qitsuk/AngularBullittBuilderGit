import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  styleUrls: ['app.component.css']
  
})

export class AppComponent {
  currentPage = 0;
  currentPercent = 0;
  nextDisabled = true;
  prevDisabled = false;
  loaded = false;
}

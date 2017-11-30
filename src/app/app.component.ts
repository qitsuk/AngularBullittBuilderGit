import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { BikeComponent } from './bike.component';
// import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  nextDisabled = false;
  prevDisabled = true;
  loaded = false;
  totalPrice;
  id = '0';

  constructor(private _router: Router, /* private _db: AngularFireDatabase*/) {
  }

  updateProgressBar(percent) {
    $('.progress').animate({width: percent + '%'}, 500);
    $('#tempid')[0].innerText = percent + '%';
  }
  ngOnInit() {
    this._router.navigate(['']);
    this.updateProgressBar(0);
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  currentPercent = 0;
  nextDisabled = false;
  prevDisabled = true;
  loaded = false;

  constructor(private _router: Router) {
  }
  next() {
    if (this.currentPercent === 100) {
      $('#nextButton').attr('value', 'Order');
    }
    if (this.currentPercent < 100) {
      this.currentPercent += 10;
      console.log(this.currentPercent);
      if (this.currentPercent === 0) {
        this.prevDisabled = true;
        $('#nextButton').attr('value', 'Start');
      } else {
        this.prevDisabled = false;
        $('#nextButton').attr('value', 'Next');
      }
      this.updateProgressBar(this.currentPercent);
      switch (this.currentPercent) {
        case 0:
          this._router.navigate(['']);
          break;
        case 10:
          this._router.navigate(['notfound']);
          break;
        default:
          break;
      }
    }
  }
  previous() {
    if (this.currentPercent > 0) {
      this.currentPercent -= 10;
      console.log(this.currentPercent);
    }
    if (this.currentPercent === 0) {
      this.prevDisabled = true;
      $('#nextButton').attr('value', 'Start');
    }
    if (this.currentPercent > 0 && this.currentPercent < 100) {
      $('#nextButton').attr('value', 'Next');
    }
    this.updateProgressBar(this.currentPercent);
  }

  updateProgressBar(percent) {
    $('.progress').animate({width: percent + '%'}, 500);
    $('#tempid')[0].innerText = percent + '%';
  }
  ngOnInit() {
    this.updateProgressBar(0);
  }
}

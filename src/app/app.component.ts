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
  nextDisabled = true;
  prevDisabled = false;
  loaded = false;
  constructor() {
    this.updateProgressBarAndButtons(this.currentPage, this.currentPercent);
    this.loaded = true;
  }

  next() {
    if (this.currentPage !== 1900) {
      $('#nextButton').attr('value', 'Next');
      this.currentPage += 190;
      this.currentPercent += 10;
      this.updateProgressBarAndButtons(this.currentPage, this.currentPercent);
    }
  }

  previous() {
    if (this.currentPage !== 0) {
      this.currentPage -= 190;
      this.currentPercent -= 10;
      this.updateProgressBarAndButtons(this.currentPage, this.currentPercent);
    }
  }

  updateProgressBarAndButtons(page, percent) {
    if (page !== 0) {
      this.prevDisabled = false;
    } else {
      this.prevDisabled = true;
      $('#nextButton').attr('value', 'Start');
    }
    if (percent === 100) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    if (this.loaded) {
      $('#bike-builder-progress-bar')[0].innerHTML = '' + percent + '%';
      $('.progress-bar').animate({width: page}, 500);
    }
  }
}

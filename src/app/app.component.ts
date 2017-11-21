import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div class="progress"
  style="margin-top: 10px; margin-left: 10px; margin-right: 10px;">
    <div
      id="bike-builder-progress-bar"
      class="progress-bar
      progress-bar-striped active"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      style="width: 0%">
    </div>
  </div>
  <div>
    <app-page-1></app-page-1>
    <input type="button" id="nextButton" class="btn btn-primary" value="Start" [disabled]="nextDisabled"
      style="float: right; margin-right: 10px; height: 900px; width: 100px;" (click)="next()">
    <input type="button" id="previousButton" class="btn btn-primary" value="Previous" [disabled]="prevDisabled"
      style="float: left; margin-left: 10px; height: 900px; width: 100px;" (click)="previous()">
    </div>
  `
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

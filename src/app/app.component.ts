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

  <input type="button" class="btn btn-primary" value="Next"
    style="float: right; margin-right: 10px; height: 900px; width: 100px;" (click)="next()">
  <input type="button" class="btn btn-primary" value="Previous"
    style="float: left; margin-left: 10px; height: 900px; width: 100px;" (click)="previous()">
  `
})
export class AppComponent {
  currentPage = 0;
  currentPercent = 0;

  next() {
    if (this.currentPage !== 1900) {
      this.currentPage += 190;
      this.currentPercent += 10;
      this.updateProgressBar(this.currentPage, this.currentPercent);
    } else {
      alert('You are done!');
    }
  }

  previous() {
    if (this.currentPage !== 0) {
      this.currentPage -= 190;
      this.currentPercent -= 10;
      this.updateProgressBar(this.currentPage, this.currentPercent);
    } else {
      alert('You can\'t go further back!!');
    }
  }

  updateProgressBar(page, percent) {
    $('#bike-builder-progress-bar')[0].innerHTML = '' + percent + '%';
    $('.progress-bar').animate({width: page}, 100);
  }
}

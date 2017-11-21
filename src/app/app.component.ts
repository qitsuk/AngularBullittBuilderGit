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
    style="float: right; margin-right: 10px; height: 900px; width: 100px;" (click)="updateProgressBar()">
  <input type="button" class="btn btn-primary" value="Previous"
    style="float: left; margin-left: 10px; height: 900px; width: 100px;" onClick="">
  `
})
export class AppComponent {
  currentPage = 0;
  currentPercent = 0;

  updateProgressBar() {
    this.currentPage += 190;
    this.currentPercent += 10;
    $('#bike-builder-progress-bar')[0].innerHTML = '' + this.currentPercent + '%';
    $('.progress-bar').animate({width: this.currentPage}, 100);
  }
}

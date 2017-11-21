import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:
  `
  <p></p>
  <div class="progress">
    <div
      class="progress-bar
      progress-bar-striped active"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      style="width: 90%">
       {{currentPage}}%
    </div>
  </div>

  <input type="button" class="btn btn-primary" value="Next"
    style="float: right; margin-right: 10px; height: 750px; width: 100px;" onClick="">
  <input type="button" class="btn btn-primary" value="Previous"
    style="float: left; margin-left: 10px; height: 750px; width: 100px;" onClick="">
  `
})
export class AppComponent {
  currentPage = 10;
}

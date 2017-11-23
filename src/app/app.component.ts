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
          this._router.navigate(['welcome']);
          break;
        case 10:
          this._router.navigate(['frame']);
          break;
        case 20:
          this._router.navigate(['color']);
          break;
        case 30:
          this._router.navigate(['drivetrain']);
          break;
        case 40:
          this._router.navigate(['customize']);
          break;
        case 50:
          this._router.navigate(['accessories']);
          break;
        case 60:
          this._router.navigate(['extras']);
          break;
        case 70:
          this._router.navigate(['overview']);
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
    switch (this.currentPercent) {
      case 0:
        this._router.navigate(['welcome']);
        break;
      case 10:
        this._router.navigate(['frame']);
        break;
      case 20:
        this._router.navigate(['color']);
        break;
      case 30:
        this._router.navigate(['drivetrain']);
        break;
      case 40:
        this._router.navigate(['customize']);
        break;
      case 50:
        this._router.navigate(['accessories']);
        break;
      case 60:
        this._router.navigate(['extras']);
        break;
      case 70:
        this._router.navigate(['overview']);
        break;
      default:
        break;
    }
  }

  updateProgressBar(percent) {
    $('.progress').animate({width: percent + '%'}, 500);
    $('#tempid')[0].innerText = percent + '%';
  }
  ngOnInit() {
    this._router.navigate(['welcome']);
    this.updateProgressBar(0);
  }
}

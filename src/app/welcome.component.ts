import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  form: FormGroup;
    constructor(private _router: Router, fb: FormBuilder, private _ac: AppComponent) {
      this.form = fb.group({});
    }

  submit() {
    this._router.navigate(['frame']);
    this._ac.updateProgressBar(10);
  }

  ngOnInit() {
      this.carouselOne = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 600,
        interval: 4000,
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
      };
    }
}

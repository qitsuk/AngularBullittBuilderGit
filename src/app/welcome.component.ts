import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
    constructor(private _router: Router) {
    }
    ngOnInit() {
        this.carouselOne = {
          grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
          slide: 1,
          speed: 400,
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

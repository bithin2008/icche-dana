import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  feature: any;
  slideOpts = {
    slidesPerView: 1,
    grabCursor: true,
    speed: 400,
    autoplay: true
  };
  slideOptsType = {
    slidesPerView: 2.1,
    grabCursor: true,
  };
  sliderFull = {
    slidesPerView: 1.1,
    grabCursor: true,
  };

  constructor(
    private router: Router
  ) {
    this.feature = 'home';
  }

  ngOnInit() {
  }
  segmentChanged(events) {

  }
  language() {
    this.router.navigate(['details']);
  }

  details() {
    this.router.navigate(['details']);
  }
  series() {
    this.router.navigate(['series']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  feature: any;
  slideOptsType = {
    slidesPerView: 2.1,
    grabCursor: true,
  };
  list = [
    {
      imgs: 'assets/grids/u1.jpg',
      name: 'Leanne Graham',
      username: 'Bret',
    },
    {
      imgs: 'assets/grids/u2.jpg',
      name: 'Ervin Howell',
      username: 'Antonette',
    },
    {
      imgs: 'assets/grids/u3.jpg',
      name: 'Clementine Bauch',
      username: 'Samantha',
    },
    {
      imgs: 'assets/grids/u4.jpeg',
      name: 'Romaguera-Jacobson',
      username: 'Karianne',
    },
    {
      imgs: 'assets/grids/u5.jpg',
      name: 'Chelsey Dietrich',
      username: 'Kamren',
    },
    {
      imgs: 'assets/grids/u6.jpg',
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
    },
    {
      imgs: 'assets/grids/u7.jpeg',
      name: 'Glenna Reichert',
      username: 'Delphine',
    },
    {
      imgs: 'assets/grids/u8.jpg',
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
    },
    {
      imgs: 'assets/grids/u9.jpg',
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
    },
  ];

  activeEpisode: any;
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {
    this.feature = 'Related';
  }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }
  segmentChanged(event) {

  }
  actorProfile() {
    this.router.navigate(['actor-profile']);
  }
  onPurchase() {

  }
  details() {

  }
}

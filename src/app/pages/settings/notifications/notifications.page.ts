import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  download: boolean = true;
  watchlist: boolean = true;
  forYou: boolean = true;
  features: boolean = true;
  offers: boolean = true;
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }

}

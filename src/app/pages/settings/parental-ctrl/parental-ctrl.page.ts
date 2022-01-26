import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parental-ctrl',
  templateUrl: './parental-ctrl.page.html',
  styleUrls: ['./parental-ctrl.page.scss'],
})
export class ParentalCtrlPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.page.html',
  styleUrls: ['./actor-profile.page.scss'],
})
export class ActorProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }

}

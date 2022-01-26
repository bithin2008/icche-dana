import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  hide: boolean;
  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.hide = true;
  }

  ngOnInit() {
  }
  calling() {
    this.hide = false;
  }

  async phone() {
    const toast = await this.toastController.create({
      message: 'Please wait while we made call......',
      duration: 2000
    });
    toast.present();
  }
  back() {
    this.navCtrl.back();
  }

}

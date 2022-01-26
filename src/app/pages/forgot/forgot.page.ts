import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  type: any;
  constructor(
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  focus(type) {
    console.log('focu', type);
    this.type = type;
  }
  reset() {
    this.presentToast();
    this.navCtrl.back();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Reset Link is sent to your mail',
      duration: 2000,
      color: 'light'
    });
    toast.present();
  }
}

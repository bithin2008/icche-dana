import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  autoPlay: boolean = true;
  token: any = '';
  userMobile: any;
  userEmail: any;
  constructor(
    public router: Router,
    route: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) {

    route.params.subscribe(val => {
      console.log('this.router.url', this.router.url)
      this.token = localStorage.getItem('token');
      if (!this.token) {
        //  this.router.navigate([`/`]);
      } else {
        this.userMobile = '';
        this.userEmail = localStorage.getItem('emailId');
      }
    });
  }

  ngOnInit() {
  }

  stream() {
    this.router.navigate(['settings/streams']);
  }
  notification() {
    this.router.navigate(['settings/notifications']);
  }
  control() {
    this.router.navigate(['settings/parental-ctrl']);
  }

  languages() {
    this.router.navigate(['settings/languages']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

  async clearSearch() {
    const toast = await this.toastController.create({
      message: 'search history cleared',
      duration: 2000,
      color: 'light'
    });
    toast.present();
  }
  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm Sign Out!',
      message: 'Signing out of all Amazon apps also deletes downloaded videos',
      mode: 'ios',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SING OUT',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  contactus() {
    this.router.navigate(['settings/contact']);
  }
  about() {
    this.router.navigate(['settings/about']);
  }
  help() {
    this.router.navigate(['settings/help']);
  }
}

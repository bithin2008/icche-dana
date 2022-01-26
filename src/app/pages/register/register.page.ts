import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  type: any;
  passwordType: string = 'text';
  typeCheck: boolean = true;
  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  focus(type) {
    console.log('focu', type);
    this.type = type;
  }

  changeType() {
    this.passwordType = this.typeCheck === true ? 'text' : 'password';
  }
  login() {
    this.navCtrl.back();
  }
  create() {
    localStorage.setItem('uid', 'ionPrimeUser');
    this.navCtrl.navigateRoot(['']);
  }

}

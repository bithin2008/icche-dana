import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type: any;
  passwordType: string = 'text';
  typeCheck: boolean = true;
  constructor(
    private router: Router,
    private navCtr: NavController
  ) { }

  ngOnInit() {
  }
  reset() {
    this.router.navigate(['forgot']);
  }
  focus(type) {
    console.log('focu', type);
    this.type = type;
  }
  changeType() {
    this.passwordType = this.typeCheck === true ? 'text' : 'password';
  }
  login() {
    localStorage.setItem('uid', 'ionPrimeUser');
    this.navCtr.navigateRoot(['']);
  }
  create() {
    this.router.navigate(['register']);
  }
}

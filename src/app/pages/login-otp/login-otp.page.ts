
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CommonService } from '../../service/common-service';
import { ToastService } from '../../service/toast.service';
import { LoadingService } from '../../service/loading-service';
import { ModalController } from '@ionic/angular';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.page.html',
  styleUrls: ['./login-otp.page.scss'],
})
export class LoginOtpPage implements OnInit {
  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  optForm: FormGroup;
  submitted = false;
  otpValue: number;
  //users/userconfirmation?userId=96e1ed64-8ebe-4f5b-aba4-267c957d33c6&email=sumitgaita@gmail.com
  constructor(
    public router: Router,
    route: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    public _toastService: ToastService,
    public modalController: ModalController,
    private _commonService: CommonService,
    private menu: MenuController,
    public loading: LoadingService,
  ) {
    route.params.subscribe(val => {
      this.optForm = new FormGroup({
        verifyCode: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.required
        ]))
      });
    });
  }

  ngOnInit() {
  }

  onOtpChange($event) {
    console.log('$event', $event);
    if ($event.length == 4) {
      this.otpValue = $event;
    }
  }

  resendOtp() {
    let url = `users/resendotp?userId=${localStorage.getItem('userId')}&DeviceName=window&IpAdress=10.10.10.10`;
    this._commonService.noTokenPost(url, {}).subscribe((response) => {
      console.log('response', response);
      if (response.statusCode == 200) {
        localStorage.setItem('token', response.token);
        this.showToast('success', 'OTP send ', 'Check your email', 3500, '/login-otp')
      } else {
        this.showToast('error', 'Oops! wrong otp', response.message, 3500, '/login-otp')
      }
    }, (error) => {
      console.log("error ts: ", error);
    });
  }

  otpSubmit() {
    let url = `users/authenticate?userId=${localStorage.getItem('userId')}&otp=${this.otpValue}&UserLoginHistoryId=${localStorage.getItem('userHistoryId')}`;
    this._commonService.noTokenPost(url, {}).subscribe((response) => {
      console.log('response', response);
      if (response.statusCode == 200) {
        localStorage.setItem('token', response.token);
        this.showToast('success', 'Successfully loggedin', 'Now enjoy Ichhe dana', 3500, '/')
      } else {
        this.showToast('error', 'Oops! wrong otp', response.message, 3500, '/login-otp')
      }
    }, (error) => {
      console.log("error ts: ", error);
    });
  }

  async showToast(status, message, submessage, timer, redirect) {
    const modal = await this.modalController.create({
      component: ToastModalComponent,
      cssClass: 'toast-modal',
      showBackdrop: false,
      componentProps: {
        status: status,
        message: message,
        submessage: submessage,
        timer: timer,
        redirect: redirect
      }
    });
    return await modal.present();
  }
}

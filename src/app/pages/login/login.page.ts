import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CommonService } from '../../service/common-service';
import { ToastService } from '../../service/toast.service';
import { LoadingService } from '../../service/loading-service';
import { ModalController } from '@ionic/angular';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';
import { IonIntlTelInputValidators, IonIntlTelInputModel } from 'ion-intl-tel-input';
//import { Network } from '@ionic-native/network/ngx';
import { MustMatch } from '../_helper/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type: any;
  passwordType: string = 'text';
  typeCheck: boolean = true;
  registerMobileForm: FormGroup;
  registerEmailForm: FormGroup;
  enableLoader: boolean = false;
  submitted: boolean = false;
  emailsubmitted: boolean = false;
  phone: IonIntlTelInputModel = {
    dialCode: '+91',
    internationalNumber: '+91 300 1234567',
    isoCode: 'in',
    nationalNumber: ''
  };
  mobileTab: boolean = false;
  mobileTabContent: boolean = false;
  emailTab: boolean = false;
  emailTabContent: boolean = false;
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
      this.mobileTab = true
      this.emailTab = false
      this.mobileTabContent = true;
      this.emailTabContent = false;
      this.registerMobileForm = this.formBuilder.group({
        mobileNumber: [this.phone, [Validators.required, IonIntlTelInputValidators.phone]]
      });

      this.registerEmailForm = this.formBuilder.group({
        emailId: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      });

    });
  }

  ngOnInit() {
    this.mobileTab = true
    this.emailTab = false
    this.mobileTabContent = true;
    this.emailTabContent = false;
  }

  tabChange(event) {
    if (event.target.id == 'tab1') {


      setTimeout(() => {
        this.mobileTabContent = true;
        this.emailTabContent = false;
        this.mobileTab = true;
        this.emailTab = false;
        this.registerMobileForm = this.formBuilder.group({
          mobileNumber: [this.phone, [Validators.required, IonIntlTelInputValidators.phone]]
        });
      }, 500);
    };
    if (event.target.id == 'tab2') {


      setTimeout(() => {
        this.mobileTabContent = false;
        this.emailTabContent = true;
        this.mobileTab = false;
        this.emailTab = true;
        this.registerEmailForm = this.formBuilder.group({
          emailId: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        });
      }, 500);



    };
  }

  focus(type) {
    console.log('focu', type);
    this.type = type;
  }

  changeType() {
    this.passwordType = this.typeCheck === true ? 'text' : 'password';
  }
  login() {
    //  this.navCtrl.back();
  }

  get f() { return this.registerMobileForm.controls; }

  get g() { return this.registerEmailForm.controls; }

  userMobileRegister(data: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerMobileForm.invalid) {
      return;
    }
    this.enableLoader = true;
    // data.deviceToken=this.deviceId;
    let url = `users/otpverification?DeviceName=window&IpAdress=10.10.10.10&mobileNumber=${localStorage.getItem('emailId')}`;
    this._commonService.noTokenPost(url, data).subscribe((response) => {
      console.log('response', response);
      this.enableLoader = false;
      // if (response.success) {
      //  this.registeredId = response.result._id;
      localStorage.setItem('userId', response.createuser.userId);
      localStorage.setItem('emailId', response.createuser.emailId);
      this.router.navigate(['/login-otp'])
      // if (response.status == 1) {
      //   this.showToast('success', "OTP Sent", "Check your mobile for OTP", 3500, '/otp')
      // }
      // if (response.status == 2) {
      //   this.showToast('warning', "Already Registered", "Now login and enjoy", 3500, '/login')
      // }
      // if (response.status == 3) {
      //   this.showToast('warning', "Mobile number Not Verified", "OTP sent to your mobile for verification", 4000, '/otp')
      // }
      // if (response.status == 0) {
      //   this.showToast('warning', "Terms and Conditions", "RESPONSE", 4000, '')
      // }

    }, (error) => {
      console.log("error ts: ", error);
    });
  }


  userEmailRegister(data: any) {
    this.emailsubmitted = true;

    // stop here if form is invalid
    if (this.registerEmailForm.invalid) {
      return;
    }
    this.enableLoader = true;
    // data.deviceToken=this.deviceId;
    let url = `users/otpverification?DeviceName=window&IpAdress=10.10.10.10&email=${data.emailId}`;
    this._commonService.noTokenPost(url, {}).subscribe((response) => {
      console.log('response', response);
      this.enableLoader = false;
      localStorage.setItem('userId', response.user.userId);
      localStorage.setItem('emailId', response.user.emailId);
      localStorage.setItem('userHistoryId', response.userLoginHistory.userLoginHistoryId);
      this.router.navigate(['/login-otp'])
      // if (response.success) {
      //  this.registeredId = response.result._id;
      if (response.status == 1) {
        this.showToast('success', "OTP Sent", "Check your mobile for OTP", 3500, '/otp')
      }
      if (response.status == 2) {
        this.showToast('warning', "Already Registered", "Now login and enjoy", 3500, '/login')
      }
      if (response.status == 3) {
        this.showToast('warning', "Mobile number Not Verified", "OTP sent to your mobile for verification", 4000, '/otp')
      }


    }, (error) => {
      console.log("error ts: ", error);
    });
  }

  async showToast(status, message, submessage, timer, redirect) {
    const modal = await this.modalController.create({
      component: ToastModalComponent,
      cssClass: 'toast-modal',
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

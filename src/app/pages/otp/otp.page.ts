
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
//import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
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

  otpSubmit() {

    let url = `users/userconfirmation?userId=${localStorage.getItem('userId')}&email=${localStorage.getItem('emailId')}&otp=${this.otpValue}&isAdmin=false`;

    this._commonService.noTokenPost(url, {}).subscribe((response) => {
      console.log('response', response);
      if (response.statusCode == 200) {
        this.showToast('success', 'Registration Completed', 'Just login & enjoy', 3500, 'login')
      } else {
        this.showToast('error', 'Oops! wrong otp', response.message, 3500, '/otp')
      }

      // this.enableOverlay = true;
      if (response.success) {
        if (response.user == 1) {
          this.ngOtpInputRef.setValue('');
          // this.showToast('success', this.messsageObj.otpPage.verifiedMessage[this.defaultLanguage], response.message, 3500, '/class/' + response.result._id)
        }
      } else {
        if (response.status == 0) {
          this.ngOtpInputRef.setValue('');
          //  this.showToast('error', this.messsageObj.otpPage.invalidMessage[this.defaultLanguage], response.message, 3500, '/otp')
        }
        if (response.status == 2) {
          //  this.showToast('warning', this.messsageObj.otpPage.alreadyVerifiedMessage[this.defaultLanguage], this.messsageObj.otpPage.enjoyLearningMessage[this.defaultLanguage], 3500, '/login');
        }
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

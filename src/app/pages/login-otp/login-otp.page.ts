
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

  otpSubmit() {
    let url = `users/otpverification?DeviceName=window&IpAdress=10.10.10.10&email=${localStorage.getItem('emailId')}&otp=${this.otpValue}`;

    this._commonService.noTokenPost(url, {}).subscribe((response) => {
      console.log('response', response);
      this.router.navigate(['/'])
      // this.enableOverlay = true;
      if (response.success) {
        if (response.status == 1) {
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
}

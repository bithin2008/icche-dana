import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service/common-service';
import { ToastService } from '../../service/toast.service';
import { ModalController } from '@ionic/angular';
import { MenuController, NavController } from '@ionic/angular';
import { LoadingService } from '../../service/loading-service';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message: string;
  submitted: boolean = false;
  loginForm: FormGroup;
  isBlur: boolean = false;
  placeHolderVal = 'Mobile Number';
  enableLoader: boolean = false;
  deviceId: any;
  token: any;
  messsageObj: any = {};
  defaultLanguage: any;
  showPass: boolean = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    route: ActivatedRoute,
    private httpClient: HttpClient,
    public _toastService: ToastService,
    public modalController: ModalController,
    private _commonService: CommonService,
    private alertController: AlertController,
    private menu: MenuController,
    public loading: LoadingService,
    private navCtrl: NavController
  ) {


    route.params.subscribe(val => {
      this.loginForm = this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        // email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    });
  }

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }
  // getDeviceId(){
  //   this.uniqueDeviceID.get()
  // .then((uuid: any) => {
  //   console.log(uuid);
  //   this.deviceId=uuid;
  // })
  // .catch((error: any) => console.log(error));
  // }
  userLogin(data: any) {
    console.log('data', data);
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //   data.deviceToken=this.deviceId;
    this.enableLoader = true;
    let url = "users/login";
    data.lang = localStorage.getItem('language');
    this._commonService.noTokenPost(url, data).subscribe((response) => {
      console.log('response', response);
      this.enableLoader = false;
      if (response.success) {
        if (response.status == 1) {
          localStorage.setItem('token', response.result.token);
          localStorage.setItem('name', response.result.name);
          localStorage.setItem('mobile', response.result.mobile);
          localStorage.setItem('email', response.result.email);
          if (response.result.class) {
            localStorage.setItem('className', response.result.class.name);
            localStorage.setItem('classId', response.result.class._id);
            this.showToast('success', this.messsageObj.login.loginSuccess[this.defaultLanguage], this.messsageObj.login.enjoyLearning[this.defaultLanguage], 3500, '/dashboard');
          } else {
            this.showToast('warning', this.messsageObj.login.classSelect[this.defaultLanguage], this.messsageObj.login.selectClassAndLearning[this.defaultLanguage], 3500, '/class/' + response.result._id + '/' + true);
          }
        }
        if (response.status == 2) {
          this.showToast('warning', this.messsageObj.login.emailNotVerified[this.defaultLanguage], response.message, 3500, '/otp');
        }
        if (response.status == 3) {
          this.showToast('warning', this.messsageObj.login.accountInactive[this.defaultLanguage], response.message, 3500, '/otp');
        }
        if (response.status == 4) {
          // this.logoutFromAllDevice(response.message);
        }
        if (response.status == 0) {
          this.showToast('warning', this.messsageObj.login.invalidMessage[this.defaultLanguage], response.message, 3500, '');
        }
      } else {
        if (response.status == 0) {
          this.showToast('error', this.messsageObj.login.invalidMessage[this.defaultLanguage], response.message, 3500, '');
        }
      }
    }, (error) => {
      this.enableLoader = false;
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

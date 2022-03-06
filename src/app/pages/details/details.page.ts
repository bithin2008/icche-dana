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
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  feature: any;
  viewItemId: any;
  viewItemDetails: any = {};
  bannerUrl: any = '';
  trailerUrl: any = '';
  slideOptsType = {
    slidesPerView: 2.1,
    grabCursor: true,
  };
  list = [
    {
      imgs: 'assets/grids/u1.jpg',
      name: 'Leanne Graham',
      username: 'Bret',
    },
    {
      imgs: 'assets/grids/u2.jpg',
      name: 'Ervin Howell',
      username: 'Antonette',
    },
    {
      imgs: 'assets/grids/u3.jpg',
      name: 'Clementine Bauch',
      username: 'Samantha',
    },
    {
      imgs: 'assets/grids/u4.jpeg',
      name: 'Romaguera-Jacobson',
      username: 'Karianne',
    },
    {
      imgs: 'assets/grids/u5.jpg',
      name: 'Chelsey Dietrich',
      username: 'Kamren',
    },
    {
      imgs: 'assets/grids/u6.jpg',
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
    },
    {
      imgs: 'assets/grids/u7.jpeg',
      name: 'Glenna Reichert',
      username: 'Delphine',
    },
    {
      imgs: 'assets/grids/u8.jpg',
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
    },
    {
      imgs: 'assets/grids/u9.jpg',
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
    },
  ];
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    public _toastService: ToastService,
    public modalController: ModalController,
    private _commonService: CommonService,
    private menu: MenuController,
    public loading: LoadingService,
    private streamingMedia: StreamingMedia
  ) {
    this.feature = 'Related';
  }

  ngOnInit() {
    this.viewItemId = this.activatedRoute.snapshot.paramMap.get("viewItemId");
    this.getItemDetails();
  }
  back() {
    // this.navCtrl.back();
  }
  segmentChanged(event) {

  }
  onPurchase() {

  }
  details() {

  }
  actorProfile() {
    this.router.navigate(['actor-profile']);
  }
  playVideo() {
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming', e); },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    const url = this.trailerUrl;
    this.streamingMedia.playVideo(url, options);
  }

  getItemDetails() {
    // this.spinnerService.show();
    let url = `ViewItem/${this.viewItemId}`;
    this._commonService.get(url).subscribe((response) => {
      //  this.spinnerService.hide();
      // if (response.viewItemDetails.length > 0) {
      this.viewItemDetails = response[0];
      if (this.viewItemDetails.viewitemMaterials) {
        this.viewItemDetails.viewitemMaterials.forEach(element => {
          if (element.banners) {
            this.bannerUrl = environment.API_ENDPOINT + element.bannerUrl.replaceAll('\\', '/');
          }

          if (element.trailers) {
            this.trailerUrl = environment.API_ENDPOINT + element.trailerUrl.replaceAll('\\', '/');
          }
        });
      }
    }, (error) => {
      console.log('error', error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service/common-service';
import { ToastService } from '../../service/toast.service';
import { ModalController } from '@ionic/angular';
import { MenuController, NavController } from '@ionic/angular';
import { LoadingService } from '../../service/loading-service';
import { ToastModalComponent } from '../toast-modal/toast-modal.component';
import { environment } from '../../../environments/environment';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  feature: any;
  frontBanners: any = [];
  frontPoster: any = [];
  slideOpts = {
    slidesPerView: 1,
    grabCursor: true,
    speed: 400,
    autoplay: true
  };
  slideOptsType = {
    slidesPerView: 2.1,
    grabCursor: true,
  };
  sliderFull = {
    slidesPerView: 1.1,
    grabCursor: true,
  };

  constructor(
    public router: Router,
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
      this.getFrontBanner();
      this.getCategoryWisePoster();
    });
  }

  ngOnInit() {
  }
  segmentChanged(events) {

  }
  language() {
    this.router.navigate(['details']);
  }

  details(obj) {
    console.log(obj)
    this.router.navigate(['details/' + obj.viewItemId]);
  }
  series() {
    this.router.navigate(['series']);
  }

  getFrontBanner() {
    let url = "FrontBanner";
    this._commonService.get(url).subscribe((response) => {
      this.frontBanners = [];
      response.frontBanner.forEach(element => {
        element.banner = environment.API_ENDPOINT + element.bannerUrl.replaceAll('\\', '/');
        this.frontBanners.push(element)
      });
    }, (error) => {
      console.log("error ts: ", error);
    });
  }

  getCategoryWisePoster() {
    let url = "CategoryWisePoster";
    this._commonService.get(url).subscribe((response) => {
      this.frontPoster = [];
      response.categoryWisePoster.forEach(element => {
        if (element.details) {
          if (element.details.posterDetails) {
            var obj: any = {};
            obj.categoryId = element.details.categoryId;
            obj.categoryName = element.details.categoryName;
            obj.posters = [];
            element.details.posterDetails.forEach(item => {
              item.viewItemId = element.details.viewItemId;
              item.subCategoryId = element.details.subCategoryId

              item.categoryPriority = element.details.categoryPriority;
              item.subCategoryName = element.details.subCategoryName;
              item.subCategoryPriority = element.details.subCategoryPriority;
              item.url = environment.API_ENDPOINT + item.posterURL.replaceAll('\\', '/');
              obj.posters.push(item);
            });
            this.frontPoster.push(obj);
            console.log('this.frontPoster', this.frontPoster)
          }
        }

        console.log('frontPoster', this.frontPoster);
      });
    }, (error) => {
      console.log("error ts: ", error);
    });
  }
}

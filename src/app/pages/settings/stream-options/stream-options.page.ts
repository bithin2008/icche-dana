import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stream-options',
  templateUrl: './stream-options.page.html',
  styleUrls: ['./stream-options.page.scss'],
})
export class StreamOptionsPage implements OnInit {
  quality: any;
  highest: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.quality = 'best';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      if (data.hasOwnProperty('type')) {
        const type = JSON.parse(data.type);
        console.log('type', type);
      } else {
      }
    });
  }

  back() {
    this.navCtrl.back();
  }

}

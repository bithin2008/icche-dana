import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.page.html',
  styleUrls: ['./streams.page.scss'],
})
export class StreamsPage implements OnInit {
  download: boolean = true;
  stream: boolean = true;
  mobileData: boolean = true;
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }
  streamOptions(type) {
    const navData: NavigationExtras = {
      queryParams: {
        type: JSON.stringify(type)
      }
    }
    this.router.navigate(['settings/stream-options'], navData);
  }
}

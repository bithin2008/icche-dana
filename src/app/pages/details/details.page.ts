import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  feature: any;
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
    private navCtrl: NavController,
    private router: Router,
    // public stream: StreamingMedia
  ) {
    this.feature = 'Related';
  }

  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
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
    // const options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played'); },
    //   errorCallback: (e) => { console.log('Error streaming', e); },
    //   orientation: 'landscape',
    //   shouldAutoClose: true,
    //   controls: true
    // };
    // const url = 'https://firebasestorage.googleapis.com/v0/b/ionic4-app-template.appspot.com/o/movie.mp4?alt=media&token=1288805c-fa71-46f9-ba92-b0c4b023852e';
    // this.stream.playVideo(url, options);
  }
}

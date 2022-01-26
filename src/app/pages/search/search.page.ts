import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  hide: boolean;
  constructor(
    private router: Router
  ) {
    this.hide = false;
  }

  ngOnInit() {
  }
  onSearchChange(events) {
    if (events.detail.value != '') {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
  details() {
    this.router.navigate(['search-results']);
  }
}

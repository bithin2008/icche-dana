import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchListPage } from './watch-list.page';

describe('WatchListPage', () => {
  let component: WatchListPage;
  let fixture: ComponentFixture<WatchListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StreamOptionsPage } from './stream-options.page';

describe('StreamOptionsPage', () => {
  let component: StreamOptionsPage;
  let fixture: ComponentFixture<StreamOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StreamOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentalCtrlPage } from './parental-ctrl.page';

describe('ParentalCtrlPage', () => {
  let component: ParentalCtrlPage;
  let fixture: ComponentFixture<ParentalCtrlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentalCtrlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentalCtrlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

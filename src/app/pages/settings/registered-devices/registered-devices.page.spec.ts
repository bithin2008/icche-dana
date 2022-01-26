import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisteredDevicesPage } from './registered-devices.page';

describe('RegisteredDevicesPage', () => {
  let component: RegisteredDevicesPage;
  let fixture: ComponentFixture<RegisteredDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredDevicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteredDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

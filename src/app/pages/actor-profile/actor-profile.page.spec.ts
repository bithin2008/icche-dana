import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActorProfilePage } from './actor-profile.page';

describe('ActorProfilePage', () => {
  let component: ActorProfilePage;
  let fixture: ComponentFixture<ActorProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

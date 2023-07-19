import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinTripPage } from './join-trip.page';

describe('JoinTripPage', () => {
  let component: JoinTripPage;
  let fixture: ComponentFixture<JoinTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

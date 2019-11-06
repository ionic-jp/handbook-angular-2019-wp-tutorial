import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WpHeadComponent } from './wp-head.component';

describe('WpHeadComponent', () => {
  let component: WpHeadComponent;
  let fixture: ComponentFixture<WpHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpHeadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WpHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

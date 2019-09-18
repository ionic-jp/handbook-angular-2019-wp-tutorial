import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpHeadComponent } from './wp-head.component';

describe('WpHeadComponent', () => {
  let component: WpHeadComponent;
  let fixture: ComponentFixture<WpHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpHeadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity31Component } from './activity31.component';

describe('Activity31Component', () => {
  let component: Activity31Component;
  let fixture: ComponentFixture<Activity31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Activity31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

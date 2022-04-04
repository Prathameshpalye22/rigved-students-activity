import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataActivityComponent } from './user-data-activity.component';

describe('UserDataActivityComponent', () => {
  let component: UserDataActivityComponent;
  let fixture: ComponentFixture<UserDataActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

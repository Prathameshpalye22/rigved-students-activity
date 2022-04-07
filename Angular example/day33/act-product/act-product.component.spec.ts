import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActProductComponent } from './act-product.component';

describe('ActProductComponent', () => {
  let component: ActProductComponent;
  let fixture: ComponentFixture<ActProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

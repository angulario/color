import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RGBSliderComponent } from './rgbslider.component';

describe('RGBSliderComponent', () => {
  let component: RGBSliderComponent;
  let fixture: ComponentFixture<RGBSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RGBSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RGBSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCarouselHeaderComponent } from './h-carousel-header.component';

describe('HCarouselHeaderComponent', () => {
  let component: HCarouselHeaderComponent;
  let fixture: ComponentFixture<HCarouselHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCarouselHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCarouselHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

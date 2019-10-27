import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaMessagingComponent } from './pwa-messaging.component';

describe('PwaMessagingComponent', () => {
  let component: PwaMessagingComponent;
  let fixture: ComponentFixture<PwaMessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaMessagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaUpdatedComponent } from './pwa-updated.component';

describe('PwaUpdatedComponent', () => {
  let component: PwaUpdatedComponent;
  let fixture: ComponentFixture<PwaUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

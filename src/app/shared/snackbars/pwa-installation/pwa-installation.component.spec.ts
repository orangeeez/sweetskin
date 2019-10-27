import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaInstallationComponent } from './pwa-installation.component';

describe('PwaInstallationComponent', () => {
  let component: PwaInstallationComponent;
  let fixture: ComponentFixture<PwaInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

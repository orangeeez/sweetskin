import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetologyTableComponent } from './cosmetology-table.component';

describe('CosmetologyTableComponent', () => {
  let component: CosmetologyTableComponent;
  let fixture: ComponentFixture<CosmetologyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmetologyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmetologyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

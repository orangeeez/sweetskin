import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RustlingTableComponent } from './rustling-table.component';

describe('RustlingTableComponent', () => {
  let component: RustlingTableComponent;
  let fixture: ComponentFixture<RustlingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RustlingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RustlingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

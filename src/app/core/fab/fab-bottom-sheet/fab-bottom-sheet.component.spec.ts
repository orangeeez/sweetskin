import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabBottomSheetComponent } from './fab-bottom-sheet.component';

describe('FabBottomSheetComponent', () => {
  let component: FabBottomSheetComponent;
  let fixture: ComponentFixture<FabBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

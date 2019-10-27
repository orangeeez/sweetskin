import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabListItemComponent } from './fab-list-item.component';

describe('FabListItemComponent', () => {
  let component: FabListItemComponent;
  let fixture: ComponentFixture<FabListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarHeaderComponent } from './toolbar-header.component';

describe('ToolbarHeaderComponent', () => {
  let component: ToolbarHeaderComponent;
  let fixture: ComponentFixture<ToolbarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

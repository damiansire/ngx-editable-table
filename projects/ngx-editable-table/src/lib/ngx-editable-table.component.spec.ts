import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditableTableComponent } from './ngx-editable-table.component';

describe('NgxEditableTableComponent', () => {
  let component: NgxEditableTableComponent;
  let fixture: ComponentFixture<NgxEditableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEditableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxEditableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgxEditableTableService } from './ngx-editable-table.service';

describe('NgxEditableTableService', () => {
  let service: NgxEditableTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditableTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

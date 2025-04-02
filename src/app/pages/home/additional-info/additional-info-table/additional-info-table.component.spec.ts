import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoTableComponent } from './additional-info-table.component';

describe('AdditionalInfoTableComponent', () => {
  let component: AdditionalInfoTableComponent;
  let fixture: ComponentFixture<AdditionalInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalInfoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

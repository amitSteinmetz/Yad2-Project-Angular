import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobToolsComponent } from './find-job-tools.component';

describe('FindJobToolsComponent', () => {
  let component: FindJobToolsComponent;
  let fixture: ComponentFixture<FindJobToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJobToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJobToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

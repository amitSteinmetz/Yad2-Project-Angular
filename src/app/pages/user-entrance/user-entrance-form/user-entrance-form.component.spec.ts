import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntranceFormComponent } from './user-entrance-form.component';

describe('UserEntranceFormComponent', () => {
  let component: UserEntranceFormComponent;
  let fixture: ComponentFixture<UserEntranceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEntranceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSearchesComponent } from './recommended-searches.component';

describe('RecommendedSearchesComponent', () => {
  let component: RecommendedSearchesComponent;
  let fixture: ComponentFixture<RecommendedSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedSearchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

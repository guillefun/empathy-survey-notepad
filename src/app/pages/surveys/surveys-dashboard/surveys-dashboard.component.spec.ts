import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysDashboardComponent } from './surveys-dashboard.component';

describe('SurveysDashboardComponent', () => {
  let component: SurveysDashboardComponent;
  let fixture: ComponentFixture<SurveysDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveysDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveysDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

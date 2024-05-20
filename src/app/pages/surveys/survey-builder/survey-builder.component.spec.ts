import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SurveyBuilderComponent } from './survey-builder.component';

describe('SurveyBuilderComponent', () => {
  let component: SurveyBuilderComponent;
  let fixture: ComponentFixture<SurveyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FontAwesomeModule,
        FormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        ReactiveFormsModule,
      ],
      declarations: [SurveyBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

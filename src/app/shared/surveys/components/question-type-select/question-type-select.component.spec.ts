import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionTypeSelectComponent } from './question-type-select.component';

describe('QuestionTypeSelectComponent', () => {
  let component: QuestionTypeSelectComponent;
  let fixture: ComponentFixture<QuestionTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, BrowserAnimationsModule],
      declarations: [QuestionTypeSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

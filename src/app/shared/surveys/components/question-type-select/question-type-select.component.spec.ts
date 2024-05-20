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

    component.currentType = 1;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current type', () => {
    expect(component.currentType).toEqual(1);
  });

  it('should have all choices', () => {
    expect(component.items()).toBeTruthy();
    expect(component.items().length).toEqual(2);
  });

  it('should have filter choices', () => {
    component.onSearchUpdated('Multiple choice');
    expect(component.items()[0]).toBeTruthy();
    expect(component.items().length).toEqual(1);
  });
});

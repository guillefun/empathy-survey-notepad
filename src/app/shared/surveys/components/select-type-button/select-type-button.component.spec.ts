import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectTypeButtonComponent } from './select-type-button.component';

describe('SelectTypeButtonComponent', () => {
  let component: SelectTypeButtonComponent;
  let fixture: ComponentFixture<SelectTypeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [SelectTypeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTypeButtonComponent);
    component = fixture.componentInstance;

    component.text = 'Single choice'

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have not empty text value', () => {
    expect(component.text).toEqual('Single choice');
  });
});

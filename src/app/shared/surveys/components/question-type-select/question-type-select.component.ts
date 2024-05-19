import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output, computed, signal } from '@angular/core';
import { IconDefinition, faCircleCheck, faExpand, faListCheck, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { QuestionType, QuestionTypeData } from '../../../../core/surveys/models/survey.model';

@Component({
  selector: 'empathy-question-type-select',
  templateUrl: './question-type-select.component.html',
  styleUrl: './question-type-select.component.scss',
  animations: [
    trigger('animations', [
        transition(':enter', [
          style({
            opacity: 0,
            scale: 0.8
          }),
          animate('0.15s ease-in-out',
            style({
              opacity: 1,
              scale: 1
            })
          )
        ]),
        transition(':leave', [
          style({
            opacity: 1,
            scale: 1
          }),
          animate('0.15s ease-in-out',
            style({
              opacity: 0.8,
              scale: 0.8
            })
          )
        ])
      ]
    )
  ]
})
export class QuestionTypeSelectComponent {

  @Input()
  isOpen: boolean = false;

  @Input()
  currentType: QuestionType | 0 = 0;

  @Output()
  completed: EventEmitter<QuestionType> = new EventEmitter<QuestionType>();

  isFocus: boolean = false;
  isComponentClicked: boolean = false;

  searchValue: string = '';

  faXmark: IconDefinition = faXmark;
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  faExpand: IconDefinition = faExpand;

  types: QuestionTypeData[] = [
    {
      name: "Single choice",
      type: 1,
      icon: faCircleCheck
    },
    {
      name: "Multiple choice",
      type: 2,
      icon: faListCheck
    }
  ]

  searchQuery = signal<string>('');
  items = computed(() => {
    const sq = this.searchQuery();
    return this.types.filter(x => x.name.toLocaleLowerCase().includes(sq.toLocaleLowerCase()));
  });

  @HostBinding('@animations') animationState = true;

  selectType(type: QuestionType) {
    this.completed.emit(type)
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
  }

}



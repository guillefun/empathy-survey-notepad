import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'empathy-select-type-button',
  templateUrl: './select-type-button.component.html',
  styleUrl: './select-type-button.component.scss'
})
export class SelectTypeButtonComponent {
  @Input()
  text: string = '';

  @Input()
  icon!: IconDefinition;

  @Output()
  action: EventEmitter<boolean> = new EventEmitter;

  iconArrow: IconDefinition = faChevronDown;

  emitAction() {
    this.action.emit(true);
  }
}

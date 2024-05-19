import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener, Input } from '@angular/core';

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
  @HostBinding('@animations') animationState = true;

  @HostListener('click')
  clickInside(event: any) {
    console.log("clicked inside");
    this.isFocus = true;
    this.isComponentClicked = true;
  }

  @HostListener('document:click')
  click() {
    if (!this.isFocus && !this.isComponentClicked) {
      console.log("clicked outside");
       //TODO: EMIT CLOSE EVENT WITH NO DATA
    }
    this.isFocus = false;
    this.isComponentClicked = false;

  }

  isFocus = false;
  isComponentClicked = false;
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empathy-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent implements OnInit {
  @Input()
  label: string = '';

  @Input()
  defaultValue: boolean = false;

  @Output()
  valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  value: boolean = false;

  ngOnInit(): void {
    this.value = this.defaultValue;
  }

  setValue() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}

import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconDefinition, faCircleCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Question, QuestionType } from '../../../../core/surveys/models/survey.model';

@Component({
  selector: 'empathy-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
  @Input() question!: Question;

  @Input() index: number = 1;

  @ViewChildren('questionOptions')
  options!: QueryList<ElementRef>;

  faCheck: IconDefinition = faCircleCheck;
  faMultiple: IconDefinition = faListCheck;

  showChangeQuestionType: boolean = false;
  questionForm!: FormGroup

  saving: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.questionForm = this.fb.group({
      title: ['', [Validators.required]],
      option1: ['', [Validators.required]],
      option2: ['', [Validators.required]]
    })


    this.questionForm.get("title")?.patchValue(this.question.questionText);

    this.question.options!.forEach((option: string, index: number) => {
      let parsedValue = option;
      if(parsedValue.startsWith("-"))
        parsedValue = parsedValue.replace("-", '');
      if(this.questionForm.get(`option${index+1}`)) {
        this.questionForm.get(`option${index+1}`)?.patchValue(parsedValue);
      } else {
        this.questionForm.addControl(`option${index+1}`, new FormControl(parsedValue, [Validators.required]));
      }
    });

    this.questionForm.updateValueAndValidity();

    this.questionForm.valueChanges
      .pipe(
          debounceTime(2000),
          distinctUntilChanged()
      )
      .subscribe(res => {
          console.log(res)
          this.setSaving(false)
      });

      this.questionForm.valueChanges
      .subscribe(res => {
          console.log(res)
          this.setSaving(true)
      });
  }

  addOption(idx: number) {
    console.log(idx)
    let index = this.question.options!.length;
    console.log("options lenght", index)
    this.question.options!.push(`Option ${index+1}`)

    let existingForm = this.questionForm.get(`option${index+1}`)

    if(!existingForm) {
      this.questionForm.addControl(`option${index+1}`, new FormControl('', [Validators.required]));
    }
    requestAnimationFrame(()=>{
     this.options.last.nativeElement.focus()
    })

  }

  deleteOption(index: number) {
    let options = this.question.options!.length;
    console.log(this.questionForm.get("option"+(index+1))?.value)
    if(options > 2
      && (this.questionForm.get("option"+(index+1))?.value === ''
      || this.questionForm.get("option"+(index+1))?.value === null)) {
      console.log("options lenght", (index+1))
      let deleteOption = this.question.options![index];
      console.log("options", this.question.options)
      this.question.options = this.question.options!.filter((option: any) => {return option !== deleteOption})
      this.questionForm.removeControl(`option${index+1}`);
      console.log(index)
      requestAnimationFrame(()=> {
        if(index > 0)
          this.options.last.nativeElement.focus()
      })
    }
  }


  updateOption(questionIdx: number, index: number) {
    //TODO: ADD AGAIN HYPHENS
  }


  changeQuestionType(event: { type: QuestionType }) {
    this.showChangeQuestionType = false;
    this.question.questionType = event.type;
  }

  setSaving(state: boolean) {
    this.saving = state
  }
}

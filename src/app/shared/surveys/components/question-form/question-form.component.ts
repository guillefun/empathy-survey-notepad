import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconDefinition, faCircleCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Question, QuestionType } from '../../../../core/surveys/models/survey.model';


interface QuestionForm {
  title: string,
  option1: string,
  option2: string,
  [key: string]: string
}

@Component({
  selector: 'empathy-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
  @Input()
  question!: Question;

  @Input()
  index: number = 1;

  @Output()
  update: EventEmitter<Question> = new EventEmitter<Question>();

  @ViewChildren('questionOptions')
  options!: QueryList<ElementRef>;

  readonly MINIMUM_OPTIONS = 2;

  faCheck: IconDefinition = faCircleCheck;
  faMultiple: IconDefinition = faListCheck;

  showChangeQuestionType: boolean = false;
  questionForm!: FormGroup

  saving: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      title: ['', [Validators.required]],
      option1: ['', [Validators.required]],
      option2: ['', [Validators.required]]
    })


    this.questionForm.get("title")?.patchValue(this.question.questionText ?? '');

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
    .subscribe(_res => {
        this.setSaving(true)
    });

    this.questionForm.valueChanges
      .pipe(
          debounceTime(1000),
          distinctUntilChanged()
      )
      .subscribe((res: QuestionForm) => {
        let options: string[] = this.updateOption(res);

        let questionData: Question = {
          questionId: this.question.questionId,
          questionText: res.title,
          mandatoryInd: this.question.mandatoryInd,
          questionType: this.question.questionType,
          options: options,
          randomizeOptionsInd: this.question.randomizeOptionsInd,
        };
        this.setSaving(false)
        this.update.emit(questionData);
      });
  }

  jumpOption(index: number) {
    this.options.get(index+1)?.nativeElement.focus()
  }

  addOption() {
    let index = this.question.options!.length;

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
    let optionsLength = this.question.options!.length;

    if(optionsLength > this.MINIMUM_OPTIONS
      && (this.questionForm.get("option"+(index+1))?.value === ''
      || this.questionForm.get("option"+(index+1))?.value === null)) {

      let deleteOption = this.question.options![index];

      this.question.options = this.question.options!.filter((option: any) => {return option !== deleteOption})
      this.questionForm.removeControl(`option${index+1}`);

      requestAnimationFrame(()=> {
        if(index > 0)
          this.options.last.nativeElement.focus()
      })
    }
  }

  updateOption(res: QuestionForm) {
    let options: string[] = [];
    Object.keys(res).forEach((key: string)=>{
      if(key.startsWith("option")){
        options.push(`-${res[key]}`);
      }
    });

    return options;
  }

  changeQuestionType(type: QuestionType) {
    this.showChangeQuestionType = false;
    this.question.questionType = type;
    this.update.emit(this.question);
  }

  setSaving(state: boolean) {
    this.saving = state
  }

  updateRandomizeFlag(state: boolean) {
    this.question.randomizeOptionsInd = state
    this.update.emit(this.question);
  }

  updateMandatoryFlag(state: boolean) {
    this.question.mandatoryInd = state
    this.update.emit(this.question);
  }
}

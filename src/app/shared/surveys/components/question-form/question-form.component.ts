import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'empathy-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
  @Input() question: any;

  @ViewChildren('questionOptions')
  options!: QueryList<ElementRef>;


  questionForm!: FormGroup
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

    this.question.options.forEach((option:any, index: number) => {
      if(this.questionForm.get(`option${index+1}`)) {
        this.questionForm.get(`option${index+1}`)?.patchValue(option);
      } else {
        this.questionForm.addControl(`option${index+1}`, new FormControl(option, [Validators.required]));
      }
    });

    this.questionForm.updateValueAndValidity()
  }

  addOption(idx: number) {
    console.log(idx)
    let index = this.question.options.length;
    console.log("options lenght", index)
    this.question.options.push(`Option ${index+1}`)

    let existingForm = this.questionForm.get(`option${index+1}`)

    if(!existingForm) {
      this.questionForm.addControl(`option${index+1}`, new FormControl('', [Validators.required]));
    }
    requestAnimationFrame(()=>{
     this.options.last.nativeElement.focus()
    })

  }

  deleteOption(index: number) {
    let options = this.question.options.length;
    console.log(this.questionForm.get("option"+(index+1))?.value)
    if(options > 2
      && (this.questionForm.get("option"+(index+1))?.value === ''
      || this.questionForm.get("option"+(index+1))?.value === null)) {
      console.log("options lenght", (index+1))
      let deleteOption = this.question.options[index];
      console.log("options", this.question.options)
      this.question.options = this.question.options.filter((option: any) => {return option !== deleteOption})
      this.questionForm.removeControl(`option${index+1}`);
      console.log(index)
      requestAnimationFrame(()=> {
        if(index > 0)
          this.options.last.nativeElement.focus()
      })
    }
  }


  updateOption(questionIdx: number, index: number) {

  }
}

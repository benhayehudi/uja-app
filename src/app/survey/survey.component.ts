import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name:string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'date' : [null, Validators.required],
      'weather' : [null, Validators.required],
      'age' : [null, Validators.required],
      'snow' : [null, Validators.required],
      'vegetable' : [null, Validators.required],
      'validate' : ''
    });
   }

   submitForm(survey) {
    this.name = survey.name;
    this.date = survey.date;
    this.weather = survey.weather;
    this.age = survey.age;
    this.snow = survey.snow;
    this.vegetable = survey.vegetable;
  }

  ngOnInit() {
  }

}

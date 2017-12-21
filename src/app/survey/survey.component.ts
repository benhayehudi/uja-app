import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePicker } from '../services/datePicker';
import { SubmitFormService } from '../services/submitForm';
const $ = require('jQuery');

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name:string = '';
  vegetable:string = '';

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

   SubmitForm(rForm) {
    // this.name = rForm.name;
    // this.date = rForm.date;
    // this.weather = rForm.weather;
    // this.age = rForm.age;
    // this.snow = rForm.snow;
    // this.vegetable = rForm.vegetable;
    $.ajax({
    type: "POST",
    url: "https://www.ujafedny.dev/apiv2/survey",
    data: rForm,
    success: function(msg){
          alert("Thank you for your survey.");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert("Error posting your survey.");
    }
  });
  }

  ngOnInit() {

  }

}

import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule({
---------
  imports: [
        BrowserModule,
	HttpModule
  ]
---------
})

@Injectable()
export class SubmitformService {

  constructor(private http:Http) {
    let submission = function() {
      this.http.post('https://www.ujafedny.dev/apiv2/survey/', formInfo)
      .then(alert("Thank you for your survey"))
      .catch(alert("There was an error submitting your survey."))
    }
  }

}

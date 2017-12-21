import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { SurveyComponent } from '../survey/survey.component'

    const routes: Routes = [
      {
        path: 'survey',
        component: SurveyComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }

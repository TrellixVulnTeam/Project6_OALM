import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from "../environments/environment";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ScorecardComponent } from "./scorecard/scorecard.component";
import { CourseSelectionComponent} from "./course-selection/course-selection.component";
import { LoginComponent } from './login/login';
import { RegistrationComponent } from './registration/registration.component';

import { CoursesService } from "./services/courses.service";
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'course-selection', component: CourseSelectionComponent },
  { path: 'scorecard/:player', component: ScorecardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: '**', redirectTo: 'login'},
];


@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    CourseSelectionComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

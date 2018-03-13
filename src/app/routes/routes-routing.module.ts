import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "../registration/registration.component";
import {CourseSelectionComponent} from "../course-selection/course-selection.component";
import {LoginComponent} from "../login/login";
import {ScorecardComponent} from "../scorecard/scorecard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'course-selection', component: CourseSelectionComponent },
  { path: 'scorecard/:player', component: ScorecardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }

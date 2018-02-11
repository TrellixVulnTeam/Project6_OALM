import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CoursesComponent } from "../courses/courses.component";

import { CoursesService } from "../services/courses.service";
import {ScorecardComponent} from "../scorecard/scorecard.component";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

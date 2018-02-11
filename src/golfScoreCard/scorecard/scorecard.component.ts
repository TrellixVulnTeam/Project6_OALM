import {Component, Input} from '@angular/core';
import {Course} from "../models/Course";

@Component({
  selector: 'scorecard-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent{
  @Input() courseInfo: Course;

  constructor() { }

  buildCard() {

  }
}

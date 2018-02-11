import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../services/courses.service";
import { GolfCourses } from "../models/GolfCourses";
import { Course } from "../models/Course";
import { TeeType } from "../models/TeeType";

@Component({
  selector: "courses-component",
  templateUrl: "./courses.component.html",
  styleUrls: []
})
export class CoursesComponent implements OnInit {

  golfCourses: GolfCourses;
  course: Course;
  courseID: number;
  teeTypes: TeeType[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((golfCourses: GolfCourses) => {
      this.golfCourses = golfCourses;
    })
  }

  getTeeTypes(courseID: number): void {
    this.coursesService.getTeeTypes(courseID).subscribe((course: Course) => {
      this.course = course;
      this.teeTypes = course.course.tee_types;
    })
  }
}

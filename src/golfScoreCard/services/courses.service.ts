import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { GolfCourses } from "../models/GolfCourses";
import {Course} from "../models/Course";

@Injectable()
export class CoursesService {

  private coursesUrl: string = "http://golf-courses-api.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<GolfCourses> {
    return this.httpClient.post<GolfCourses>(`${this.coursesUrl}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 15
    });
  }

  getTeeTypes(courseID: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/courses/${courseID}`);
  }
}


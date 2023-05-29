import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SubjectList } from '../Classes/SubjectList';
import { Subject } from '../Classes/Subject';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  currentSubject = DEFAULT_SUBJECT
  subject$: BehaviorSubject<Subject> = new BehaviorSubject<Subject>(DEFAULT_SUBJECT)
  selectSubject(subject: Subject) {
    console.log("change")
    this.subject$.next(subject)
  }
  constructor() { }
}
var subjectList = new SubjectList();
const DEFAULT_SUBJECT = subjectList.SubjectMap.get(0)
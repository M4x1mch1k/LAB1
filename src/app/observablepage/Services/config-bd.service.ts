import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from '../Classes/Subject';

@Injectable({
  providedIn: 'root'
})
export class ConfigBdService {

  currentSubject = DEFAULT_SUBJECT;

  subject$: BehaviorSubject<Subject> = new BehaviorSubject<Subject>(DEFAULT_SUBJECT);

  setSubject(subject: Subject){
    console.log("CHANGES!!!");
    this.subject$.next(
      subject
    )
  }

  constructor() { }
}

const DEFAULT_SUBJECT = { id: 0, name: "CPP" };
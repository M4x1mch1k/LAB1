import { Component, OnInit } from '@angular/core';
import { SubjectList } from './Classes/SubjectList';
import { ConfigService } from './Services/config.service';
import { Subscription } from 'rxjs';
import { ProfessorList } from './Classes/ProfessorList'; 
import { Subject } from './Classes/Subject';
import { Professor } from './Classes/Professor';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  subjects = new SubjectList();

  private configServive = new ConfigService();

  private subsriptions: Subscription[] = [];

  professorList = new ProfessorList(this.configServive);

  subject: Subject = new Subject();

  count = 0

  constructor() { }

  ngOnInit() {
    const subjectSub = this.configServive.subject$
      .subscribe(() => { this.subject = this.configServive.subject$.value });
    this.subsriptions.push(subjectSub)
  }
  nextSubject() {
    if (this.count < this.subjects.SubjectMap.size - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configServive.selectSubject(this.subjects.SubjectMap.get(this.count))
  }
  addSubject(subjectIN: any) {
    let subject = new Subject();
    subject.id = this.subjects.SubjectMap.size;
    subject.name = subjectIN
    this.subjects.add(subject);
  }

  addProfessor(name: any, departament: any) {
    let professor = new Professor();
    professor.name = name;
    professor.departament = departament;
    professor.subject_id = this.subject.id;
    this.professorList.add(professor)

  }
  ngOnDestroy() {
    this.subsriptions.forEach(s => s.unsubscribe());
  }

}
import { Component, OnInit } from '@angular/core';
import { SubjectList } from './Classes/SubjectList';
import { ConfigService } from './Services/config.service';
import { ConfigBdService } from './Services/config-bd.service';
import { Subscription } from 'rxjs';
import { ProfessorList } from './Classes/ProfessorList'; 
import { Subject } from './Classes/Subject';
import { Professor } from './Classes/Professor';
import { FirebaseService } from './firebase.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  subjects = new SubjectList();

  private configServive = new ConfigBdService();

  private subsriptions: Subscription[] = [];

  professorList = new ProfessorList(this.configServive);

  subject: Subject = new Subject();

  count = 0

  bdSubject = 'Subject';
  bdProfessor = 'Professor';

  constructor( public fbService: FirebaseService ) { }

  ngOnInit() {

    this.fetchTask(this.bdProfessor, true);

    let taskRes = this.fbService.getRecordList(this.bdProfessor, true);
    taskRes.snapshotChanges().subscribe(
    )

    this.fetchTask(this.bdSubject, false);
    let taskRes1 = this.fbService.getRecordList(this.bdSubject, false);
    taskRes1.snapshotChanges().subscribe(
    )

    const subjectSub = this.configServive.subject$
      .subscribe(() => { this.subject = this.configServive.subject$.value });
    this.subsriptions.push(subjectSub)
  }

  fetchTask(bd: any, op: any){
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
      console.log(res);
      if(op){
        this.professorList.professorList = res;
      }else{
        this.subjects.subject = res;
        this.subject = this.subjects.subject[this.count];
        this.professorList.search(this.subject.id);
      }
    })
  }
  
  nextSubject() {
    if (this.count < this.subjects.subject.length - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configServive.setSubject(this.subjects.subject[this.count])
  }

  addSubject(subjectIN: any) {
    let subject = new Subject();
    subject.id = this.subjects.subject.length + 1;
    subject.name = subjectIN
    this.fbService.createSubject(subject);
  }

  addProfessor(name: any, departament: any) {
    let professor = new Professor();
    professor.name = name;
    professor.departament = departament;
    professor.subject_id = this.subject.id;
    
    this.fbService.createProfessor(professor);
    this.professorList.search(this.subject.id);
    this.professorList.add(professor);
  }
  ngOnDestroy() {
    this.subsriptions.forEach(s => s.unsubscribe());
  }

}
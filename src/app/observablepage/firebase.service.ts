import { Injectable } from '@angular/core';
import { Professor } from './Classes/Professor';
import { Subject } from './Classes/Subject';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  subjectListRef?: AngularFireList<any>;
  professorListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createProfessor(professor: Professor){
    return this.professorListRef?.push({
      name: professor.name,
      subject_id: professor.subject_id,
      departament: professor.departament
    })
  }

  createSubject(subject: Subject){
    return this.subjectListRef?.push({
      id: subject.id,
      name: subject.name
    })
  }

  getRecord(id: number, bd: string){
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef= " + this.bdRef.snapshotChanges());
    return this.bdRef
  }

  //? true = professor
  //? false = subject
  getRecordList(bd: string, op:boolean){
    if (op){
      this.professorListRef = this.db.list('/' + bd);
      return this.professorListRef;
    }else{
      this.subjectListRef = this.db.list('/' + bd);
      return this.subjectListRef;
    }
  }

  updateSubject(id: number, subject: Subject, bd: string){
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: subject.id,
      name: subject.name
    })
  }

  updateProfessor(id: number, professor: Professor, bd: string){
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      name: professor.name,
      subject_id: professor.subject_id,
      departament: professor.departament
    })
  }

  deleteRecord(id: string, bd: string){
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}

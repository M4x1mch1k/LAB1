import { Subject } from "./Subject";

export class SubjectList {
    subject = new Array();
    constructor() {}
    add(subj: Subject) {
        this.subject.push(subj);
    }
}
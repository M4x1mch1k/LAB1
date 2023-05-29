import { Subject } from "./Subject";

export class SubjectList {
    SubjectMap = new Map();
    constructor() {
        this.SubjectMap.set(0, { id: 0, name: "CPP" }),
        this.SubjectMap.set(1, { id: 1, name: "OOAP" })

    }
    add(subject: Subject) {
        this.SubjectMap.set(subject.id, { id: subject.id, name: subject.name })
    }
}
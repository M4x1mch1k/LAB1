import { ConfigService } from "../Services/config.service";
import { Professor } from "./Professor";

export class ProfessorList {
    private professorList = new Array();
    private searchProfessor = new Array();
    searchProfessorResult: string[] = []

    subjectSub = this.configService.subject$

        .subscribe(() => {
            let subject = this.configService.subject$.value;
            this.search(subject.id)
        })

    constructor(private configService: ConfigService) {
        let professor = new Professor();
        professor.name = "Professor 1";
        professor.subject_id = 0;
        professor.departament = "KIT";
        this.add(professor);
        let professor1 = new Professor();
        professor1.name = "Professor 2";
        professor1.subject_id = 1;
        professor1.departament = "FIT";
        this.add(professor1);
        this.search(0);

    }
    search(id_subject: number) {
        this.searchProfessor = this.professorList.filter((professor) => {
            return professor.subject_id == id_subject;
        })
        this.searchProfessorResult = [];
        this.searchProfessor.forEach(el => {
            this.searchProfessorResult.push("Name: " + el.name)
            this.searchProfessorResult.push("Departament: " + el.departament)
        })
    }
    add(professor: Professor) {
        this.professorList.push(professor);
        this.search(professor.subject_id)
    }

}
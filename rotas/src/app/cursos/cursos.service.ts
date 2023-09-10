import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'React-Facebook' },
      { id: 2, nome: 'Angular-Google' }
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for(let i=0; i<cursos.length; i++) {
      let curso = cursos[i];
      if(curso.id == id) { // Se fosse '===' compara se o tipo tbm é igual. String, number, etc
        return curso;
      }
    }
    return null;
  }
}

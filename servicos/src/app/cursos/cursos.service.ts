import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'];

  constructor() {
    console.log('CursosService');
   }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}

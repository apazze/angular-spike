import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'];
  }
}

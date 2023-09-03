import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter();

// força para que a instancia seja compartilhada/global com uso do static, pois no exemplo foi implementado para fins didaticos, para que cada componente use uma instancia local de CursoService
  static criouNovoCurso = new EventEmitter(); 

  private cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'];

  constructor(private logService: LogService) {
    console.log('CursosService');
   }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`); // template literal -> EcmaScript 6
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso); // emite um evento para toda a aplicação (broadcast)
    CursosService.criouNovoCurso.emit(curso); // invocando o static acima!
  }
}

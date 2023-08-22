import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.css']
})
export class DiretivaNgIfComponent {

  cursos: string[] = [];

  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}

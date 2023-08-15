import { Component } from '@angular/core';

import { MeuPrimeiroServicoService } from '../meu-primeiro-servico.service';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent {

  nome!: string; //inicializando com o !
  cursos!: string[];

  constructor(private primeiroServico: MeuPrimeiroServicoService) { // Nao precisa declarar como atributo da classe declarando como private no construtor
    this.nome = "Alisson";
    // var servico = new MeuPrimeiroServicoService(); // Para nao precisar instanciar manualmente... a injeção no Angular deve ser feita via construtor, e nao via Setter q nem o Java...

    this.cursos = this.primeiroServico.getCursos(); // Tem que declarar em providers no NgModule da AppModule ou na module local para ficar em escopo local
  }

}

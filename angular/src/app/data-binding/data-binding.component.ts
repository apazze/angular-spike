import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = "https://www.youtube.com/watch?v=rlVxG2lG1Tk&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=10";

  cursoAngular: boolean = true;

  valorAtual!: string;
  valorSalvo!: string;

  urlImagem: string = "http://lorempixel.com.br/400/200"

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Alisson',
    idade: 32,
    end: {
      rua: 'Saturnino'
    }
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  getImagem() {
    return "http://lorempixel.com.br/400/200"
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}

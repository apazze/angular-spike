import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = "https://www.youtube.com/watch?v=rlVxG2lG1Tk&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=10";

  cursoAngular: boolean = true;

  urlImagem: string = "http://lorempixel.com.br/400/200"

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  getImagem() {
    return "http://lorempixel.com.br/400/200"
  }
}

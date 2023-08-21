import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  // <p>Meu primeiro componente com Template Literal, ver no ECMA Script a sintaxe, que é o codigo transpilado de TypeScript para JS puro para funcionar nos navegadores.</p>
  // `, // declarando um template inline é recomendavel somente até 3 linhas por boa pratica, pode excluir o arquivo html...
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}

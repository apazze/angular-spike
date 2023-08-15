import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>Meu primeiro componente com Template Literal, ver no ECMA Script a sintaxe, que é o codigo transpilado de TypeScript para JS puro para funcionar nos navegadores.</p>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}

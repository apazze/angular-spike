import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'titulo livro',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23), // indice do mes começa em 0
    url: 'http://www.blabla.com'
  };

  livros: string[] = ['Java', 'Angular', 'TypeScript'];

  filtro!: string;

  addLivro(livro: string) {
    this.livros.push(livro);
    console.log(this.livros);
  }

  obterLivros() {
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}

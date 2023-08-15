import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuPrimeiroServicoService {

  constructor() { }

  getCursos() {
    return ['Java', 'Angular', 'Python'];
  }
}

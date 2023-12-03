import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, ''); // só digitos

    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
      } else {
        return of ({})
      }
    } else {
      return of ({})
    }
  }
}

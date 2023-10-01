import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  // usuario: any = {
  //   nome: 'Alisson',
  //   email: 'alisson@email.com'
  // }
  constructor(private http: HttpClient) {}

  usuario: any = {
    nome: null,
    email: null,
    rua: null
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
  }

  consultaCep(cep: any) {
    var filterCep = (cep.target as HTMLInputElement).value;
    filterCep = filterCep.replace(/\D/g, ''); // só digitos

    if (filterCep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(filterCep)) {
        this.http.get(`https://viacep.com.br/ws/${filterCep}/json`)
        .subscribe(r => console.log(r));
      }
    }

    console.log(filterCep)
  }
}

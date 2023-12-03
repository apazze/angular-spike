import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { of } from 'rxjs';

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
  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  usuario: any = {
    nome: null,
    email: null,
    rua: null
  }

  onSubmit(form: any) {
    console.log(form)

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .subscribe(dados => {
      console.log(dados);
      //reset do form em caso de sucesso
      form.form.reset();
    });
  }

  consultaCep(cep: any, form: any) {
    var filterCep = (cep.target as HTMLInputElement).value;
    filterCep = filterCep.replace(/\D/g, ''); // só digitos

    if(filterCep != null && filterCep!== '') { //cep != null -> verifica se não é null e tbm undefined!
      this.cepService.consultaCep(filterCep).subscribe(data => this.populaDadosForm(data, form));
    }

    return of ({});
  }

  populaDadosForm(dados: any, formulario: NgForm) {
    // formulario.setValue({
    //   nome2: formulario.value.nome2,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    console.log(formulario)

//pega só os campos que sofreram atualização
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

}

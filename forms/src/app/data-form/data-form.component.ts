import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) {}

  ngOnInit(): void {

    // + verboso (trabalhoso)
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })

    });
  }

  onSubmit() {
    console.log(this.formulario.value)

    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe({
        next: (dados: any) => {
          console.log(dados);
          //reseta o form em caso de sucesso
          this.resetar();
        },
        error: (e: any) => {
          console.log(e);
          alert(e);
        },
        complete: () => console.log('Complete')
      });
    } else {
      console.log('Form invalido')
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo: any) => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty(); // marca como sujo ou modificado para apresentar ao usuario que deve corrigir

      // Recursivo! Verifica ate chegar no ultimo nivel no caso de endereço que é um grupo
      if(controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar(): void {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  verificaValidTouched(campo: string) {

    // this.formulario.controls[campo] // pode fazer assim tbm!!

    return !this.formulario.get(campo)?.valid &&
            (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty); // dirty -> sofreu modificação

  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if(campoEmail?.errors) {
      return campoEmail?.errors['email'] && campoEmail.touched
    }
  }

  // o JS trata arrays e objetos como dicionario => chave e valor

  consultaCep() {
    let cep = this.formulario.get('endereco.cep')?.value;

    cep = cep.replace(/\D/g, ''); // só digitos

    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.resetaDadosForm()

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(data => this.populaDadosForm(data));
      }
    }
    console.log(cep)
  }

  // A diferença do setValue é que as props que nao passar receberão nulo,
  // ja o patchValue atualiza só as passadas e nao meche nos valores das outras
  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get('nome')?.setValue('Setando nome apenas para exemplo')
  }

}

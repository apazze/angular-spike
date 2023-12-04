import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropDownService } from '../shared/services/drop-down.service';
import { EstadoBr } from '../shared/models/EstadoBr';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { of } from 'rxjs';
import { FormValidations } from '../shared/FormValidations';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  formulario!: FormGroup;
  // estados!: EstadoBr[];
  estados!: Observable<EstadoBr[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletter!: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropDownService,
    private cepService: ConsultaCepService,
    private verificarEmailService: VerificaEmailService
    ) {}

  ngOnInit(): void {

    this.verificarEmailService.verificarEmail('email@email.com').subscribe();

    // + verboso (trabalhoso)
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    //forma a evitar vazamento de memoria com a destruição do componente não houver o unsubscribe

    // this.dropDownService.getEstadosBr()
    // .subscribe((dados: any) => {
    //   console.log(dados)
    //   this.estados = dados
    // });

    //correto:
    this.estados = this.dropDownService.getEstadosBr(); // com o pipe async no template ele se encarrega de fazer o unsubscribe

    this.cargos = this.dropDownService.getCargos();

    this.tecnologias = this.dropDownService.getTecnologias();

    this.newsletter = this.dropDownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, FormValidations.equalsTo('email')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks() //FormArray -> usado para multiplos valores
    });
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false)); //false -> campo desmarcado
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  onSubmit() {
    console.log(this.formulario)

    //Manipular os dados de frameworks, onde deseja enviar o array de strings e nao true ou false...

    let valuesSubmit = Object.assign({}, this.formulario.value) // copia para uma const vazia (o value é imutavel!)

    // mandar só os que são true, mas o nome do framework correspondente... ex: 'angular'

    valuesSubmit = Object.assign(valuesSubmit, {
      frameworks: valuesSubmit.frameworks
      .map((v: any, i: number) => v ? this.frameworks[i] : null)
      .filter((v :any) => v !== null)
    })

    console.log(valuesSubmit);

    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valuesSubmit))
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

  // requiredMinCheckbox(min: number = 1) {
  //   const validator = (formArray: FormArray) => {

  //     //logica estruturada
  //     // const values = formArray.controls;
  //     // let totalChecked = 0;
  //     // for (let i=0; i < values.length; i++) {
  //     //   if(values[i].value) {
  //     //     totalChecked++;
  //     //   }
  //     // }

  //     //programação funcional e reativa

  //     const totalChecked = formArray.controls
  //     .map(v => v.value) // array de true ou false
  //     .reduce((total, current) => current ? total + current : total, 0); // reduz a um unico valor, se o valor corrente é true, soma a var total que começa com '0' (ultimo parametro)

  //     return totalChecked >= min ? null : { required: true };
  //   }
  //   return validator;
  // }

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

  verificaRequired(campo: string) {
    return this.formulario.get(campo)?.hasError('required') &&
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

    if(cep != null && cep!== '') { //cep != null -> verifica se não é null e tbm undefined!
      this.cepService.consultaCep(cep).subscribe(data => this.populaDadosForm(data));
    }

    return of ({});
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

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php']);
  }

  getFrameworksControls() {
    return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
  }

}

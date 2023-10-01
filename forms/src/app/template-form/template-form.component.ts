import { Component } from '@angular/core';

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

  usuario: any = {
    nome: null,
    email: null,
    rua: null
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
  }
}

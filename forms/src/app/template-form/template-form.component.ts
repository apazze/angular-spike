import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: 'Alisson',
    email: 'alisson@email.com'
  }

  onSubmit(form: any) {
    console.log(form.value)
    console.log(this.usuario)
  }
}

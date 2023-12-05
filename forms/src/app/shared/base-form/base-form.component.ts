import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export class BaseFormComponent {

  formulario!: FormGroup;

  // onSubmit() {
  //   if(this.formulario.valid) {
  //     // this.submit();
  //   }
  // }

  // abstract submit(): any;

}

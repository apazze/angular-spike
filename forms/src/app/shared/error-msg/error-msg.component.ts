import { Component, Input, OnInit } from '@angular/core';
import { FormValidations } from '../FormValidations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit{

  // @Input() msgErro!: string;
  // @Input() mostrarErro!: boolean | undefined;
  @Input() control!: any;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {
  }

  //declara a propriedade da classe com o getter, mas nao havera setter! Acessa com this.errorMessage

  get errorMessage() {

    //uso do for in // pode ser com let tbm

    if(this.control && this.control.errors) {
      for(const propertyName in this.control.errors) {
        if(this.control.errors.hasOwnProperty(propertyName) &&  // lint pede pra realizar essa verificação no for in (hasOwnProperty)
          this.control.touched) {
            return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
        }
      }
    }

    return null;
  }
}

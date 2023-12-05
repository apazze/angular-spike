import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef (() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {
  //Classe generica para qq campo de input html para o Angular utilizar
  //Necessario implementar essa interface e seus metodos para controle e gerenciamento dos valores devido ao value accessor para o angular linkar com o formControlName

  @Input() classeCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type = 'text';
  @Input() control: any;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  //funções 'dummy' para controle do Angular
  onChangeCallback: (_:any) => void = () => {}; // callbacks para avisar ao Angular q o valor mudou

  onTouchedCallback: (_:any) => void = () => {};

  writeValue(v: any): void {
    this.value = v; // usa o set com a logica
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;

  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

}

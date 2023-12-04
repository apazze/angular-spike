import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: AbstractControl) => { // esse é um controle do formulario, o angular se vira em nos fornecer essa instancia!
      /* const values = formArray.controls;
      let totalChecked = 0;
      for (let i = 0; i < values.length; i++) {
        if (values[i].value) {
          totalChecked += 1;
        }
      } */
      if (formArray instanceof FormArray) {
        const totalChecked = formArray.controls
          .map(v => v.value)
          .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? null : { required: true };
      }
      throw new Error('formArray is not an instance of FormArray');
    }
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;

    if(cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true } //Passa qq chave e qq valor! Dentro de controls, havera errors com esta chave e valor
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if(otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      //Validação para o formulario que ainda nao esta pronto e nao foi renderizado por completo!
      if(!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = formControl.root.get(otherField);
      if(!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if(field.value !== formControl.value) {
        return { equalsTo : otherField } // nao é igual, maneira diferente de fazer retornando o valor e nao falso
      }

      return null; // são iguais!
    }
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: {[index: string]:any} = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} carácteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} carácteres.`,
      'cepInvalido': 'CEP inválido.'
    };
    return config[validatorName];
  }
}

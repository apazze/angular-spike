import { AbstractControl, FormArray, FormControl } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: AbstractControl) => {
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
}

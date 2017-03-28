import { ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

export class ValidationService {
    
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, fieldName?: string):any {
		let config = {
            'genericError': `${validatorValue.message}`,
			'required': `O campo '${fieldName}' é obrigatório.`,
            'maxlength': `O campo "${fieldName}" não pode ter mais de ${validatorValue.requiredLength} caracteres.`,
            'minlength': `O campo "${fieldName}" deve ter mais de ${validatorValue.requiredLength} caracteres.`,
			'invalidEmailAddress': `Email inválido.'`
        }

        if (config[validatorName])
            return config[validatorName]
    }

    //Exibir as respectivias mesnagens de validação dos campos do formulário.
    static formIsValid(form: FormGroup): boolean {
        if (!form.valid)
            for (var i in form.controls)
                form.controls[i].markAsTouched()
        
		return form.valid
    }
	
    static emailValidator(control:AbstractControl): any {
        // RFC 2822 compliant regex
        if (control.value && control.value != ' ') {
            if (control.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
                return null
			else
                return { 'invalidEmailAddress': true }
        }
        return null
    }
}
import { ValidatorFn, FormGroup } from '@angular/forms';

export class ValidationService {

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, fieldName?: string): any {
        let config = {
            'customErro': `${validatorValue.message}`,
            'required': `The field '${fieldName}' is required`,
            'maxlength': `The field '${fieldName}' can not have more than ${validatorValue.requiredLength} characters`,
            'minlength': `The field '${fieldName}' must have more than ${validatorValue.requiredLength} characters`
        }

        if (config[validatorName])
            return config[validatorName]
    }

    //Display the respective form field validation messages
    static formIsValid(form: FormGroup): boolean {
        if (!form.valid)
            for (var i in form.controls)
                form.controls[i].markAsTouched()

        return form.valid
    }
}
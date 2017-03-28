"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue, fieldName) {
        var config = {
            'genericError': "" + validatorValue.message,
            'required': "O campo '" + fieldName + "' \u00E9 obrigat\u00F3rio.",
            'maxlength': "O campo \"" + fieldName + "\" n\u00E3o pode ter mais de " + validatorValue.requiredLength + " caracteres.",
            'minlength': "O campo \"" + fieldName + "\" deve ter mais de " + validatorValue.requiredLength + " caracteres.",
            'invalidEmailAddress': "Email inv\u00E1lido.'"
        };
        if (config[validatorName])
            return config[validatorName];
    };
    //Exibir as respectivias mesnagens de validação dos campos do formulário.
    ValidationService.formIsValid = function (form) {
        if (!form.valid)
            for (var i in form.controls)
                form.controls[i].markAsTouched();
        return form.valid;
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value && control.value != ' ') {
            if (control.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
                return null;
            else
                return { 'invalidEmailAddress': true };
        }
        return null;
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map
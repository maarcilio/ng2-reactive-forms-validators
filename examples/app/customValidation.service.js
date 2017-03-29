"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidation = (function () {
    function CustomValidation() {
    }
    CustomValidation.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value && control.value != ' ') {
            if (control.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
                return null;
            else
                return { 'customErro': { 'message': 'Invalid email' } };
        }
        return null;
    };
    CustomValidation.isNumber = function (control) {
        if (!isNaN(control.value))
            return null;
        return { 'customErro': { 'message': 'Este campo aceita apenas números' } };
    };
    return CustomValidation;
}());
exports.CustomValidation = CustomValidation;
//# sourceMappingURL=customValidation.service.js.map
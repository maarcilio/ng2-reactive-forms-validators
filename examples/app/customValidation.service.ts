export class CustomValidation {
    static emailValidator(control){
        // RFC 2822 compliant regex
        if (control.value && control.value != ' ') {
            if (control.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
                return null
            else
                return { 'customErro': { 'message': 'Invalid email' } }
        }
        return null
    }

    static isNumber(control) {
        if (!isNaN(control.value))
            return null
        return { 'customErro': { 'message': 'Este campo aceita apenas números' } }
    }

}
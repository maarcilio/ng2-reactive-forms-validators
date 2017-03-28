import { ValidationService } from './../services/validation.service'
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'control-messages',
    template: `<div class="msg-error" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
    styles: ['.msg-error:font-size: 12px;color: #a94442;']
})
export class ControlMessages {
    @Input() fieldName: string;
    @Input() control: FormControl;

    constructor() { }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.fieldName);
            }
        }
        return null;
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'ng2-reactive-forms-validators';
import { CustomValidation } from './customValidation.service';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder) { }

    public Name: string;
    public Secondname: string;
    public Email: string;
    public Age: string;
    public Password: string;
    public PasswordRepeat: string;
    public Phone: string;
    public Number: string;
    public Description: string;

    ngOnInit() {
        this.form = this.fb.group({
            'Name': [this.Name, [Validators.required]],
            'SecondName': [this.Secondname, [Validators.required]],
            'Email': [this.Email, [Validators.required, CustomValidation.emailValidator]],
            'Age': [this.Age, [Validators.required, this.adultValidation]],
            'Password': [this.Password, [Validators.required]],
            'PasswordRepeat': [this.PasswordRepeat, [Validators.required, this.passwordRepeatValidation]],
            'Phone': [this.Phone],
            'Number': [this.Number, [Validators.required, CustomValidation.isNumber]],
            'Description': [this.Description, [Validators.minLength(10), Validators.maxLength(100)]],
        })

    }

    send(event) {
        event.preventDefault();

        //if (this.form.valid)
        if (ValidationService.formIsValid(this.form))
            alert('Success')
    }

    //Custom ValidationService
    adultValidation(control) {
        if (control.value > 18)
            return null
        return { 'customErro': { 'message': 'Você previsa ter mais de 18 anos.' } }
    }

    //Custom ValidationService
    passwordRepeatValidation(control) {
        let password = control.parent ? control.parent.controls['Password'].value : null;
        if (control.value == password)
            return null
        return { 'customErro': { 'message': 'Senha incorreta' } }
    }
}

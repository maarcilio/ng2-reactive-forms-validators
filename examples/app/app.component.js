"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_reactive_forms_validators_1 = require("ng2-reactive-forms-validators");
var customValidation_service_1 = require("./customValidation.service");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'Name': [this.Name, [forms_1.Validators.required]],
            'SecondName': [this.Secondname, [forms_1.Validators.required]],
            'Email': [this.Email, [forms_1.Validators.required, customValidation_service_1.CustomValidation.emailValidator]],
            'Age': [this.Age, [forms_1.Validators.required, this.adultValidation]],
            'Password': [this.Password, [forms_1.Validators.required]],
            'PasswordRepeat': [this.PasswordRepeat, [forms_1.Validators.required, this.passwordRepeatValidation]],
            'Phone': [this.Phone],
            'Number': [this.Number, [forms_1.Validators.required, customValidation_service_1.CustomValidation.isNumber]],
            'Description': [this.Description, [forms_1.Validators.minLength(10), forms_1.Validators.maxLength(100)]],
        });
    };
    AppComponent.prototype.send = function (event) {
        event.preventDefault();
        //if (this.form.valid)
        if (ng2_reactive_forms_validators_1.ValidationService.formIsValid(this.form))
            alert('Success');
    };
    //Custom ValidationService
    AppComponent.prototype.adultValidation = function (control) {
        if (control.value > 18)
            return null;
        return { 'customErro': { 'message': 'Você previsa ter mais de 18 anos.' } };
    };
    //Custom ValidationService
    AppComponent.prototype.passwordRepeatValidation = function (control) {
        var password = control.parent ? control.parent.controls['Password'].value : null;
        if (control.value == password)
            return null;
        return { 'customErro': { 'message': 'Senha incorreta' } };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
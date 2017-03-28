"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Módulos Angular
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Serviços
var validation_service_1 = require("./services/validation.service");
//Component
var control_messages_component_1 = require("./component/control.messages.component");
var Ng2ValidatorsModule = (function () {
    function Ng2ValidatorsModule() {
    }
    return Ng2ValidatorsModule;
}());
Ng2ValidatorsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            control_messages_component_1.ControlMessages,
        ],
        exports: [
            control_messages_component_1.ControlMessages,
        ],
        providers: [
            validation_service_1.ValidationService,
        ],
    })
], Ng2ValidatorsModule);
exports.Ng2ValidatorsModule = Ng2ValidatorsModule;
//# sourceMappingURL=ng2-validators.module.js.map
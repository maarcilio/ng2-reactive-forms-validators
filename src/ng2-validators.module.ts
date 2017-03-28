//Módulos Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Serviços
import { ValidationService } from './services/validation.service';

//Component
import{ ControlMessages } from './component/control.messages.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ControlMessages,
    ],
    exports: [
        ControlMessages,
    ],
    providers: [
        ValidationService,
    ],

})
export class Ng2ValidatorsModule { }




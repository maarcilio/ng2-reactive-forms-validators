import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationService } from './src/services/validation.service';
import { ControlMessages } from './src/component/control.messages.component';

export * from './src/services/validation.service';
export * from './src/component/control.messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ControlMessages ],
  exports: [ ControlMessages ]
})
export class Ng2ValidatorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2ValidatorsModule,
      providers: [ValidationService]
    };
  }
}

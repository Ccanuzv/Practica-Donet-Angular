import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoDigitalDecimalNumberDirective } from './two-digita-decimal-number.directive';



@NgModule({
  declarations: [
    TwoDigitalDecimalNumberDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwoDigitalDecimalNumberDirective
  ],
})
export class GlobalComponenteModule { }

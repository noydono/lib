import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoyPickerAngularLibComponent } from './noy-picker-angular-lib.component';

@NgModule({
  declarations: [
    NoyPickerAngularLibComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    NoyPickerAngularLibComponent
  ]
})
export class NoyPickerAngularLibModule { }

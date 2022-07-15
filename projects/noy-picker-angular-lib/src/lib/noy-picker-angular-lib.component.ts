import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'noy-picker-angular-lib',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NoyPickerAngularLibComponent),
      multi: true
    }
  ],
  template: `
    <div data-testId="container">

    </div>
  `,
  styles: []
})
export class NoyPickerAngularLibComponent implements OnInit, ControlValueAccessor {
  @Input() time?: boolean

  value?: Moment

  month?: Moment
  year?: Moment
  hour?: number
  minute?: number

  now: Moment = moment()

  constructor() {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = moment(obj)
      this.month = this.value.clone().startOf('month')
      this.year = this.value.clone().startOf('year')

      if (this.time) {
        this.hour = this.value.clone().hour()
        this.minute = this.value.clone().minute()
      }

    } else {
        this.month = this.now.clone().startOf('month')
        this.year = this.now.clone().startOf('year')

        if (this.time) {
          this.hour = this.now.clone().hour()
          this.minute = this.now.clone().minute()
        }
      }
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

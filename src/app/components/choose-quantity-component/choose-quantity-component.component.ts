import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-choose-quantity',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './choose-quantity-component.component.html',
  styleUrls: ['./choose-quantity-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponentComponent,
    },
  ],
})
export class ChooseQuantityComponentComponent implements ControlValueAccessor {
  disabled = true;
  inputText = new FormControl(null);

  onChange!: (value: number | null) => void;
  onTouched!: () => void;

  constructor() {}

  writeValue(obj: any): void {
    console.log(obj);
    this.inputText.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  doInput() {
    console.log('input', this.inputText.value);
    this.onChange(this.inputText.value);
  }

  doBlur() {
    this.onTouched();
  }

  ngOnInit(): void {}

  onLockSelect(checked: boolean) {
    this.disabled = !checked;
    this.inputText.reset();
    this.onChange(this.inputText.value);
  }

  disabledInput(disabled: boolean) {
    return {
      'placeholder-gray-700': disabled,
      'cursor-not-allowed': disabled,
      'disabled:opacity-50': disabled,
      'hover:border-gray-700': disabled,
      'border-gray-700': disabled,
      'text-gray-700': disabled,
    };
  }
}

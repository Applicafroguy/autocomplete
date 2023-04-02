import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: string = 'hey';
  formB!: FormGroup;

  departments = ['apple', 'microsft', 'google'];

  test(event: string) {
    console.log('Even', event);
  }
  constructor(private fb: FormBuilder) {
    this.formB = this.fb.group({
      data: ['haha', Validators.required],
    });
  }
}

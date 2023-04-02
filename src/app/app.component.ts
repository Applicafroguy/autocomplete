import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDepartment!: string;
  selectedSchool!: string;
  departments = ['apple', 'microsft', 'google'];
  schools = ['khanyolwethu', 'cput', 'uwc', 'nomzamo high'];

  selectDepartment(value: string) {
    // Use this value to do wat ever you want
    console.log('Department Value', value);
  }

  selectSchool(value: string) {
    // Use this value to do wat ever you want
    console.log('School Value', value);
  }
}

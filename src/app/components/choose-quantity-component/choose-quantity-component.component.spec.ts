import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuantityComponentComponent } from './choose-quantity-component.component';

describe('ChooseQuantityComponentComponent', () => {
  let component: ChooseQuantityComponentComponent;
  let fixture: ComponentFixture<ChooseQuantityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChooseQuantityComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseQuantityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

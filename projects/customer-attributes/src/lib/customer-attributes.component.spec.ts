import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAttributesComponent } from './customer-attributes.component';

describe('CustomerAttributesComponent', () => {
  let component: CustomerAttributesComponent;
  let fixture: ComponentFixture<CustomerAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

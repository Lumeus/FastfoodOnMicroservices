import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderingComponent } from './cart-ordering.component';

describe('CartOrderingComponent', () => {
  let component: CartOrderingComponent;
  let fixture: ComponentFixture<CartOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

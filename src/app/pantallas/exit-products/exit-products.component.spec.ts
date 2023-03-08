import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitProductsComponent } from './exit-products.component';

describe('ExitProductsComponent', () => {
  let component: ExitProductsComponent;
  let fixture: ComponentFixture<ExitProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

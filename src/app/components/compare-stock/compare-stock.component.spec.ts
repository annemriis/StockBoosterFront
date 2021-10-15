import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStockComponent } from './compare-stock.component';

describe('CompareStockComponent', () => {
  let component: CompareStockComponent;
  let fixture: ComponentFixture<CompareStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

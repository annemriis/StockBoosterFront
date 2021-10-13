import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGraphicalInterfaceComponent } from './stock-graphical-interface.component';

describe('StockGraphicalInterfaceComponent', () => {
  let component: StockGraphicalInterfaceComponent;
  let fixture: ComponentFixture<StockGraphicalInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockGraphicalInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGraphicalInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

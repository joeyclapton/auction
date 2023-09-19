import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuoterComponent } from './price-quoter.component';

describe('PriceQuoterComponent', () => {
  let component: PriceQuoterComponent;
  let fixture: ComponentFixture<PriceQuoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceQuoterComponent]
    });
    fixture = TestBed.createComponent(PriceQuoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

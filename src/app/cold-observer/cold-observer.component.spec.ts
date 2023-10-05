import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObserverComponent } from './cold-observer.component';

describe('ColdObserverComponent', () => {
  let component: ColdObserverComponent;
  let fixture: ComponentFixture<ColdObserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdObserverComponent]
    });
    fixture = TestBed.createComponent(ColdObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

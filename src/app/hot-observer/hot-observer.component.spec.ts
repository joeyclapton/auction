import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObserverComponent } from './hot-observer.component';

describe('HotObserverComponent', () => {
  let component: HotObserverComponent;
  let fixture: ComponentFixture<HotObserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotObserverComponent]
    });
    fixture = TestBed.createComponent(HotObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

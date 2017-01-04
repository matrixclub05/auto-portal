/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarketServiceBookComponent } from './market-service-book.component';

describe('MarketServiceBookComponent', () => {
  let component: MarketServiceBookComponent;
  let fixture: ComponentFixture<MarketServiceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketServiceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

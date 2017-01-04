/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TooMuchTimeWOServiceComponent } from './too-much-time-woservice.component';

describe('TooMuchTimeWOServiceComponent', () => {
  let component: TooMuchTimeWOServiceComponent;
  let fixture: ComponentFixture<TooMuchTimeWOServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooMuchTimeWOServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooMuchTimeWOServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

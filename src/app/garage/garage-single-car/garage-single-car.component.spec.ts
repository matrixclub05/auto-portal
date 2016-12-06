/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarageSingleCarComponent } from './garage-single-car.component';

describe('GarageSingleCarComponent', () => {
  let component: GarageSingleCarComponent;
  let fixture: ComponentFixture<GarageSingleCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageSingleCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageSingleCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

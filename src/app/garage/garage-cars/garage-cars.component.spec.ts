/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarageCarsComponent } from './garage-cars.component';

describe('GarageCarsComponent', () => {
  let component: GarageCarsComponent;
  let fixture: ComponentFixture<GarageCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

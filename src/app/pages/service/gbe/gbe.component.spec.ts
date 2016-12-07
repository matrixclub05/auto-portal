/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GBEComponent } from './gbe.component';

describe('GBEComponent', () => {
  let component: GBEComponent;
  let fixture: ComponentFixture<GBEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GBEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

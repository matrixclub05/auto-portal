/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BanerComponent } from './baner.component';

describe('BanerComponent', () => {
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

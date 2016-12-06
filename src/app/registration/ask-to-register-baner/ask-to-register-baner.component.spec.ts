/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AskToRegisterBanerComponent } from './ask-to-register-baner.component';

describe('AskToRegisterBanerComponent', () => {
  let component: AskToRegisterBanerComponent;
  let fixture: ComponentFixture<AskToRegisterBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskToRegisterBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskToRegisterBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

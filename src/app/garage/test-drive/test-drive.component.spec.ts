/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestDriveComponent } from './test-drive.component';

describe('TestDriveComponent', () => {
  let component: TestDriveComponent;
  let fixture: ComponentFixture<TestDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

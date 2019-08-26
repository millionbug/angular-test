import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CITestComponent } from './citest.component';

describe('CITestComponent', () => {
  let component: CITestComponent;
  let fixture: ComponentFixture<CITestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CITestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CITestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

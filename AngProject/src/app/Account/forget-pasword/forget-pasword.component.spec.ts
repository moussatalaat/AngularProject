import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPaswordComponent } from './forget-pasword.component';

describe('ForgetPaswordComponent', () => {
  let component: ForgetPaswordComponent;
  let fixture: ComponentFixture<ForgetPaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

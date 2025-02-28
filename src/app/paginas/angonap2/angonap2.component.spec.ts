import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angonap2Component } from './angonap2.component';

describe('Angonap2Component', () => {
  let component: Angonap2Component;
  let fixture: ComponentFixture<Angonap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angonap2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angonap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

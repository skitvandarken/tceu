import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibersecComponent } from './cibersec.component';

describe('CibersecComponent', () => {
  let component: CibersecComponent;
  let fixture: ComponentFixture<CibersecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CibersecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibersecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

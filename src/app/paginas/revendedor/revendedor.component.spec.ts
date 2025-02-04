import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendedorComponent } from './revendedor.component';

describe('RevendedorComponent', () => {
  let component: RevendedorComponent;
  let fixture: ComponentFixture<RevendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevendedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

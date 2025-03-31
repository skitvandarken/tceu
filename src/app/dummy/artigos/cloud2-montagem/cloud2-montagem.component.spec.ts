import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud2MontagemComponent } from './cloud2-montagem.component';

describe('Cloud2MontagemComponent', () => {
  let component: Cloud2MontagemComponent;
  let fixture: ComponentFixture<Cloud2MontagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloud2MontagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloud2MontagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

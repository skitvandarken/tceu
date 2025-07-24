import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmapComponent } from './netmap.component';

describe('NetmapComponent', () => {
  let component: NetmapComponent;
  let fixture: ComponentFixture<NetmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

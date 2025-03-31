import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptransitComponent } from './iptransit.component';

describe('IptransitComponent', () => {
  let component: IptransitComponent;
  let fixture: ComponentFixture<IptransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IptransitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IptransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

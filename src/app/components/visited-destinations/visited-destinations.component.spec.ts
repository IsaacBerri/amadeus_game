import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedDestinationsComponent } from './visited-destinations.component';

describe('VisitedDestinationsComponent', () => {
  let component: VisitedDestinationsComponent;
  let fixture: ComponentFixture<VisitedDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedDestinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitedDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

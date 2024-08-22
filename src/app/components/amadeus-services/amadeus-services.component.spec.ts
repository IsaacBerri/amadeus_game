import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusServicesComponent } from './amadeus-services.component';

describe('AmadeusServicesComponent', () => {
  let component: AmadeusServicesComponent;
  let fixture: ComponentFixture<AmadeusServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmadeusServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmadeusServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

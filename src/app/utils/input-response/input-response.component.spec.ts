import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResponseComponent } from './input-response.component';

describe('InputResponseComponent', () => {
  let component: InputResponseComponent;
  let fixture: ComponentFixture<InputResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

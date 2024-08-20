import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExploreComponent } from './header-explore.component';

describe('HeaderExploreComponent', () => {
  let component: HeaderExploreComponent;
  let fixture: ComponentFixture<HeaderExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

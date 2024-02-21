import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesevenComponent } from './pageseven.component';

describe('PagesevenComponent', () => {
  let component: PagesevenComponent;
  let fixture: ComponentFixture<PagesevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

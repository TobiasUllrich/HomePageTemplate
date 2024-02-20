import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesixComponent } from './pagesix.component';

describe('PagesixComponent', () => {
  let component: PagesixComponent;
  let fixture: ComponentFixture<PagesixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

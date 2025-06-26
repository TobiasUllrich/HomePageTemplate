import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageeightComponent } from './pageeight.component';

describe('PageeightComponent', () => {
  let component: PageeightComponent;
  let fixture: ComponentFixture<PageeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

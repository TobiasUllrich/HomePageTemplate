import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconboxComponent } from './iconbox.component';

describe('IconboxComponent', () => {
  let component: IconboxComponent;
  let fixture: ComponentFixture<IconboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

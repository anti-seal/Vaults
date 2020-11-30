import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrainableComponent } from './drainable.component';

describe('DrainableComponent', () => {
  let component: DrainableComponent;
  let fixture: ComponentFixture<DrainableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrainableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrainableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

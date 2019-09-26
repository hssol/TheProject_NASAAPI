import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionsComponent } from './revolutions.component';

describe('RevolutionsComponent', () => {
  let component: RevolutionsComponent;
  let fixture: ComponentFixture<RevolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

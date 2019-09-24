import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotdComponent } from './potd.component';

describe('PotdComponent', () => {
  let component: PotdComponent;
  let fixture: ComponentFixture<PotdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
